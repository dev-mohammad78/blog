function BlogCardSkeleton() {
  return (
    <div className="h-full overflow-hidden rounded-lg border-2 border-[var(--border-color)] shadow-[var(--shadow-color)]">
      {/* image */}
      <div className="h-[220px] w-full animate-pulse bg-[var(--bg-tertiary)] md:h-[180px]" />

      {/* content */}
      <div className="flex flex-col p-3">
        {/* title */}
        <div className="min-h-[56px] space-y-2">
          <div className="h-5 w-full animate-pulse rounded bg-[var(--bg-tertiary)]" />
          <div className="h-5 w-3/4 animate-pulse rounded bg-[var(--bg-tertiary)]" />
        </div>

        {/* description */}
        <div className="mt-3 min-h-[48px] space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-[var(--bg-tertiary)]" />
          <div className="h-3 w-4/5 animate-pulse rounded bg-[var(--bg-tertiary)]" />
        </div>

        {/* author */}
        <div className="mt-4 flex items-center gap-x-2">
          <div className="h-10 w-10 animate-pulse rounded-full bg-[var(--bg-tertiary)]" />

          <div className="h-4 w-24 animate-pulse rounded bg-[var(--bg-tertiary)]" />
        </div>

        {/* date */}
        <div className="mt-5 h-4 w-24 animate-pulse rounded bg-[var(--bg-tertiary)]" />

        {/* button */}
        <div className="mt-4 h-10 w-full animate-pulse rounded-lg bg-[var(--bg-tertiary)]" />
      </div>
    </div>
  );
}

export default BlogCardSkeleton;
