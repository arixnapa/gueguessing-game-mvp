import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [input, setInput] = useState([{ username: "", passname: "" }]);
  const [data, setData] = useState(null);

  const addUser = async () => {
    try {
      const response = await axios.post("/api/users/register", input);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser();
      alert("You successfully registered!");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          value={input.username}
          onChange={handleChange}
          name="username"
          type="text"
          className="form-control mb-2"
          required
        />
        <input
          placeholder="password"
          value={input.password}
          onChange={handleChange}
          name="password"
          type="password"
          className="form-control mb-2"
          required
        />
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}
