import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    problemDescription: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(console.log("fail"));
      return;
    });

    setForm({ name: "", date: "", problemDescription: "" });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div className="d-flex flex-column">
      <h3>Create New Ticket</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group pt-2 pb-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group pt-2 pb-2">
          <label htmlFor="date">Date</label>
          <input
            type="text"
            className="form-control"
            id="date"
            value={form.date}
            onChange={(e) => updateForm({ date: e.target.value })}
          />
        </div>
        <div className="form-group pt-2 pb-2">
          <label htmlFor="problemDescription">Problem Description</label>
          <input
            type="text"
            className="form-control pt-2 pb-2"
            id="problem-description"
            value={form.problemDescription}
            onChange={(e) => updateForm({ problemDescription: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Create" className="btn btn-primary pt2" />
        </div>
      </form>
    </div>
  );
}
