import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import "./Works.css";

// Import assets
import MealSharing from "../../assets/recentprojects/mealsharing.png";
import Checkin from "../../assets/recentprojects/checkin.png";
import Portfolio from "../../assets/recentprojects/portfoliopage.png";
import CurrencyExchange from "../../assets/recentprojects/currencyexchange.png";

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
      title: "Check-in Project",
      description: `Project Check-in is a web app for remote team updates, replacing daily stand-ups. Facilitates asynchronous communication, enhancing collaboration in distributed teams. Created with teammates at HackYourFuture Denmark. <a href="https://github.com/yagmureva/team26-checkin" target="_blank" rel="noopener noreferrer">check-in-app</a>`,
      alter: "Check-in Project",
      image: `${Checkin}`,
    },
    {
      id: 2,
      title: "Portfolio",
      description: `Designed and developed a ReactJS portfolio with fancy 3D animations using Three.js for the background element. Here is my project <a href="https://yagmur-portfolio1.vercel.app/" target="_blank" rel="noopener noreferrer">yagmur-portfolio1.vercel.app</a>`,
      alter: "React Portfolio",
      image: `${Portfolio}`,
    },
    {
      id: 3,
      title: "Meal Sharing",
      description: `
The Meal Sharing App, developed for Hack Your Future Denmark, is a full-stack web application. It lets users explore, reserve, and share meals with a seamless user experience. <a href="https://github.com/yagmureva/meal-sharing" target="_blank" rel="noopener noreferrer">meal-sharing.yagmureva.github</a>`,
      alter: "Meal Sharing App",
      image: `${MealSharing}`,
    },
    {
      id: 4,
      title: "Currency Exchange",
      description: `A currency exchange app lets users convert one currency into another using real-time exchange rates. It's handy for travelers, forex traders, or anyone dealing with multiple currencies. Here's my project. <a href="https://currency-exchange-pearl.vercel.app/" target="_blank" rel="noopener noreferrer">currency-exchange.vercel.app</a>`,
      alter: "Currency exchange",
      image: `${CurrencyExchange}`,
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
