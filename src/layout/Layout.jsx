import { Fragment } from "react";
import NavBar from "./Navbar";
import AppRoutes from "./AppRoute";

const Layout = () => {
  return (
    <Fragment>
      <header className="fixed-top ">
        <NavBar />
      </header>
      <main className="mt-5">
        <AppRoutes />
      </main>
      <footer></footer>
    </Fragment>
  );
};

export default Layout;
