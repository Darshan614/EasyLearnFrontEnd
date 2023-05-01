import React, { useEffect, useState } from "react";
import classes from "./MyQuestions.module.css";

function MyQuestions() {
  //fetch answers and send as props
  const [qas, setqas] = useState([]);
  const [qa, setqa] = useState([]);
  //fetch answers and send as props
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:8080/allQuestions", {
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
  );
}

export default MyQuestions;
