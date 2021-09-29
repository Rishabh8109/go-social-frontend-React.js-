import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../styles/alert.css";

function Alert({ message, show,setshow , classname }) {
  return (
    <div
      className={`alert alert-${classname}`}
      style={{ opacity: show ? 1 : 0}}
    >
      {message}
      <span className="icon">
        <AiOutlineCloseCircle className="close" onClick={() => setshow(false)} />
      </span>
    </div>
  );
}

export default Alert;
