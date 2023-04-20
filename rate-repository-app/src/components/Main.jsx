import { StyleSheet, View } from "react-native";
import { Navigate, Route, Routes } from "react-router-native";
import HomePage from "../pages/HomePage";
import RepositoryItemPage from "../pages/RepositoryItemPage";
import SignInPage from "../pages/SignInPage";
import theme from "../theme";
import AppBar from "./AppBar";
import CreateReviewPage from "../pages/CreateReviewPage";
import MyReviewsPage from "../pages/MyReviewsPage";
import SignUpPage from "../pages/SignUpPage";
import { StatusBar } from "expo-status-bar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
        <Route path="/create-review" element={<CreateReviewPage />} />
        <Route path="/my-reviews" element={<MyReviewsPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <StatusBar style="light" />
    </View>
  );
};

export default Main;
