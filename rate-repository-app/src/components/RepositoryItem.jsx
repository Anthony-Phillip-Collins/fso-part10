import { Image, StyleSheet, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 10,
  },
});

const RepositoryItem = ({ data }) => {
  const {
    // id,
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
    <View style={styles.item}>
      <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
      <Text style={styles.body}>Full name: {fullName}</Text>
      <Text style={styles.body}>Description: {description}</Text>
      <Text style={styles.body}>Language: {language}</Text>
      <Text style={styles.body}>Forks: {forksCount}</Text>
      <Text style={styles.body}>Stars: {stargazersCount}</Text>
      <Text style={styles.body}>Reviews: {reviewCount}</Text>
      <Text style={styles.body}>Rating: {ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
