import { formatPersianDate } from "../helper/formatPersianDate";

function SingleCard({ authors, title, cover, slug, publishedDate }) {

  return (
    <div className="h-full flex flex-col border-2 border-[var(--border-color)] rounded-lg shadow-[var(--shadow-color)]">
      {/* img */}
      <img
        src={cover.url}
        alt={title}
        className="w-full md:w-[360px] h-[220px] md:h-[180px] object-center rounded-lg"
      />

      {/* content */}
      <div className="flex flex-col flex-1 mt-2 p-3">
        <h2 className="font-semibold text-lg md:text-base text-[var(--text-primary)]">
          {title}
        </h2>

        <div className="flex items-center gap-x-2 mt-auto pt-4">
          <img
            src={authors.avatar.url}
            alt={authors.name}
            className="w-[50px] rounded-full"
          />

          <span>
            <p className="text-sm text-[var(--text-secondary)]">
              {authors.name}
            </p>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              {authors.field}
            </p>
          </span>
        </div>
        <p className="mt-5 text-sm text-[var(--text-secondary)]">
          {formatPersianDate(publishedDate)}
        </p>
        <button className="mt-4 p-2 border border-[var(--primary-hover)] rounded-lg text-sm text-[var(--primary-hover)] font-semibold">
          مطالعه مقاله
        </button>
      </div>
    </div>
  );
}

export default SingleCard;
