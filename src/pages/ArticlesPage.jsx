import Articles from "../components/Articles";
import Authors from "../components/Authors";

function ArticlesPage() {
  return (
    <div className="grid gap-3 md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr]">
      <div className="order-2 pt-0 p-4 mt-2 md:mt-8">
        <Authors />
      </div>
      <div className="order-1 md:order-2 p-6 mt-4">
        <Articles />
      </div>
    </div>
  );
}

export default ArticlesPage;
