import { gql } from "@apollo/client";
import { RepositoryItemFragment } from "./fragments";

export const GET_REPOSITORIES = gql`
  query GetRepositories {
    repositories {
      edges {
        cursor
        node {
          ...RepositoryItem
        }
      }
    }
  }

  ${RepositoryItemFragment}
`;

export const GET_REPOSITORY = gql`
  query GetRepository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      url
      ...RepositoryItem
    }
  }
  ${RepositoryItemFragment}
`;

export const ME = gql`
  query Me {
    me {
      username
      id
    }
  }
`;
