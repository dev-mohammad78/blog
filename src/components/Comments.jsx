import { useQuery } from "@apollo/client/react";
import { GET_POST_COMMENTS } from "../graphql/queries";

function Comments({ slug }) {
  const { loading, data } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });

  if (loading) return null;
  return (
    <div className="my-4 p-2">
      <h3 className="text-lg md:text-xl text-[var(--text-primary)] font-bold">
        دیدگاه ها
      </h3>
      {data.comments.map((comment) => (
        <div
          className="mt-3 p-4 md:p-6 flex flex-col gap-2 border border-[var(--border-color)] rounded-lg "
          key={comment.id}
        >
          {/* avatar */}
          <div className="flex items-center gap-x-3">
            <span className="w-8 h-8 rounded-full flex justify-center items-center bg-[var(--primary-light)]">
              {comment.name[0]}
            </span>
            <h4 className="font-semibold">{comment.name}</h4>
          </div>
          {/* text */}
          <p className="p-4 ">{comment.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Comments;
