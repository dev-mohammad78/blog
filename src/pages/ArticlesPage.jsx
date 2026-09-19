import Articles from "../components/Articles";
import Authors from "../components/Authors";

function ArticlesPage() {
  return (
    <div className="grid gap-7 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr]">
      <div className="order-2 bg-blue-500 p-4  mt-2 md:mt-8">
        <Authors />
      </div>
      <div className="order-1 md:order-2  p-4 mt-8">
        <Articles />
      </div>
    </div>
  );
}

export default ArticlesPage;
