import { createRoot } from "react-dom/client";
import "./global.css";
import "./styles/fonts.css";

import App from "./App.jsx";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_APP_HYGRAPH_URI,
  }),
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
);
