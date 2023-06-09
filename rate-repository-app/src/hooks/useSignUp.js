import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";
import useSignIn from "./useSignIn";

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);
  const { signIn } = useSignIn();

  const signUp = async ({ username, password }) => {
    try {
      const { errors } = await mutate({
        variables: { user: { username, password } },
      });

      if (errors) {
        throw new Error(errors.message);
      }

      await signIn({ username, password });
    } catch (e) {
      throw new Error(e);
    }
  };

  return { signUp, result };
};

export default useSignUp;
