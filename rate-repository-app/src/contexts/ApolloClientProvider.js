import { ApolloProvider } from "@apollo/client";
import createApolloClient from "../utils/apolloClient";
import { useAuthStorage } from "./AuthStorageContext";

const ApolloClientProvider = ({ children }) => {
  const authStorage = useAuthStorage();
  const apolloClient = createApolloClient(authStorage);
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
