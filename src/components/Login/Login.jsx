import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const InputContainer = styled.div`
  margin: 1em 0;

  input {
    border: none;
    width: 100%;
    padding: 5px 10px;
    box-sizing: border-box;
  }

  label {
    vertical-align: middle;
    display: block;
    margin-bottom: 5px;
  }
`;

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
      <InputContainer>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" onChange={handleChange} />
      </InputContainer>
      <button type="submit">Authorize</button>
    </form>
  );
};
