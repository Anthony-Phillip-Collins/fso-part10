import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import { AuthStorageProvider } from "./src/contexts/AuthStorageContext";
import ApolloClientProvider from "./src/contexts/ApolloClientProvider";
import { Provider as PaperProvider } from "react-native-paper";

import useFonts from "./src/hooks/useFonts";

const App = () => {
  const { fontsLoaded } = useFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeRouter>
      <AuthStorageProvider>
        <ApolloClientProvider>
          <PaperProvider>
            <Main />
          </PaperProvider>
        </ApolloClientProvider>
      </AuthStorageProvider>
    </NativeRouter>
  );
};

export default App;
