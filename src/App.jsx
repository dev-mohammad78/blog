import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

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
    <>
      <h1 className="bg-slate-500 font-light text-3xl">وبلاگ من</h1>
    </>
  );
}

export default App;
