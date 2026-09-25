import { useQuery } from "@apollo/client/react";
import { useParams } from "react-router-dom";
import { GET_POST_INFO } from "../graphql/queries";

function BlogPage() {
  const { slug } = useParams();
  const { loading, data } = useQuery(GET_POST_INFO, { variables: { slug } });

  if (loading) return <p>Loading..</p>;
  const { post } = data;
  console.log(post)

  return (
    <div>
      <h1>BlogPage</h1>
      <p>{slug}</p>
    </div>
  );
}

export default BlogPage;
