import React, { useEffect, useState } from "react";
import Answer from "../Components/Answer";
import classes from "./MyAnswers.module.css";

function MyAnswers() {
  const [qas, setqas] = useState([]);
  const [qa, setqa] = useState([]);
  const [up, setup] = useState(0);
  const [down, setdown] = useState(0);

  //fetch answers and send as props
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8080/allAnswers", {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setqas(data.answers);
      });
  }, []);
  useEffect(() => {
    setqa(
      qas.map((qa) => {
        return (
          <div>
            <p className={classes.ques}>
              <p className={classes.author}>
                {qa.author !== null ? qa.author : "Anonymous"}
              </p>
              {qa.question}
            </p>
            <p className={classes.ans}>
              {qa.answer}
              <span className={classes.dislike}>
                <ion-icon name="thumbs-down"></ion-icon>
                {qa.downvotes}
              </span>
              <span className={classes.like}>
                {qa.upvotes}
                <ion-icon name="thumbs-up"></ion-icon>
              </span>
            </p>
          </div>
        );
      })
    );
  }, [qas]);
  return (
    <div>
      <h2 className={classes.qas}>My Answers</h2>
      <hr></hr>

      <p>
        {qa}
        {qa.length === 0 && <p>No answers yet.</p>}
      </p>
    </div>
  );
}

export default MyAnswers;
