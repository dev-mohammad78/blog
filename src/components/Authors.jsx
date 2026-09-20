import { useQuery } from "@apollo/client/react";
import { GET_AUTHORS_INFO } from "../graphql/queries";

function Authors() {
  const { loading, data } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <p>loading</p>;
  return (
    <div className="border-2 border-[var(--border-color)] rounded-lg shadow shadow-[var(--shadow-color)] py-0 p-4 w-full">
      <h3 className="font-semibold text-lg md:text-xl border-b border-[var(--border-color)] py-3">
        نویسنده‌ها
      </h3>

      {data.authors.map((author) => (
        <Author key={author.id} {...author} />
      ))}
    </div>
  );
}

export default Authors;

function Author({ id, name, field, slug, avatar }) {
  return (
    <div className="flex items-center gap-x-4 py-4 border-b last:border-b-0 border-[var(--border-color)]">
      <img src={avatar.url} alt={name} className="w-[50px] rounded-full" />

      <span>
        <p className="text-base text-[var(--text-primary)]">{name}</p>
        <p className="mt-1 text-xs text-[var(--text-secondary)]">{field}</p>
      </span>
    </div>
  );
}
