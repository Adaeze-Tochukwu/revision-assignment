import React from "react";
import "./Rate.scss";
import { HiDownload, HiArrowSmRight } from "react-icons/hi";

export default function Rate() {
  return (
    <div className="rate">
      <div className="rate__left">
        <p>Rate this course</p>
        <div className="rate__emoji">
          <a href="">&#128532;</a>
          <a href="">&#128529;</a>
          <a href="">&#128525;</a>
        </div>
      </div>
      <div className="rate__btn">
        <a href="" alt="" className="rate__download">
          <div> Download File</div>
          <div className="rate__download--arrowDown">
            {" "}
            <HiDownload />
          </div>
        </a>

        <a href="" alt="" className="rate__continue">
          <div>Complete & Continue</div>
          <div className="rate__continue--arrowRight">
            <HiArrowSmRight />
          </div>
        </a>
      </div>
    </div>
  );
}
