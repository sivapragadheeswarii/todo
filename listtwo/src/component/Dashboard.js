import React, { useEffect, useState } from "react";
import api from "../axio/Api";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const getTodos = async () => {
    try {
      const res = await api.get("/todos", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(res.data);
    } catch {
      alert("Session expired. Please login.");
      navigate("/login");
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await api.put(`/todos/${editId}`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await api.post("/todos", form, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      setForm({ title: "", description: "" });
      setEditId(null);
      getTodos();
    } catch (err) {
      alert("Error saving todo");
    }
  };

  const handleEdit = (todo) => {
    setForm({ title: todo.title, description: todo.description });
    setEditId(todo._id);
  };

  const handleDelete = async (id) => {
    await api.delete(`/todos/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    getTodos();
  };

 return (
  <div className="dashboard">
    <h2 className="dashtitle">To-Do Dashboard</h2>

    <form onSubmit={handleSubmit} className="dashform">
      <input  value={form.title} placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="dashinput"/>
      <input value={form.description} placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="dashinput"/>
        
      <button type="submit" className="dashbutton">
        {editId ? "Update" : "Add"} Todo
      </button>
    </form>

    <div className="todolist">
      {todos.map((todo) => (
        <div key={todo._id} className="todocard">
          <div className="todocontent">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
          <div className="todoact">
            <button className="edit" onClick={() => handleEdit(todo)}>Edit</button>
            <button className="delete" onClick={() => handleDelete(todo._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

  
}

export default Dashboard;
