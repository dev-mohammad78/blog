import { useQuery } from "@apollo/client/react";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

import { GET_BLOGS_INFO } from "../graphql/queries";
import BlogCard from "./BlogCard";

function LatestArticles() {
  const { loading, data } = useQuery(GET_BLOGS_INFO);

  if (loading) return <p>Loading...</p>;

  const latestBlogs = data.posts.slice(0, 3);

  return (
    <section className="rounded-lg p-4 md:p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold md:text-2xl">مقالات اخیر</h2>

        <Link
          to="/blogs"
          className="flex items-center gap-x-1 p-2 text-sm text-[var(--primary)]"
        >
          <span>مشاهده همه</span>
          <MdArrowBackIosNew className="text-xs" />
        </Link>
      </div>

      {/* Blog cards */}
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {latestBlogs.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}

export default LatestArticles;
