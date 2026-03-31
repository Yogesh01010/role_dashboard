import { useEffect, useState } from "react";
import API from "../api/axios";
import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";

export default function SuperAdmin() {
  const [admins, setAdmins] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const fetchAdmins = async () => {
    const res = await API.get("/admin");
    setAdmins(res.data);
  };

  const createAdmin = async () => {
    await API.post("/admin", form);
    fetchAdmins();
  };

  const deleteAdmin = async (id) => {
    await API.delete(`/admin/${id}`);
    fetchAdmins();
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Super Admin Dashboard</h1>

      {/* Form */}
      <Card>
        <div className="grid md:grid-cols-4 gap-3">
          <Input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <Input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <Input placeholder="Phone" onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <Input placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        </div>

        <div className="mt-4">
          <Button onClick={createAdmin}>Create Admin</Button>
        </div>
      </Card>

      {/* List */}
      <Card>
        <h2 className="font-semibold mb-3">Admins</h2>
        {admins.map((a) => (
          <div key={a._id} className="flex justify-between border-b py-2">
            <span>{a.name}</span>
            <Button variant="danger" onClick={() => deleteAdmin(a._id)}>
              Delete
            </Button>
          </div>
        ))}
      </Card>
    </div>
  );
}