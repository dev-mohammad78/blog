import { useParams } from "react-router-dom";

function ArticleDetailsPage() {
  const { slug } = useParams();

  return (
    <div>
      <h1>Article Details</h1>
      <p>{slug}</p>
    </div>
  );
}

export default ArticleDetailsPage;
