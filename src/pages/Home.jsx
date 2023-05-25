import React from "react";
import Container from "../components/container/Container";
import ContainerL from "../components/containerL/ContainerL";
import ContainerR from "../components/containerR/ContainerR";
import Video from "../components/video/Video";
import Rate from "../components/rate/Rate";
import Note from "../components/note/Note";
import About from "../components/about/About";

export default function Home() {
  return (
    <div>
      <Container>
        <ContainerL>
          <Video />
          <Rate />
          <Note />
        </ContainerL>
        <ContainerR>
          <About />
        </ContainerR>
      </Container>
    </div>
  );
}
