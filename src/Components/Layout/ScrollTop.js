import classes from "./ScrollTop.module.css";
import { useState } from "react";

function ScrollTop() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <button
      className={classes.scrollbutton}
      style={{ display: visible ? "inline" : "none" }}
    >
      <ion-icon onClick={scrollToTop} name="arrow-up-circle"></ion-icon>
    </button>
  );
}

export default ScrollTop;
