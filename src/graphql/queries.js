import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      authors {
        ... on Author {
          id
          name
          slug
          avatar {
            url
          }
          field
        }
      }
      title
      slug
      id
      content {
        text
      }
      cover {
        url
      }
      publishedDate
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      field
      slug
      avatar {
        url
      }
    }
  }
`;

export { GET_BLOGS_INFO, GET_AUTHORS_INFO };
