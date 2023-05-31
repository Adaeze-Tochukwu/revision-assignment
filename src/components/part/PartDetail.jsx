import React, { useState, useEffect } from "react";
import "./Part.scss";
import data from "./Part.json";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export default function PartDetail() {
  const [courseTitles, setCourseTitles] = useState("");

  useEffect(() => {
    setCourseTitles(data);
  }, []);

  return (
    <div className="cards">
      <div className="card">
        <div className="card__part">
          <h3>Part 1</h3>
          <MdKeyboardArrowUp />
        </div>
        <div className="card__length">
          <p className="card__length--borderR">1/3</p>
          <p className="card__length--border">4 Min Left</p>
        </div>
        <div className="card__checkboxes">
          {courseTitles.map((courseTitle) => (
            <div key={courseTitle.id} className="card__checkbox">
              <input type="checkbox" className="card__checkbox--checkbox" />
              <div className="card__checkbox--course">
                <h5>courseTitle</h5>
                <p>2 min</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="card__part">
          <h3>Part 2</h3>
          <MdKeyboardArrowDown />
        </div>
        <div className="card__length">
          <p className="card__length--borderR">0/3</p>
          <p className="card__length--border">35 Min Left</p>
        </div>
      </div>

      <div className="card">
        <div className="card__part">
          <h3>Part 3</h3>
          <MdKeyboardArrowDown />
        </div>
        <div className="card__length">
          <p className="card__length--borderR">1/3</p>
          <p className="card__length--border">35 Min Left</p>
        </div>
      </div>
    </div>
  );
}
