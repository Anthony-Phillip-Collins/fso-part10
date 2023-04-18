import { Image, StyleSheet, View } from "react-native";
import theme from "../theme";
import Text from "./Text";

const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num;
};

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },

  avatar: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 6,
    marginRight: 20,
  },

  headingContainer: {
    display: "flex",
    flexDirection: "column",
    flexShrink: 1,
  },

  heading: {
    marginBottom: 5,
  },

  statsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  statsItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  languageBadge: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginTop: 10,
  },

  languageBadgeText: {
    color: "white",
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
});

const StatsItem = ({ label, value }) => {
  return (
    <View style={styles.statsItem}>
      <Text fontSize="body" fontWeight="bold">
        {formatNumber(value)}
      </Text>
      <Text fontSize="body" color="secondary">
        {label}
      </Text>
    </View>
  );
};

const LanguageBadge = ({ language }) => {
  return (
    <View style={styles.languageBadge}>
      <Text style={styles.languageBadgeText}>{language}</Text>
    </View>
  );
};

const RepositoryItem = ({ data }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = data;
  return (
    <View style={styles.item} testID="repositoryItem">
      <View style={styles.header}>
        <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
        <View style={styles.headingContainer}>
          <Text style={styles.heading} fontWeight="bold" fontSize="subheading">
            {fullName}
          </Text>
          <Text fontSize="subheading" color="secondary">
            {description}
          </Text>
          <LanguageBadge language={language} />
        </View>
      </View>

      <View style={styles.statsContainer}>
        <StatsItem label="Stars" value={stargazersCount} />
        <StatsItem label="Forks" value={forksCount} />
        <StatsItem label="Reviews" value={reviewCount} />
        <StatsItem label="Rating" value={ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
