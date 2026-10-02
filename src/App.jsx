import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import BlogPage from "./pages/BlogPage";
import AuthorsPage from "./pages/AuthorsPage";
import AuthorPage from "./pages/AuthorPage";
import NotFoundPage from "./pages/404";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        rtl={true}
        theme="light"
      />
    </Layout>
  );
}

export default App;
