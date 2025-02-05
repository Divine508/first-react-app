import { Fragment } from "react";
import NavBar from "./Navbar";
import AppRoutes from "./AppRoute";

const Layout = () => {
  return (
    <Fragment>
      <header className="fixed-top ">
        <NavBar />
      </header>
      <main style={{ marginTop: "100px" }}>
        <AppRoutes />
      </main>
      <footer></footer>
    </Fragment>
  );
};

export default Layout;
