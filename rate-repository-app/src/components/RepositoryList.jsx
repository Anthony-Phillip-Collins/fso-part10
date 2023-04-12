import { FlatList, StyleSheet, View } from "react-native";
import { repositories as dummy } from "../data/dummy";
import useRepositories from "../hooks/useRespositories";
import RepositoryItem from "./RepositoryItem";

const offline = false;

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={offline ? dummy : repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem data={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;
