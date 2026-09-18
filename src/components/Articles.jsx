import { useQuery } from "@apollo/client/react";

import { GET_BLOGS_INFO } from "../graphql/queries";
import { MdArrowBackIosNew } from "react-icons/md";
import SingleCard from "./SingleCard";

function Articles() {
  const { loading, data } = useQuery(GET_BLOGS_INFO);
  
  if (loading) return <h4>Loading..</h4>;

  return (
    <div>
      {/* header */}
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-xl md:text-2xl ">مقالات</h3>
        <span className="flex items-center gap-x-1 p-2 text-[var(--primary)] text-sm">
          <p>مشاهده همه</p>
          <MdArrowBackIosNew className="text-xs" />
        </span>
      </div>
      {/* all blog */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
        {/* blog */}
        {data.posts.map((post) => (
          <SingleCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Articles;
