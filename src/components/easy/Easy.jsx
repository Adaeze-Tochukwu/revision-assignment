import React from "react";
import "./Easy.scss";
import { FiBarChart } from "react-icons/fi";
import { GoSmiley } from "react-icons/go";
import { BsFillFileTextFill } from "react-icons/bs";

export default function Easy() {
  return (
    <div className="easy">
      <div className="easy__all">
        <FiBarChart color="rgb(42, 170, 138)" />
        <p>Easy</p>
      </div>
      <div className="easy__all">
        <GoSmiley color="rgb(42, 170, 138)" />
        <p>20 Lessons</p>
      </div>
      <div className="easy__all">
        <BsFillFileTextFill color="rgb(42, 170, 138)" />
        <p>300 XP</p>
      </div>
    </div>
  );
}
