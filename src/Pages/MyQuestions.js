import React, { useEffect, useState } from "react";
import classes from "./MyQuestions.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Components/UI/Loading";

function MyQuestions() {
  //fetch answers and send as props
  const [qas, setqas] = useState([]);
  const [qa, setqa] = useState([]);
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
    fetch("https://easylearn-mhgq.onrender.com/allQuestions", {
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
        console.log(data.qalist);
        setqas(data.qalist);
        setloading(false);
      });
  }, []);
  useEffect(() => {
    setqa(
      qas.map((qa) => {
        return (
          <div>
            <p className={classes.ques}>{qa.question}</p>
            <p className={classes.ans}>
              {qa.answers &&
                qa.answers.map((ans) => {
                  console.log(
                    qa.answers,
                    "hgggggggggggggggggggggggggggggggggggggggg"
                  );
                  return (
                    <p>
                      <div>
                        <p className={classes.author}> {ans.answerAuthor}</p>
                        <p>{ans.answer}</p>
                        <hr />
                      </div>
                    </p>
                  );
                })}
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
          {console.log(qa)}
          {qa.length === 0 && <p className={classes.qas}>No questions yet</p>}
          {!(qa.length === 0) && (
            <div>
              <h2 className={classes.qas}>My Questions</h2>
              <p>{qa}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default MyQuestions;
