import { useQuery } from "@apollo/client";
import { useParams } from "react-router-native";
import Text from "../components/Text";
import { GET_REPOSITORY } from "../graphql/queries";
import RepositoryItem from "../components/RepositoryItem";

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

  return <RepositoryItem data={repository} />;
};

export default RepositoryItemPage;
