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
        }
      }
      title
      slug
      id
      cover {
        url
      }
    }
  }
`;

export { GET_BLOGS_INFO };
