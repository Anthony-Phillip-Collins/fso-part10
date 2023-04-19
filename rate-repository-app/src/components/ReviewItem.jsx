import { format } from "date-fns";
import { View } from "react-native";
import theme from "../theme";
import Text from "./Text";

const Rating = ({ rating }) => (
  <View style={styles.rating.container}>
    <Text style={styles.rating.text}>{rating}</Text>
  </View>
);

const ReviewItem = ({ data }) => {
  const {
    rating,
    createdAt,
    text,
    user: { username },
  } = data;

  const createdAtFormatted = format(new Date(createdAt), "dd.MM.yyyy");

  return (
    <View style={styles.container}>
      <View style={styles.column.left}>
        <Rating rating={rating} />
      </View>
      <View style={styles.column.right}>
        <Text fontWeight="bold">{username}</Text>
        <Text style={styles.createdAt}>{createdAtFormatted}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "white",
    padding: theme.spacing.large,
  },
  column: {
    left: {
      display: "flex",
      flexDirection: "column",
      marginRight: theme.spacing.large,
    },
    right: {
      display: "flex",
      flexDirection: "column",
      flexShrink: 1,
    },
  },
  createdAt: {
    marginTop: theme.spacing.small,
    color: theme.colors.textSecondary,
  },
  text: {
    marginTop: theme.spacing.normal,
  },
  rating: {
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      borderColor: theme.colors.primary,
      borderRadius: 25,
      width: 50,
      height: 50,
    },
    text: {
      color: theme.colors.primary,
      fontWeight: theme.fontWeights.bold,
      fontSize: theme.fontSizes.heading,
    },
  },
};

export default ReviewItem;
