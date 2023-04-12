import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import useFonts from "./src/hooks/useFonts";
import createApolloClient from "./src/utils/apolloClient";
import { ApolloProvider } from "@apollo/client";

export default function App() {
  const { fontsLoaded } = useFonts();
  const apolloClient = createApolloClient();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ApolloProvider client={apolloClient}>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </ApolloProvider>
  );
}
