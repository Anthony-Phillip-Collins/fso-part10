import { useState } from "react";
import { StyleSheet, View } from "react-native";
import useSignIn from "../../hooks/useSignIn";
import SignInContainer from "./SignInContainer";

const SignIn = () => {
  const { signIn } = useSignIn();
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <View style={styles.loginContainer}>
      <SignInContainer
        onSubmit={async (values) => {
          setErrorMessage("");
          try {
            await signIn(values);
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
  loginContainer: {
    padding: 20,
    backgroundColor: "white",
  },
});

export default SignIn;
