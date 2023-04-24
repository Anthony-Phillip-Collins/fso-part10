import { gql } from "@apollo/client";
import { RepositoryFragment, ReviewFragment } from "./fragments";

export const GET_REPOSITORIES = gql`
  query GetRepositories(
    $orderBy: AllRepositoriesOrderBy = CREATED_AT
    $orderDirection: OrderDirection = DESC
    $searchKeyword: String = ""
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        cursor
        node {
          ...RepositoryFields
        }
      }
    }
  }

  ${RepositoryFragment}
`;

export const GET_REPOSITORY = gql`
  query GetRepository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositoryFields
      url
      reviews {
        edges {
          node {
            ...ReviewFields
          }
        }
      }
    }
  }
  ${RepositoryFragment}
  ${ReviewFragment}
`;

export const ME = gql`
  query GetCurrentUser($includeReviews: Boolean = false) {
    me {
      username
      id
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewFields
          }
        }
      }
    }
  }
  ${ReviewFragment}
`;
