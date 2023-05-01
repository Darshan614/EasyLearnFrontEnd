import React from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import { ArrayFile } from "../Data/ArrayFile";

function Home() {
  const techs = ArrayFile.map((tech) => (
    <Link key={tech.title} to={`/technology?tech=${tech.title}`}>
      <img className={classes.img} src={tech.src} />
    </Link>
  ));
  return (
    <div className={classes.home}>
      <p className={classes.fline}>Learn from community with </p>
      <div className={classes.weber}>
        EASY<span className={classes.er}>LEARN</span>
      </div>
      <div className={classes.fr}>{techs}</div>
    </div>
  );
}

export default Home;
