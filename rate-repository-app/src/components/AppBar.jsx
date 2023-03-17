import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingVertical: Constants.statusBarHeight,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.appBarBackground,
    minHeight: 100,
    display: "flex",
    justifyContent: "flex-end",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text="Repositories" />
    </View>
  );
};

export default AppBar;
