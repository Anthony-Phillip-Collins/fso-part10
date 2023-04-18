import { gql } from "@apollo/client";

export const RepositoryItemFragment = gql`
  fragment RepositoryItem on Repository {
    id
    fullName
    description
    language
    forksCount
    stargazersCount
    ratingAverage
    reviewCount
    ownerAvatarUrl
  }
`;
