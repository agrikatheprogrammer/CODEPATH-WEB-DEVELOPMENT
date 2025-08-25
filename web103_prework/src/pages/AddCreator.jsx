import { useState } from "react";
import supabase from "../client";
import { useNavigate } from "react-router-dom";

export default function AddCreator() {
  const [form, setForm] = useState({ name: "", url: "", description: "", imageURL: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from("creators").insert([form]);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Creator</h2>
      <br />
      <input onChange={handleChange} name="name" placeholder="Name" value={form.name} />
      <br />
      <input onChange={handleChange} name="url" placeholder="URL" value={form.url} />
      <br />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={form.description}
      />
      <br />
      <input
        name="imageURL"
        placeholder="Image URL (optional)"
        onChange={handleChange}
        value={form.imageURL}
      />
      <br />
      <button type="submit">Add</button>
    </form>
  );
}
