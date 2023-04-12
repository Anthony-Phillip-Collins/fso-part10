import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query GetRepositories {
    repositories {
      edges {
        cursor
        node {
          description
          ownerAvatarUrl
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          fullName
          id
        }
      }
    }
  }
`;
