import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      authors {
        ... on Author {
          name
          avatar {
            url
          }
          field
        }
      }
      title
      slug
      id
      cover {
        url
      }
      publishedDate
    }
  }
`;

export { GET_BLOGS_INFO };
