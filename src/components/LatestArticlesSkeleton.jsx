import BlogCardSkeleton from "./BlogCardSkeleton";

function LatestArticlesSkeleton() {
  return (
    <section className="rounded-lg p-4 md:p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="h-7 w-32 animate-pulse rounded-md bg-[var(--bg-secondary)]" />

        <div className="h-8 w-24 animate-pulse rounded-md bg-[var(--bg-secondary)]" />
      </div>

      {/* Blog cards */}
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <BlogCardSkeleton key={item} />
        ))}
      </div>
    </section>
  );
}

export default LatestArticlesSkeleton;
