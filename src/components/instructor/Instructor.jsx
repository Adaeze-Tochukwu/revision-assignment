import React from "react";
import "./Instructor.scss";

export default function Instructor() {
  return (
    <div className="instructor">
      <img src="./pics.jpg" alt="" className="instructor__pics" />
      <div className="instructor__name">
        <h4>Instructor name</h4>
        <p>Skills</p>
      </div>
    </div>
  );
}
