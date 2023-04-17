import { ApolloConsumer, useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { useAuthStorage } from "../contexts/AuthStorageContext";

const useSignOut = () => {
  const navigate = useNavigate();
  const client = useApolloClient();
  const authStorage = useAuthStorage();

  const signOut = async () => {
    try {
      await authStorage.removeAccessToken();
      client.resetStore();
      navigate("/");
    } catch (e) {
      throw new Error(e);
    }
  };

  return signOut;
};

export default useSignOut;
