import React from "react";
import { useHistory } from "react-router-dom";

export const UserComponent = (props) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.unauthUser();
    history.push("/");
  };

  return (
    <>
      <p> Welcome {props.state.user} </p>
      <button type="submit" onClick={handleSubmit}>
        Unauthorize
      </button>
    </>
  );
};
