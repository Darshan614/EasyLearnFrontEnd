import React, { Fragment, useEffect, useState } from "react";
import classes from "./Topic.module.css";
import { useParams, useSearchParams } from "react-router-dom";
import { TopicData } from "../Data/TopicData";
import { TopicQA } from "../Data/TopicQA";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";
import VideoPlayer from "../Components/UI/VideoPlayer";
import Loading from "../Components/UI/Loading";
import QuesAns from "../Components/QuesAns";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Topic() {
  const navigate = useNavigate();
  const [filter, setfilter] = useSearchParams();
  const [subtopicData, setsubtopicData] = useState({});
  const [qas, setqas] = useState();
  const [subtopicId, setsubtopicId] = useState();
  const [doubt, setdoubt] = useState();
  const [doubtform, showdoubtform] = useState(false);
  const [v, setv] = useState();
  const [videoform, showvideoform] = useState(false);
  const [loading, setloading] = useState(true);
  const [questions, setquestions] = useState([]);
  const [videos, setvideos] = useState([]);
  const [currvideo, setcurrvideo] = useState("");
  const [last, setlast] = useState();
  const [page, setpage] = useState(1);
  const [count, setCount] = useState();
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  const params = [];
  for (let entry of filter.entries()) {
    params.push(entry);
  }
  // dpw9EHDh2bM
  useEffect(() => {
    const url =
      "http://localhost:8080/subtopicData/" +
      Object.fromEntries([...filter])["tech"] +
      "/" +
      Object.fromEntries([...filter])["topic"];
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setsubtopicData(data.subtopicData);
        setquestions(data.subtopicData.questions);
        setvideos(data.subtopicData.videos);
        data.subtopicData.videos.length !== 0 &&
          setcurrvideo(data.subtopicData.videos[0].url);
        setCount(data.subtopicData.videos.length);
        setlast(data.subtopicData.videos.length);
        setsubtopicId(data.subtopicData._id);
        setloading(false);
      });
  }, [loading]);
  const showanswerformHandler = () => {};
  useEffect(() => {
    let answers = questions.map((qa) => (
      //  console.log(Object.keys(qa)[0],Object.values(qa)[0]);
      <QuesAns
        qa={qa}
        setquestions={setquestions}
        questionId={qa._id}
        subtopicId={subtopicId}
      />
    ));
    setqas(answers);
  }, [questions]);
  const doubtChangeHandler = (e) => {
    setdoubt(e.target.value);
  };
  const videoChangeHandler = (e) => {
    setv(e.target.value);
  };

  const showdoubtformHandler = () => {
    showdoubtform(!doubtform);
  };
  const showvideoformHandler = () => {
    showvideoform(!videoform);
  };
  const ondoubtSubmitHandler = () => {
    if (!loggedIn) {
      document.documentElement.scrollTop = 0;
      navigate("/auth");
      return;
    }
    setloading(true);
    const token = localStorage.getItem("token");
    fetch("http://localhost:8080/addQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        technology: Object.fromEntries([...filter])["tech"],
        subtopic: Object.fromEntries([...filter])["topic"],
        question: doubt,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setquestions(data.subtopic);
        showdoubtform(false);
        setloading(false);
      });
  };
  const onvideoSubmitHandler = () => {
    if (!loggedIn) {
      document.documentElement.scrollTop = 0;
      navigate("/auth");
      return;
    }
    setloading(true);
    const token = localStorage.getItem("token");
    fetch("http://localhost:8080/addVideo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        technology: Object.fromEntries([...filter])["tech"],
        subtopic: Object.fromEntries([...filter])["topic"],
        video: v,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        showvideoform(false);
        setloading(false);
      });
  };
  const onNext = () => {
    setpage((page) => page + 1);
  };
  const onPrev = () => {
    setpage((page) => page - 1);
  };
  const onFirst = () => {
    setpage(1);
  };
  const onLast = () => {
    setpage(last);
  };
  useEffect(() => {
    // console.log(videos[page - 1].url);
    videos.length !== 0 && setcurrvideo(videos[page - 1].url);
  }, [page]);

  return (
    <>
      {loading && (
        <>
          <Loading />
        </>
      )}
      {!loading && (
        <div>
          <div className={classes.d}>
            <div className={classes.topic}>{subtopicData.name}</div>
            <p className={classes.desc}>{subtopicData.description}</p>
            <div className="container">
              {videos.length !== 0 ? (
                <div className={classes.player}>
                  <VideoPlayer videoId={currvideo} />
                  {count > 1 && (
                    <nav aria-label="Page navigation example">
                      <ul
                        class="pagination"
                        style={{ justifyContent: "center" }}
                      >
                        {page !== 1 && page - 1 > 0 && (
                          <li class="page-item" onClick={onPrev}>
                            <span class="page-link" href="#">
                              Prev
                            </span>
                          </li>
                        )}
                        {page !== 1 && (
                          <li class="page-item" onClick={onFirst}>
                            <span class="page-link" href="#">
                              1
                            </span>
                          </li>
                        )}
                        {page !== 2 && page !== 1 && page - 1 !== 2 && (
                          <li class="page-item">
                            <span class="page-link" href="#">
                              ...
                            </span>
                          </li>
                        )}
                        {page - 1 !== 1 && page - 1 > 0 && (
                          <li class="page-item" onClick={onPrev}>
                            <span class="page-link" href="#">
                              {page - 1}
                            </span>
                          </li>
                        )}

                        <li class="page-item">
                          <span
                            class="page-link"
                            href="#"
                            style={{
                              color: "black",
                              border: "2px solid orange",
                            }}
                          >
                            {page}
                          </span>
                        </li>

                        {page + 1 < last && (
                          <li class="page-item" onClick={onNext}>
                            <span class="page-link" href="#">
                              {page + 1}
                            </span>
                          </li>
                        )}
                        {page !== last - 1 &&
                          page !== last &&
                          page + 1 !== last - 1 && (
                            <li class="page-item">
                              <span class="page-link" href="#">
                                ...
                              </span>
                            </li>
                          )}
                        {page !== last && (
                          <li class="page-item" onClick={onLast}>
                            <span class="page-link" href="#">
                              {last}
                            </span>
                          </li>
                        )}
                        {page + 1 <= last && (
                          <li class="page-item" onClick={onNext}>
                            <span class="page-link" href="#">
                              Next
                            </span>
                          </li>
                        )}
                      </ul>
                    </nav>
                  )}
                </div>
              ) : (
                <p style={{ textAlign: "center" }}>
                  No videos available for this topic
                </p>
              )}
              <button className={classes.doubt} onClick={showvideoformHandler}>
                Add a video
              </button>
              {videoform && (
                <div>
                  <input
                    className={classes.doubttext}
                    placeholder="Type your youtube video id here"
                    onChange={videoChangeHandler}
                  ></input>
                  <button
                    className={classes.submit}
                    onClick={onvideoSubmitHandler}
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>

            <p className={classes.code}>
              <SyntaxHighlighter language="jsx" style={materialOceanic}>
                {subtopicData.codeSample}
              </SyntaxHighlighter>
            </p>
          </div>
          <div className={classes.d}>
            <div className={classes.topic}>Discussions</div>

            <hr />

            <div> {qas}</div>
            <div className={classes.doubtform}>
              <button className={classes.doubt} onClick={showdoubtformHandler}>
                Ask a doubt
              </button>
              {doubtform && (
                <div>
                  <input
                    className={classes.doubttext}
                    placeholder="Type your question here"
                    onChange={doubtChangeHandler}
                  ></input>
                  <button
                    className={classes.submit}
                    onClick={ondoubtSubmitHandler}
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Topic;
