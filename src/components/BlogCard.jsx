import { Link } from "react-router-dom";
import { formatPersianDate } from "../helper/formatPersianDate";

function BlogCard({ authors, title, content, cover, slug, publishedDate }) {
  return (
    <div className="h-full flex flex-col border-2 border-[var(--border-color)] rounded-lg shadow-[var(--shadow-color)] overflow-hidden">
      {/* image */}
      <img
        src={cover.url}
        alt={title}
        className="w-full h-[220px] md:h-[180px] object-cover"
      />

      {/* content */}
      <div className="flex flex-col flex-1 p-3">
        {/* title */}
        <h2
          className="
            min-h-[56px]
            line-clamp-2
            font-semibold
            text-lg
            md:text-base
            leading-7
            md:leading-6
            text-[var(--text-primary)]
          "
        >
          {title}
        </h2>

        {/* description */}
        <p
          className="
            mt-3
            min-h-[48px]
            line-clamp-2
            text-xs
            leading-6
            text-[var(--text-secondary)]
          "
        >
          {content.text}
        </p>

        {/* author */}

        <Link
          to={`/authors/${authors.slug}`}
          className="flex items-center gap-x-2 mt-auto pt-4"
        >
          <img
            src={authors.avatar.url}
            alt={authors.name}
            className="w-[40px] h-[40px] object-cover rounded-full"
          />

          <p className="text-sm text-[var(--text-secondary)]">{authors.name}</p>
        </Link>

        {/* date */}
        <p className="mt-5 text-sm text-[var(--text-secondary)]">
          {formatPersianDate(publishedDate)}
        </p>

        {/* button */}
        <Link
          to={`/blogs/${slug}`}
          className="
            mt-4
            p-2
            border
            border-[var(--primary-hover)]
            rounded-lg
            text-sm
            text-[var(--primary-hover)]
            font-semibold
            text-center
            cursor-pointer
            transition
            hover:bg-[var(--primary-hover)]
            hover:text-white
          "
        >
          مطالعه مقاله
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
