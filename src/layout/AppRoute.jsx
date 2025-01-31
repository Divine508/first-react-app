import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BlogsPage from "../pages/BlogsPage";
import AuthPage from "../pages/AuthPage";
import AboutPage from "../pages/AboutPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/get-started/login" element={<AuthPage />} />
    </Routes>
  );
};

export default AppRoutes;
