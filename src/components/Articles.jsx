import { useQuery } from "@apollo/client/react";
import { MdArrowBackIosNew } from "react-icons/md";

import { GET_BLOGS_INFO } from "../graphql/queries";
import BlogCard from "./BlogCard";

function Articles() {
  const { loading, data } = useQuery(GET_BLOGS_INFO);
  console.log(data);

  if (loading) return <h4>Loading..</h4>;

  const { posts } = data;
  return (
    <div>
      {/* header */}
      <h3 className="font-semibold text-xl md:text-2xl ">مقالات</h3>
      {/* all blog */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
        {/* blog */}
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Articles;
