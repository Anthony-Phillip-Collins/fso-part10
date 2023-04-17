import { ApolloProvider } from "@apollo/client";
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import useFonts from "./src/hooks/useFonts";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/contexts/AuthStorageContext";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {
  const { fontsLoaded } = useFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <Main />
        </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
  );
}
