import React from "react";
import { useHistory } from "react-router-dom";

const DashboardBtn = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/dashboard");
  }

  return (
    <button
        style={{
        width: "150px",
        borderRadius: "3px",
        letterSpacing: "1.5px",
        marginTop: "1rem"
        }}
        className="btn btn-large waves-effect waves-light hoverable green accent-3"
        onClick={ handleClick }
    >
        Dashboard
    </button>
  );
}

export default DashboardBtn;