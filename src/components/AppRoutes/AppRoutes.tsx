import { Route, Routes, Navigate } from "react-router-dom";

import Dashboard from "../../views/Dashboard/Dashboard";
import Blogs from "../../views/Blogs/Blogs";
import Post from "../../views/Post/Post";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<Navigate to="/dashboard" />} />

      <Route path={`/dashboard`} element={<Dashboard />} />
      <Route path={`/blogs`} element={<Blogs />} />
      <Route path={`/blogs/:id`} element={<Post />} />
    </Routes>
  );
};

export default AppRoutes;
