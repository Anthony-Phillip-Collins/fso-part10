import { useQuery } from "@apollo/client";
import { useParams } from "react-router-native";
import RepositoryItem from "../components/RepositoryItem";
import ReviewList from "../components/ReviewList";
import Text from "../components/Text";
import { GET_REPOSITORY } from "../graphql/queries";
import theme from "../theme";

const RepositoryItemPage = () => {
  const params = useParams();

  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { repositoryId: params.id },
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const { repository } = data;
  const reviews = repository?.reviews?.edges?.map((edge) => edge.node);

  return (
    <>
      <ReviewList
        data={reviews}
        ListHeaderComponent={() => <RepositoryItem data={repository} />}
        ListHeaderComponentStyle={{ marginBottom: theme.spacing.normal }}
      />
    </>
  );
};

export default RepositoryItemPage;
