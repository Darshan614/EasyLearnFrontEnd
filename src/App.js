import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import RootLayout from "./Pages/RootLayout";
import Loading from "./Components/UI/Loading";
import Auth from "./Pages/Auth";
import MyAnswers from "./Pages/MyAnswers";
import MyQuestions from "./Pages/MyQuestions";
import Tech from "./Pages/Tech";
import Topic from "./Pages/Topic";
import { useEffect, useState } from "react";
import { authActions } from "./store/index";
import { useDispatch } from "react-redux";
import Profile from "./Pages/Profile";
import { checkAuthLoader } from "./util/auth";
import Contact from "./Pages/Contact";

function App() {
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("use effect running");
    setloading(true);
    const token = localStorage.getItem("token");
    const url2 = "http://localhost:8080/checklogin";
    fetch("https://easylearn-mhgq.onrender.com/checklogin", {
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
        console.log(data);
        if (data.message === "Some problem in authentication") {
          setloading(false);
          dispatch(authActions.logout());
        } else if (data.message === "Invalid token") {
          setloading(false);
          dispatch(authActions.logout());
        } else if (data.message === "User is logged in") {
          console.log("setting the user role", data.role);
          setloading(false);
          dispatch(authActions.login(data.role));
        }
      });
  }, [dispatch]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/auth", element: <Auth /> },
        { path: "/answers", element: <MyAnswers />, loader: checkAuthLoader },
        {
          path: "/questions",
          element: <MyQuestions />,
          loader: checkAuthLoader,
        },
        { path: "/technology", element: <Tech /> },
        { path: "/topic", element: <Topic /> },
        { path: "/profile", element: <Profile />, loader: checkAuthLoader },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <>{loading ? <Loading /> : <RouterProvider router={router} />}</>;
}

export default App;
