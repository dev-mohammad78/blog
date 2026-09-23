import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Articles from "../components/Articles";
import FilterSidebar from "../components/FilterSidebar";
import { FiFilter } from "react-icons/fi";

function BlogsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort") || "newest";
  const author = searchParams.get("author") || "";

  useEffect(() => {
    if (!searchParams.has("sort")) {
      const params = new URLSearchParams(searchParams);
      params.set("sort", "newest");
      setSearchParams(params, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const handleSortChange = (value) => {
    const params = new URLSearchParams(searchParams);

    params.set("sort", value);

    setSearchParams(params);
  };

  const handleAuthorChange = (value) => {
    const params = new URLSearchParams(searchParams);

    params.set("author", value);

    setSearchParams(params);
  };

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams);

    params.delete("sort");
    params.delete("author");

    setSearchParams(params);
  };

  return (
    <div className="mt-4 px-4 md:px-0 py-4">
      {/* Mobile filter button */}
      <div className="mb-4 flex justify-end lg:hidden">
        <button
          type="button"
          onClick={() => setIsFilterOpen((prev) => !prev)}
          className="flex items-center gap-x-2 rounded-lg border border-[var(--border-color)] px-4 py-2 text-sm text-[var(--text-primary)] transition hover:bg-[var(--primary)] hover:text-white"
        >
          <FiFilter />

          <span>{isFilterOpen ? "بستن فیلترها" : "فیلتر و مرتب‌سازی"}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <div
          className={`
            ${isFilterOpen ? "block" : "hidden"}
            lg:block
          `}
        >
          <FilterSidebar
            sort={sort}
            selectedAuthor={author}
            onSortChange={handleSortChange}
            onAuthorChange={handleAuthorChange}
            onClearFilters={clearFilters}
            closeFilter={() => setIsFilterOpen(false)}
          />
        </div>

        {/* Blogs */}
        <Articles sort={sort} selectedAuthor={author} />
      </div>
    </div>
  );
}

export default BlogsPage;
