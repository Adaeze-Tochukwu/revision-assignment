import React from "react";
import "./Video.scss";

export default function Video() {
  return (
    <div className="video">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/xPq1KrYWbqo"
        title="YouTube video player"
        frameborder="0"
        // border-radius="5px"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}
