import React from "react";
import Container from "../components/container/Container";
import ContainerL from "../components/containerL/ContainerL";
import ContainerR from "../components/containerR/ContainerR";
import Video from "../components/video/Video";
import Rate from "../components/rate/Rate";
import Note from "../components/note/Note";
import AboutContainer from "../components/aboutContainer/AboutContainer";
import AboutCourse from "../components/aboutCourse/AboutCourse";
import Easy from "../components/easy/Easy";
import Category from "../components/category/Category";
import CourseParagraph from "../components/courseParagraph/CourseParagraph";
import Instructor from '../components/instructor/Instructor';
import ContentContainer from '../components/contentContainer/ContentContainer';
import CourseContent from '../components/courseContent/CourseContent';

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
          <AboutContainer>
            <AboutCourse />
            <Easy />
            <Category />
            <CourseParagraph />
            <Instructor />
          </AboutContainer>
          <ContentContainer>
            <CourseContent />
          </ContentContainer>
        </ContainerR>
      </Container>
    </div>
  );
}
