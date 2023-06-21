import classes from "./QuesAns.module.css";
import { useState } from "react";
import Answer from "./Answer";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function QuesAns(props) {
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const [answerform, showanswerform] = useState(false);
  const showanswerformHandler = () => {
    if (!loggedIn) {
      navigate("/auth");
      document.documentElement.scrollTop = 0;
      return;
    }
    showanswerform(!answerform);
  };
  const [answer, setanswer] = useState("");
  const onAnswerChangeHandler = (e) => {
    setanswer(e.target.value);
  };
  const onSubmitAnswerHandler = () => {
    const token = localStorage.getItem("token");
    const url2 = "http://localhost:8080/addAnswer";
    const url1 = "https://easylearn-mhgq.onrender.com/addAnswer"
    fetch(url1, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        questionId: props.questionId,
        answer: answer,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        props.setquestions(data.questions);
        showanswerform(false);
      });
  };
  return (
    <p>
      {console.log(props.qa._id)}
      <p className={classes.question}>
        {console.log("qa", props.qa)}
        <p className={classes.author}>
          {props.qa.userId !== null ? props.qa.userId.username : "Anonymous"}
        </p>
        {props.qa.question}
        <button
          onClick={showanswerformHandler}
          className={classes.answerbutton}
        >
          Answer
        </button>
        {answerform && (
          <div>
            <input
              className={classes.doubttext}
              placeholder="Type your answer here"
              onChange={onAnswerChangeHandler}
            ></input>
            <button className={classes.submit} onClick={onSubmitAnswerHandler}>
              Submit
            </button>
          </div>
        )}
        {/* <Overl className={classes.overl} message={"Add answer"} /> */}
      </p>
      {props.qa.answers.map((ans) => (
        <Answer
          ans={ans}
          subtopicId={props.subtopicId}
          questionId={props.qa._id}
        />
      ))}
      <hr />
    </p>
  );
}

export default QuesAns;
