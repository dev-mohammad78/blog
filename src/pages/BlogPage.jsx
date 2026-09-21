import { useParams } from "react-router-dom";

function BlogPage() {
  const { slug } = useParams();

  return (
    <div>
      <h1>BlogPage</h1>
      <p>{slug}</p>
    </div>
  );
}

export default BlogPage;
