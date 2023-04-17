import { useApolloClient } from "@apollo/client";
import { useContext } from "react";
import { useNavigate } from "react-router-native";
import AuthStorageContext from "../contexts/AuthStorageContext";

const useSignOut = () => {
  const navigate = useNavigate();
  const client = useApolloClient();
  const authStorage = useContext(AuthStorageContext);

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
