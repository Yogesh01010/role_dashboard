import { useEffect, useState } from "react";
import API from "../api/axios";
import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";

export default function User() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");

  const fetchNotes = async () => {
    const res = await API.get("/notes");
    setNotes(res.data);
  };

  const addNote = async () => {
    await API.post("/notes", { title });
    setTitle("");
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await API.delete(`/notes/${id}`);
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">User Dashboard</h1>

      <Card>
        <div className="flex gap-3">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Note title" />
          <Button onClick={addNote}>Add</Button>
        </div>
      </Card>

      <Card>
        {notes.map((n) => (
          <div key={n._id} className="flex justify-between border-b py-2">
            <span>{n.title}</span>
            <Button variant="danger" onClick={() => deleteNote(n._id)}>
              Delete
            </Button>
          </div>
        ))}
      </Card>
    </div>
  );
}