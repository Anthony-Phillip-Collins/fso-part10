import { useMutation, useQuery } from "@apollo/client";
import ReviewItem from "../components/ReviewItem";
import ReviewList from "../components/ReviewList";
import { DELETE_REVIEW } from "../graphql/mutations";
import { ME } from "../graphql/queries";
import Text from "../components/Text";
import { Alert, StyleSheet, View } from "react-native";
import theme from "../theme";
import UniversalButton from "../components/UniversalButton";

const MyReviewsPage = () => {
  const { data } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
    variables: { includeReviews: true },
  });

  const [deleteReview] = useMutation(DELETE_REVIEW, {
    refetchQueries: [{ query: ME, variables: { includeReviews: true } }],
  });

  const reviews = data?.me?.reviews.edges.map((edge) => edge.node);

  if (reviews?.length === 0) {
    return (
      <View style={styles.noReviews.container}>
        <Text style={styles.noReviews.text}>
          You haven’t created a review yet.
        </Text>
        <UniversalButton to="/create-review" title="Create a review" />
      </View>
    );
  }

  const onDelete = async (id) => {
    Alert.alert(
      "Delete Review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => {
            // console.log("Cancel Pressed");
          },
        },
        {
          text: "OK",
          onPress: async () => {
            try {
              await deleteReview({
                variables: { deleteReviewId: id },
              });
            } catch (e) {
              console.log(e);
            }
          },
        },
      ],
    );
  };

  return (
    <ReviewList
      data={reviews}
      renderItem={({ item }) => (
        <ReviewItem
          data={item}
          isMyReview={true}
          onDelete={() => onDelete(item.id)}
        />
      )}
      keyExtractor={({ id }) => id}
    />
  );
};

const styles = StyleSheet.create({
  noReviews: {
    container: theme.containers.main,
    text: {
      marginBottom: theme.spacing.large,
    },
  },
});

export default MyReviewsPage;
