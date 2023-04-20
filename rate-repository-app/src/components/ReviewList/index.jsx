import { FlatList, View } from "react-native";
import ReviewItem from "../ReviewItem";
import theme from "../../theme";

const ReviewList = ({ data, ...props }) => {
  return (
    <>
      <FlatList
        data={data}
        renderItem={({ item }) => <ReviewItem data={item} />}
        ItemSeparatorComponent={() => (
          <View style={{ height: theme.spacing.normal }} />
        )}
        keyExtractor={({ id }) => id}
        {...props}
      />
    </>
  );
};

export default ReviewList;
