import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
const QUERY = gql`
  query {
    authors {
      name
    }
  }
`;

function App() {
  const response = useQuery(QUERY);
  console.log(response);

  return (
    <Layout>
      <ArticlesPage/>
    </Layout>
  );
}

export default App;
