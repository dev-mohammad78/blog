import { useState } from "react";
import { useQuery } from "@apollo/client/react";
import { FiSearch, FiX } from "react-icons/fi";

import { GET_AUTHORS_INFO } from "../graphql/queries";

function FilterSidebar({
  sort,
  selectedAuthor,
  onSortChange,
  onAuthorChange,
  onClearFilters,
  closeFilter,
}) {
  const [authorSearch, setAuthorSearch] = useState("");

  const { loading, data } = useQuery(GET_AUTHORS_INFO);

  const authors = data?.authors || [];

  const filteredAuthors = authors.filter((author) =>
    author.name.toLowerCase().includes(authorSearch.toLowerCase()),
  );

  return (
    <aside className="rounded-lg border-2 border-[var(--border-color)] p-4 shadow-[var(--shadow-color)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4">
        <h2 className="text-lg font-semibold">فیلتر و مرتب‌سازی</h2>

        {/* Close button - mobile */}
        <button
          type="button"
          onClick={closeFilter}
          className="rounded-md p-1 text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] lg:hidden"
        >
          <FiX className="text-xl" />
        </button>
      </div>

      {/* Sort */}
      <div className="border-b border-[var(--border-color)] py-5">
        <h3 className="mb-4 text-sm font-semibold">مرتب‌سازی</h3>

        <label className="flex cursor-pointer items-center gap-x-2 text-sm">
          <input
            type="radio"
            name="sort"
            checked={sort === "newest"}
            onChange={() => onSortChange("newest")}
          />

          <span>جدیدترین</span>
        </label>

        <label className="mt-3 flex cursor-pointer items-center gap-x-2 text-sm">
          <input
            type="radio"
            name="sort"
            checked={sort === "oldest"}
            onChange={() => onSortChange("oldest")}
          />

          <span>قدیمی‌ترین</span>
        </label>
      </div>

      {/* Authors */}
      <div className="py-5">
        <h3 className="mb-4 text-sm font-semibold">فیلتر بر اساس نویسنده</h3>

        {/* Search */}
        <div className="relative mb-4">
          <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[var(--text-secondary)]" />

          <input
            type="text"
            value={authorSearch}
            onChange={(e) => setAuthorSearch(e.target.value)}
            placeholder="جستجوی نویسنده..."
            className="w-full rounded-lg border border-[var(--border-color)] bg-transparent py-2 pr-9 pl-3 text-xs outline-none focus:border-[var(--primary)]"
          />
        </div>

        {/* Authors */}
        {loading ? (
          <p className="text-xs text-[var(--text-secondary)]">
            در حال بارگذاری...
          </p>
        ) : (
          <div className="space-y-3">
            {filteredAuthors.map((author) => (
              <label
                key={author.id}
                className="flex cursor-pointer items-center gap-x-2 text-sm"
              >
                <input
                  type="radio"
                  name="author"
                  checked={selectedAuthor === author.slug}
                  onChange={() => onAuthorChange(author.slug)}
                />

                <span>{author.name}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Clear filters */}
      <button
        type="button"
        onClick={() => {
          onClearFilters();
          setAuthorSearch("");
        }}
        className="w-full rounded-lg border border-[var(--border-color)] p-2 text-sm transition hover:bg-[var(--primary)] hover:text-white"
      >
        پاک کردن فیلترها
      </button>
    </aside>
  );
}

export default FilterSidebar;
