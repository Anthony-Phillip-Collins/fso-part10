import { FlatList, Pressable, StyleSheet, View } from "react-native";
import RepositoryItem from "../RepositoryItem";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const Item = (props) => {
  const navigate = useNavigate();
  const {
    data: { id },
  } = props;

  return (
    <Pressable
      onPress={() => {
        navigate(`/repositories/${id}`);
      }}
    >
      {<RepositoryItem {...props} />}
    </Pressable>
  );
};

const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories?.edges?.map((edge) => edge.node)
    : [];

  return (
    <View>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default RepositoryListContainer;
