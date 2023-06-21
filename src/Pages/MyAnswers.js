import React, { useEffect, useState } from "react";
import Answer from "../Components/Answer";
import classes from "./MyAnswers.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Components/UI/Loading";

function MyAnswers() {
  const [qas, setqas] = useState([]);
  const [qa, setqa] = useState([]);
  const [up, setup] = useState(0);
  const [down, setdown] = useState(0);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);

  //fetch answers and send as props
  useEffect(() => {
    if (!loggedIn) {
      navigate("/auth");
      document.documentElement.scrollTop = 0;
      return;
    }
    const token = localStorage.getItem("token");
    //https://easylearn-mhgq.onrender.com/allQuestions
    const u = "https://easylearn-mhgq.onrender.com/allAnswers";
    fetch("https://easylearn-mhgq.onrender.com/allAnswers", {
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
        setloading(false);
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
    <>
      {loading && <Loading />}
      {!loading && (
        <div>
          <h2 className={classes.qas}>My Answers</h2>
          <hr></hr>

          <p>
            {qa}
            {qa.length === 0 && <p>No answers yet.</p>}
          </p>
        </div>
      )}
    </>
  );
}

export default MyAnswers;
