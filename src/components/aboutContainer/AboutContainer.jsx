import React from "react";
import "./aboutContainer.scss";

export default function AboutContainer({ children }) {
  return (
    <>
      <div className="aboutContainer">{children}</div>
    </>
  );
}
