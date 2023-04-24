import { gql } from "@apollo/client";
import { RepositoryFragment, ReviewFragment } from "./fragments";

export const GET_REPOSITORIES = gql`
  query GetRepositories(
    $first: Int = 3
    $after: String = ""
    $orderBy: AllRepositoriesOrderBy = CREATED_AT
    $orderDirection: OrderDirection = DESC
    $searchKeyword: String = ""
  ) {
    repositories(
      first: $first
      after: $after
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      totalCount
      edges {
        cursor
        node {
          ...RepositoryFields
        }
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }

  ${RepositoryFragment}
`;

export const GET_REPOSITORY = gql`
  query GetReviews(
    $repositoryId: ID!
    $reviewsFirst: Int = 3
    $reviewsAfter: String = ""
  ) {
    repository(id: $repositoryId) {
      ...RepositoryFields
      url
      reviews(first: $reviewsFirst, after: $reviewsAfter) {
        pageInfo {
          endCursor
          hasNextPage
          startCursor
        }
        totalCount
        edges {
          cursor
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
