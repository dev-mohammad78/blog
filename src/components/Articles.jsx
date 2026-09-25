import { useQuery } from "@apollo/client/react";
import { GET_BLOGS_INFO } from "../graphql/queries";

import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./BlogCardSkeleton";

function Articles({ sort, selectedAuthor }) {
  const { loading, data } = useQuery(GET_BLOGS_INFO);

  // loader
  if (loading) {
    return (
      <div>
        {/* header */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold md:text-2xl">مقالات</h3>
        </div>

        {/* skeleton blogs */}
        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <BlogCardSkeleton key={item} />
          ))}
        </div>
      </div>
    );
  }

  let posts = [...data.posts];

  // Filter author
  if (selectedAuthor) {
    posts = posts.filter((post) => post.authors.slug === selectedAuthor);
  }

  // Sort
  posts.sort((a, b) => {
    const dateA = new Date(a.publishedDate);
    const dateB = new Date(b.publishedDate);

    if (sort === "newest") {
      return dateB - dateA;
    }

    if (sort === "oldest") {
      return dateA - dateB;
    }

    return 0;
  });

  return (
    <div>
      {/* header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold md:text-2xl">مقالات</h3>
      </div>

      {/* blogs */}
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Articles;
