import { StyleSheet, View } from "react-native";
import { Navigate, Route, Routes } from "react-router-native";
import HomePage from "../pages/HomePage";
import RepositoryItemPage from "../pages/RepositoryItemPage";
import SignInPage from "../pages/SignInPage";
import theme from "../theme";
import AppBar from "./AppBar";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route
          path="/repositories/:id"
          element={<RepositoryItemPage />}
          exact
        />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
