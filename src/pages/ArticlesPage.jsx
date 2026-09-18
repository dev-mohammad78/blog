import Articles from "../components/Articles";
import Authors from "../components/Authors";

function ArticlesPage() {
  return (
    <div className="grid gap-7 md:grid-cols-[280px_1fr]">
      <div className="order-2 bg-blue-500 p-4">
        <Authors />
      </div>
      <div className="order-1 md:order-2 bg-red-500 p-4">
        <Articles />
      </div>
    </div>
  );
}

export default ArticlesPage;
