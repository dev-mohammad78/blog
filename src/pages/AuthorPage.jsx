import { useQuery } from "@apollo/client/react";
import { GET_AUTHOR_INFO } from "../graphql/queries";
import { useParams } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import BlogCard from "../components/BlogCard";

function AuthorPage() {
  const { slug } = useParams();
  const { loading, data } = useQuery(GET_AUTHOR_INFO, { variables: { slug } });

  if (loading) return <p>loading</p>;

  const { author } = data;

  console.log({ loading, data });
  return (
    <div>
      {/* author Details */}
      <div className="bg-[var(--bg-tertiary)] flex flex-col md:flex-row items-center  gap-x-8 gap-y-4 md:mt-4 p-10">
        {/* author avatar */}
        <img
          src={author.avatar.url}
          alt={author.name}
          className="max-w-[300px] rounded-full w-1/4"
        />
        {/* author description */}
        <div className="w-full md:w-2/4">
          <h3 className="text-xl md:text-3xl text-[var(--text-primary)] font-bold text-center md:text-start">
            {author.name}
          </h3>
          <h4 className="text-base text-[var(--text-muted)] text-center md:text-start mt-1">
            {author.field}
          </h4>
          <p
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(author.description.html),
            }}
            className="text-base md:text-lg text-[var(--text-secondary)] text-center md:text-start mt-3"
          ></p>
        </div>
      </div>

      {/* author Posts */}
      <div className="mt-5 p-4 ">
        <h2 className="text-lg md:text-xl text-[var(--text-primary)] font-semibold">
          همه مقالات {author.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
          {author.posts.map((post) => (
            <BlogCard
              key={post.id}
              cover={post.cover}
              slug={post.cover}
              title={post.title}
              publishedDate={post.publishedDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AuthorPage;
