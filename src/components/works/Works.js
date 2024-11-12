import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import "./Works.css";

// Import assets
import TeachersDashboard from "../../assets/recentprojects/teachers.png";
import Checkin from "../../assets/recentprojects/checkin.png";
import Portfolio from "../../assets/recentprojects/portfoliopage.png";
import Space from "../../assets/recentprojects/space.png";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects] = useState([
    {
      id: 1,
      title: "Planet Peanut-Teachers Dashboard",
      description: `
Teachers Dashboard is a web-based application developed for Planet Peanut company to assist teachers in managing their classrooms. It allows them to track student progress, manage assignments, and view analytics <a href="https://www.loom.com/share/64812c1110954b1e9b0ddd319802a88e?sid=488c1621-fca4-46c5-9095-e6010bf39ca6" target="_blank" rel="noopener noreferrer">Teachers Dashboard</a>`,
      alter: "Teachers Dashboard",
      image: `${TeachersDashboard}`,
    },
    {
      id: 2,
      title: "Check-in Project",
      description: `Project Check-in is a web app for remote team updates, replacing daily stand-ups. Facilitates asynchronous communication, enhancing collaboration in distributed teams. Created with teammates at HackYourFuture Denmark. Watch the walkthroughs here: 
      <a href="https://www.loom.com/share/9ff0e4cafee04f7fb3efb0c081efbcbf?sid=b88053af-edd4-40e9-9fc7-b5181b55631d" target="_blank" rel="noopener noreferrer">Demo 1</a>, 
      <a href="https://www.loom.com/share/0030642bcdbe4ca8ad3d96f088f98017?sid=be56af72-92d4-4cac-bf97-157daedafab4" target="_blank" rel="noopener noreferrer">Demo 2</a>, 
      <a href="https://www.loom.com/share/c0c6c5afa02b46b8bd33f28463c7be8a?sid=8490c993-703e-4276-8cc0-1d8e70241e76" target="_blank" rel="noopener noreferrer">Demo 3</a>`,
      alter: "Check-in Project",
      image: `${Checkin}`,
    },
    {
      id: 3,
      title: "Portfolio",
      description: `Designed and developed a ReactJS portfolio with fancy 3D animations using Three.js for the background element. Here is my project <a href="https://yagmur-portfolio1.vercel.app/" target="_blank" rel="noopener noreferrer">yagmur-portfolio1.vercel.app</a>`,
      alter: "React Portfolio",
      image: `${Portfolio}`,
    },
    {
      id: 4,
      title: "Face to space",
      description: `Face The Space is a dynamic and visually engaging space exploration website built using modern web development technologies. The project showcases an interactive user interface designed to captivate users and immerse them in a virtual journey to space. <a href="https://face-the-space.vercel.app/#/technology" target="_blank" rel="noopener noreferrer">face-to-space.vercel.app</a>`,
      alter: "Space",
      image: `${Space}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <img src={project.image} alt={project.alter} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.id + ". " + project.title} />
              </h3>
              <p
                className="description"
                dangerouslySetInnerHTML={{ __html: project.description }}
              ></p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
