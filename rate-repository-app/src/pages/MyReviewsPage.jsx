import { useMutation, useQuery } from "@apollo/client";
import ReviewItem from "../components/ReviewItem";
import ReviewList from "../components/ReviewList";
import { DELETE_REVIEW } from "../graphql/mutations";
import { GET_MY_REVIEWS } from "../graphql/queries";
import Text from "../components/Text";
import { StyleSheet, View } from "react-native";
import theme from "../theme";
import UniversalButton from "../components/UniversalButton";

const MyReviewsPage = () => {
  const { data } = useQuery(GET_MY_REVIEWS, {
    fetchPolicy: "cache-and-network",
  });

  const [deleteReview] = useMutation(DELETE_REVIEW, {
    refetchQueries: [{ query: GET_MY_REVIEWS }],
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

  return (
    <ReviewList
      data={reviews}
      renderItem={({ item }) => (
        <ReviewItem
          data={item}
          isMyReview={true}
          onDelete={async () => {
            try {
              await deleteReview({
                variables: { deleteReviewId: item.id },
              });
            } catch (e) {
              console.log(e);
            }
          }}
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
