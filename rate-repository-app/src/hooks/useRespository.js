import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (
  variables = {
    reviewsFirst: 3,
    reviewsAfter: "",
  },
) => {
  const { loading, error, data, refetch, fetchMore } = useQuery(
    GET_REPOSITORY,
    {
      fetchPolicy: "cache-and-network",
      variables,
    },
  );

  const fetchMoreReviews = async () => {
    const canFetchMore =
      !loading && data?.repository?.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }
    // console.log("????", variables, {
    //   ...variables,
    //   reviewsAfter: data.repository.reviews.pageInfo.endCursor,
    // });
    return await fetchMore({
      variables: {
        ...variables,
        reviewsAfter: data.repository.reviews.pageInfo.endCursor,
      },
    });
  };

  return {
    repository: data?.repository,
    loading,
    error,
    refetch,
    fetchMoreReviews,
  };
};

export default useRepository;
