import { useQuery } from "@apollo/client";
import Constants from "expo-constants";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";
import { ME } from "../../graphql/queries";
import useSignOut from "../../hooks/useSignOut";
import theme from "../../theme";
import AppBarTab from "./AppBarTab";

const ItemSeparator = () => <View style={styles.separator} />;

const AppBar = () => {
  const { data } = useQuery(ME);
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
    paddingHorizontal: theme.spacing.large,
    backgroundColor: theme.colors.appBarBackground,
    minHeight: 100,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  separator: {
    width: 1,
    backgroundColor: "gray",
    marginLeft: theme.spacing.normal,
    marginRight: theme.spacing.normal,
  },
});

export default AppBar;
