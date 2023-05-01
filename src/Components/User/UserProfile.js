import { useEffect, useState } from "react";
import Button from "../UI/Button";
import classes from "./UserProfile.module.css";
// import { authActions } from "../../store/index";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function UserProfile(props) {
  const dispatch = useDispatch();
  const [showModal, setshowModal] = useState(false);
  const navigate = useNavigate();

  const confirmation = () => {
    setshowModal(true);
  };
  return (
    <>
      {
        <div className={classes.data}>
          <div className={classes.box}>
            <div className={classes.imageicon}>
              <ion-icon name="person-circle-outline"></ion-icon>
            </div>
            <div className={`row ${classes.field}`}>
              <div className={`col-md-5 col-12 ${classes.key}`}>Email</div>
              <div className={`col-md-5 col-12 ${classes.key}`}>
                {props.userprofile.email}
              </div>
            </div>
            <div className={`row ${classes.field}`}>
              <div className={`col-md-5 col-12 ${classes.key}`}>Username</div>
              <div className={`col-md-5 col-12 ${classes.key}`}>
                {props.userprofile.username}
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default UserProfile;
