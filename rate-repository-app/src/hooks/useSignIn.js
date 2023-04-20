import { useApolloClient, useMutation } from "@apollo/client";
import { useAuthStorage } from "../contexts/AuthStorageContext";
import { AUTHENTICATE } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: { credentials: { username, password } },
      });
      await authStorage.setAccessToken(data.authenticate.accessToken);
      apolloClient.resetStore();
    } catch (e) {
      throw new Error(e);
    }
  };

  return { signIn, result };
};

export default useSignIn;
