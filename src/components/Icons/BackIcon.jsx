import React from "react";
import "./backIcon.css";
import { Link } from "react-router-dom";
function BackIcon() {
  return (
    <Link to={"/"}>
      <button className="back-button">Back</button>
    </Link>
  );
}

export default BackIcon;
