import classes from "./Answer.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Answer(props) {
  const navigate = useNavigate();
  const [up, setup] = useState(props.ans.upvotes);
  const [down, setdown] = useState(props.ans.downvotes);
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  console.log(props.ans._id);
  const like = () => {
    if (!loggedIn) {
      navigate("/auth");
      document.documentElement.scrollTop = 0;
      return;
    }
    const token = localStorage.getItem("token");
    fetch("https://easylearn-mhgq.onrender.com/vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        subtopicId: props.subtopicId,
        answerId: props.ans._id,
        questionId: props.questionId,
        upvote: true,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.message === "vote done") {
          setup(data.upvotes);
          setdown(data.downvotes);
        }
      });
  };
  const dislike = () => {
    if (!loggedIn) {
      navigate("/auth");
      document.documentElement.scrollTop = 0;
      return;
    }
    const token = localStorage.getItem("token");
    fetch("https://easylearn-mhgq.onrender.com/vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        subtopicId: props.subtopicId,
        answerId: props.ans._id,
        questionId: props.questionId,
        upvote: false,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.message === "vote done") {
          setup(data.upvotes);
          setdown(data.downvotes);
        }
      });
  };
  return (
    <p className={classes.answer}>
      <p className={classes.author}>
        {props.ans.userId !== null ? props.ans.userId.username : "Anonymous"}
      </p>
      {props.ans.answer}
      <span className={classes.dislike} onClick={dislike}>
        <ion-icon name="thumbs-down"></ion-icon>
        {down}
      </span>
      <span className={classes.like} onClick={like}>
        {up}
        <ion-icon name="thumbs-up"></ion-icon>
      </span>
    </p>
  );
}

export default Answer;
