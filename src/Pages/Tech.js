import React, { useEffect, useState } from "react";
import classes from "./Tech.module.css";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { TechData } from "../Data/TechData";

function Tech() {
  const [subtopics, setSubtopics] = useState([]);
  const [filter, setfilter] = useSearchParams();
  const params = [];
  for (let entry of filter.entries()) {
    params.push(entry);
  }
  function checktitle(obj) {
    return obj.title == Object.fromEntries([...filter])["tech"];
  }

  const tech = TechData.filter(checktitle);
  console.log("tech", tech);
  let col = tech[0].color;

  useEffect(() => {
    const url =
      "http://localhost:8080/subtopics/" +
      Object.fromEntries([...filter])["tech"];
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSubtopics(data.subtopics);
      });
  }, []);

  const techs = subtopics.map((t) => (
    <Link
      to={
        "/topic?tech=" + Object.fromEntries([...filter])["tech"] + "&topic=" + t
      }
      className={classes.link}
    >
      <p className={classes.top} key={t}>
        <div>{t}</div>
      </p>
    </Link>
  ));

  return (
    <div>
      <div className={classes.h} style={{ color: col }}>
        {params.title}
      </div>
      <div className={classes.tech}>{techs}</div>
    </div>
  );
}

export default Tech;
