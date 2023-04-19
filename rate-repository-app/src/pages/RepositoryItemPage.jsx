import { useQuery } from "@apollo/client";
import { useParams } from "react-router-native";
import Text from "../components/Text";
import { GET_REPOSITORY } from "../graphql/queries";
import RepositoryItem from "../components/RepositoryItem";
import ReviewItem from "../components/ReviewItem";
import { FlatList, View } from "react-native";
import theme from "../theme";

const RepositoryItemPage = () => {
  const params = useParams();
  console.log("Load", params.id);

  const { data, loading, error } = useQuery(GET_REPOSITORY, {
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
      <FlatList
        data={reviews}
        ListHeaderComponent={() => <RepositoryItem data={repository} />}
        ListHeaderComponentStyle={{ marginBottom: theme.spacing.normal }}
        renderItem={({ item }) => <ReviewItem data={item} />}
        ItemSeparatorComponent={() => (
          <View style={{ height: theme.spacing.normal }} />
        )}
        keyExtractor={({ id }) => id}
      />
    </>
  );
};

export default RepositoryItemPage;
