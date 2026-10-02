import { useQuery } from "@apollo/client/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GET_POST_INFO } from "../graphql/queries";
import { FiArrowLeft } from "react-icons/fi";
import { formatPersianDate } from "../helper/formatPersianDate";
import CommentForm from "../components/CommentForm";
import Loader from "../components/Loader";

function BlogPage() {
  const { slug } = useParams();

  const { loading, data } = useQuery(GET_POST_INFO, { variables: { slug } });
  const navigate = useNavigate();

  if (loading) return <Loader />;

  const { post } = data;

  return (
    <div className="p-4 md:p-0">
      {/* post */}
      <div className="mt-2 p-2 border border-[var(--border-color)] rounded-lg shadow shadow-[var(--shadow-color)]">
        {/* title */}
        <div className="p-3 md:my-4 flex justify-between items-center text-[var(--text-primary)]">
          <h1 className="text-lg md:text-xl font-bold ">{post.title}</h1>
          <button
            className="cursor-pointer hover:text-[var(--text-secondary)]"
            onClick={() => navigate(-1)}
          >
            <FiArrowLeft />
          </button>
        </div>
        {/* author & date */}
        <div className="p-2 flex items-center gap-x-5  border-t border-[var(--border-color)]">
          <Link
            to={`/authors/${post.authors.slug}`}
            className="flex items-center gap-x-2 mt-auto pt-4"
          >
            <img
              src={post.authors.avatar.url}
              alt={post.authors.name}
              className="w-[40px] h-[40px] object-cover rounded-full"
            />

            <p className="text-sm text-[var(--text-secondary)]">
              {post.authors.name}
            </p>
          </Link>

          <p className="mt-5 text-sm text-[var(--text-secondary)]">
            {formatPersianDate(post.publishedDate)}
          </p>
        </div>
        {/* cover img */}
        <div className="mt-4 p-2 object-content object-center w-full h-[250px]">
          <img
            className="w-full h-full"
            src={post.cover.url}
            alt={post.title}
          />
        </div>
        {/* content */}
        <div className="p-4 mt-2">
          <p className=" leading-10">{post.content.text}</p>
        </div>
      </div>
      {/* Comment */}
      <div className="mt-5 p-2 border border-[var(--border-color)] rounded-lg shadow shadow-[var(--shadow-color)]">
        <CommentForm slug={post.slug} />
      </div>
    </div>
  );
}

export default BlogPage;
