import { useQuery } from "@apollo/client/react";
import { Link } from "react-router-dom";
import { MdArticle, MdArrowBackIosNew } from "react-icons/md";
import sanitizeHtml from "sanitize-html";

import { GET_AUTHORS_INFO } from "../graphql/queries";
import AuthorsImage from "../assets//Authors.webp";

function AuthorsPage() {
  const { loading, data } = useQuery(GET_AUTHORS_INFO);

  if (loading) <p>Loading</p>;

  const authors = data?.authors || [];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[var(--hero-bg)] border-b border-[var(--border-color)] md:mt-2 md:rounded-lg">
        <div className="flex flex-col md:flex-row items-center px-4 py-7">
          <img
            src={AuthorsImage}
            alt="نویسندگان وبلاگ"
            className="max-h-[300px] object-contain rounded-lg shadow-[var(--shadow-color)]"
          />
          <div className="text-center md:text-right md:mr-10">
            <h1 className="text-lg md:text-2xl font-bold text-[var(--text-primary)]">
              نویسندگان ما
            </h1>

            <p className="mt-5 text-sm md:text-lg leading-8 text-[var(--text-secondary)]">
              با نویسندگان این وبلاگ آشنا شوید. افرادی که با تجربه و دانش خود به
              شما در مسیر یادگیری و رشد کمک می‌کنند.
            </p>
          </div>
        </div>
      </section>

      {/* Authors */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        {/* count */}
        <div className="mb-6 space-x-2">
          <p className="text-sm md:text-base text-[var(--text-secondary)]">
            تعداد نویسندگان:
            <span className="font-bold text-[var(--text-primary)]">
              {authors.length}
            </span>
            نفر
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {authors.map((author) => (
            <div
              key={author.id}
              className="h-full flex flex-col border border-[var(--border-color)] rounded-xl bg-[var(--bg-primary)] p-6 shadow-[var(--shadow-color)]"
            >
              {/* author info */}
              <div className="flex items-center gap-5">
                <img
                  src={author.avatar.url}
                  alt={author.name}
                  className="w-24 h-24 shrink-0 rounded-full object-cover"
                />

                <div className="min-w-0">
                  <h2 className="text-xl font-bold text-[var(--text-primary)]">
                    {author.name}
                  </h2>

                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {author.field}
                  </p>
                </div>
              </div>

              {/* description */}
              <p
                className="mt-6 text-sm md:text-base leading-8 text-[var(--text-secondary)] line-clamp-3"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(author.description?.html || ""),
                }}
              />

              {/* footer */}
              <div className="mt-auto pt-6 flex items-center justify-between gap-3">
                {/* posts count */}
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <MdArticle className="text-lg" />
                  <span>{author.posts.length} مقاله</span>
                </div>

                {/* link */}
                <Link
                  to={`/authors/${author.slug}`}
                  className="flex items-center gap-2 border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition rounded-lg px-4 py-2 text-sm"
                >
                  مشاهده مقالات
                  <MdArrowBackIosNew className="text-xs" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AuthorsPage;
