import { useState } from "react";
import { FiFilter } from "react-icons/fi";

import Articles from "../components/Articles";
import FilterSidebar from "../components/FilterSidebar";

function BlogsPage() {
  const [sort, setSort] = useState("newest");
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
            setSort={setSort}
            selectedAuthor={selectedAuthor}
            setSelectedAuthor={setSelectedAuthor}
            closeFilter={() => setIsFilterOpen(false)}
          />
        </div>

        {/* Blogs */}
        <Articles sort={sort} selectedAuthor={selectedAuthor} />
      </div>
    </div>
  );
}

export default BlogsPage;
