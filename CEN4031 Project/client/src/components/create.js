import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    description: "",
  });
  const navigate = useNavigate();

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const newTicket = { ...form };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTicket),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ name: "", date: "", description: "" });
    navigate("/");
  }

  return (
    <div>
      <h3>Create New Ticket</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="text"
            className="form-control"
            id="date"
            value={form.date}
            onChange={(e) => updateForm({ date: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={form.description}
            onChange={(e) => updateForm({ description: e.target.value })}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Ticket"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
