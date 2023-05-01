import { Outlet } from "react-router-dom";
import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";
import ScrollTop from "../Components/Layout/ScrollTop";

function RootLayout() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
      <ScrollTop />
      <Footer />
    </>
  );
}

export default RootLayout;
