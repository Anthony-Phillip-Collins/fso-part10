import { gql } from "@apollo/client";

export const RepositoryFragment = gql`
  fragment RepositoryFields on Repository {
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

export const ReviewFragment = gql`
  fragment ReviewFields on Review {
    id
    text
    rating
    createdAt
    user {
      username
    }
    repository {
      id
      url
      fullName
      ownerName
      name
    }
  }
`;
