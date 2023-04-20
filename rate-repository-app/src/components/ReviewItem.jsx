import { format } from "date-fns";
import { View } from "react-native";
import theme from "../theme";
import Text from "./Text";
import UniversalButton from "./UniversalButton";

const ReviewItem = ({ data, isMyReview, onDelete }) => {
  const {
    rating,
    createdAt,
    text,
    user: { username },
    repository: { fullName: repoName, id },
  } = data;

  const createdAtFormatted = format(new Date(createdAt), "dd.MM.yyyy");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.column.left}>
          <View style={styles.rating.container}>
            <Text style={styles.rating.text}>{rating}</Text>
          </View>
        </View>

        <View style={styles.column.right}>
          <Text fontWeight="bold">{isMyReview ? repoName : username}</Text>
          <Text style={styles.createdAt}>{createdAtFormatted}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>

      {isMyReview && (
        <View style={styles.edit}>
          <UniversalButton
            to={`/repositories/${id}`}
            title="View repository"
            style={{ flex: 1, marginRight: theme.spacing.normal }}
          />
          <UniversalButton
            title="Delete review"
            style={{ flex: 1 }}
            type="primaryDanger"
            onPress={onDelete}
          />
        </View>
      )}
    </View>
  );
};

const styles = {
  container: {
    ...theme.containers.main,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
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
      flex: 1,
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
  edit: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: theme.spacing.large,
  },
};

export default ReviewItem;
