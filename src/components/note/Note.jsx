import React from "react";
import "./Note.scss";

export default function Note() {
  return (
    <div className="note">
      <h3>Lesson note</h3>
      <textarea type="text" placeholder="Type here"></textarea>
      <div className="note__btn">
        <a href="" className="note__btn--reset">Reset</a>
        <a href="" className="note__btn--save">Save</a>
      </div>
    </div>
  );
}
