import { useParams } from "react-router-native";
import RepositoryItem from "../components/RepositoryItem";
import ReviewList from "../components/ReviewList";
import Text from "../components/Text";
import useRepository from "../hooks/useRespository";
import theme from "../theme";

const RepositoryItemPage = () => {
  const params = useParams();

  const { repository, loading, error, fetchMoreReviews } = useRepository({
    repositoryId: params.id,
    reviewsFirst: 3,
    reviewsAfter: "",
  });

  const onEndReachedHandler = async () => {
    await fetchMoreReviews();
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const reviews = repository?.reviews?.edges?.map((edge) => edge.node);

  return (
    <>
      <ReviewList
        data={reviews}
        ListHeaderComponent={() => <RepositoryItem data={repository} />}
        ListHeaderComponentStyle={{ marginBottom: theme.spacing.normal }}
        onEndReached={() => onEndReachedHandler()}
        onEndReachedThreshold={0.5}
      />
    </>
  );
};

export default RepositoryItemPage;
