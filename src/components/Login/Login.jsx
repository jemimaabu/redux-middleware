import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const LoginComponent = (props) => {
  const history = useHistory();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.authUser(name);
    history.push("/user");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" onChange={handleChange} />
      </div>
      <button type="submit">Authorize</button>
    </form>
  );
};
