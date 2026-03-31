import { useEffect, useState } from "react";
import API from "../api/axios";
import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const fetchUsers = async () => {
    const res = await API.get("/user");
    setUsers(res.data);
  };

  const createUser = async () => {
    await API.post("/user", form);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <Card>
        <div className="grid md:grid-cols-4 gap-3">
          <Input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <Input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <Input placeholder="Phone" onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <Input placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        </div>

        <div className="mt-4">
          <Button onClick={createUser}>Create User</Button>
        </div>
      </Card>

      <Card>
        {users.map((u) => (
          <div key={u._id} className="border-b py-2">
            {u.name}
          </div>
        ))}
      </Card>
    </div>
  );
}