import Constants from "expo-constants";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const data = [
  {
    text: "Repositories",
    id: "0",
    uri: "/",
  },
  {
    text: "Sign in",
    id: "1",
    uri: "/signin",
  },
];

const ItemSeparator = () => <View style={styles.separator} />;

const AppBar = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <AppBarTab text={item.text} uri={item.uri} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: Constants.statusBarHeight,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.appBarBackground,
    minHeight: 100,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  separator: {
    width: 2,
    backgroundColor: "white",
    marginLeft: 20,
    marginRight: 20,
  },
});

export default AppBar;
