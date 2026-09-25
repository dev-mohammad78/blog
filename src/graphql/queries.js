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

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      description {
        html
      }
      field
      id
      name
      avatar {
        url
      }
      posts {
        cover {
          url
        }
        id
        slug
        title
        publishedDate
      }
    }
  }
`;

const GET_POST_INFO = gql`
  query getPostInfo($slug: String!) {
    post(where: { slug: $slug }) {
      authors {
        ... on Author {
          name
          field
          avatar {
            url
          }
        }
      }
      content {
        text
      }
      cover {
        url
      }
      publishedDate
      title
      slug
    }
  }
`;
export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO, GET_POST_INFO };
