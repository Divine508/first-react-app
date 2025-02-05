import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BlogsPage from "../pages/BlogsPage";
import AuthPage from "../pages/AuthPage";
import AboutPage from "../pages/AboutPage";
import BlogDetailsPage from "../pages/BlogDetailsPage";
import ErrorPage from "../pages/ErrorPage";

import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import Reset from "../components/auth/Reset";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blogs/:blogTitle" element={<BlogDetailsPage />} />
      <Route path="/get-started" element={<AuthPage />}>
        <Route path="sign-up" element={<SignUp />} />
        <Route path="login" element={<SignIn />} />
        <Route path="reset-password" element={<Reset />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
