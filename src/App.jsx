import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

import Layout from "./layout/Layout";
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

  return <Layout />;
}

export default App;
