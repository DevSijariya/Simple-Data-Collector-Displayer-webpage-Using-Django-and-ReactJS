  import React, { useState, useEffect } from "react";
  import axios from "axios";

  const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userData, setUserData] = useState([]);

    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = { name, email };
      try {
        await axios.post("http://127.0.0.1:8000/api/add/", formData);
        alert("Data added successfully!");
        fetchUserData();  // Fetch data after submission
      } catch (error) {
        console.error("Error adding data:", error);
      }
    };

    // Fetch user data from the API
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/list/");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    useEffect(() => {
      fetchUserData();
    }, []);

    return (
      <div>
        <h2>Enter User Data</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          /><br/> 
          <button type="submit">Submit</button>
          {/* <button type="button" onClick={fetchUserData}>Display Data</button> */}
        </form>

        <h3>Saved User Data</h3>
        <ul>
          {userData.map((user) => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default Form;
