import UserProfile from "../Components/User/UserProfile";
import { useEffect, useState } from "react";
import Button from "../Components/UI/Button";
import { authActions } from "../store/index";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "../Components/UI/Modal";
import Update from "../Components/User/Update";
import Loading from "../Components/UI/Loading";

function Profile() {
  const dispatch = useDispatch();
  const [showModal, setshowModal] = useState(false);
  const navigate = useNavigate();
  const [userprofile, setuserprofile] = useState({});
  const [showform, setshowform] = useState(false);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    const token = localStorage.getItem("token");
    if (showform === false) {
      fetch("http://localhost:8080/profile", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setuserprofile(data.user);
          setloading(false);
        });
    } else {
      setloading(false);
    }
  }, []);
  return (
    <>
      {loading && <Loading />}
      <div style={{ width: "70%", margin: "auto" }}>
        {!showform && <UserProfile userprofile={userprofile} />}
        {showform && (
          <Update
            setloading={setloading}
            setuserprofile={setuserprofile}
            setshowform={setshowform}
            userprofile={userprofile}
          />
        )}
        <Button
          title={showform ? "Show profile" : "Update"}
          onClick={() => setshowform(!showform)}
        />
      </div>
    </>
  );
}

export default Profile;
