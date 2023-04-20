import { gql } from "@apollo/client";
import { RepositoryFragment, ReviewFragment } from "./fragments";

export const GET_REPOSITORIES = gql`
  query GetRepositories(
    $orderBy: AllRepositoriesOrderBy = CREATED_AT
    $orderDirection: OrderDirection = DESC
  ) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
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
  query Me {
    me {
      username
      id
    }
  }
`;

export const GET_MY_REVIEWS = gql`
  query GetMyReviews {
    me {
      reviews {
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
