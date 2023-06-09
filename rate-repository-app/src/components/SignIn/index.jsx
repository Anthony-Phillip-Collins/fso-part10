import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";
import useSignIn from "../../hooks/useSignIn";
import SignInContainer from "./SignInContainer";
import theme from "../../theme";

const SignIn = () => {
  const { signIn } = useSignIn();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  return (
    <View style={styles.loginContainer}>
      <SignInContainer
        onSubmit={async (values) => {
          setErrorMessage("");
          try {
            await signIn(values);
            navigate("/");
          } catch (e) {
            console.log(e);
            setErrorMessage("Invalid username or password");
          }
        }}
        errorMessage={errorMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: theme.containers.main,
});

export default SignIn;
