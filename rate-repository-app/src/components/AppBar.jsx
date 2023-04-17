import Constants from "expo-constants";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";
import useMe from "../hooks/useMe";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import useSignOut from "../hooks/useSignOut";

const ItemSeparator = () => <View style={styles.separator} />;

const AppBar = () => {
  const { data } = useMe();
  const navigate = useNavigate();
  const signOut = useSignOut();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" onPress={() => navigate("/")} />
        <ItemSeparator />
        {data?.me ? (
          <AppBarTab text="Sign out" onPress={() => signOut()} />
        ) : (
          <AppBarTab text="Sign in" onPress={() => navigate("/signin")} />
        )}
      </ScrollView>
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
