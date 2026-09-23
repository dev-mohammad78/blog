import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

import Articles from "../components/Articles";
import FilterSidebar from "../components/FilterSidebar";

function BlogsPage() {
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
    <div className="mt-4 p-4 md:p-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
        <FilterSidebar
          sort={sort}
          selectedAuthor={author}
          onSortChange={handleSortChange}
          onAuthorChange={handleAuthorChange}
          onClearFilters={clearFilters}
        />

        <Articles sort={sort} selectedAuthor={author} />
      </div>
    </div>
  );
}

export default BlogsPage;
