import { useState } from "react";
import { StyleSheet, View } from "react-native";
import theme from "../../theme";
import SignUpContainer from "./SignUpContainer";
import useSignUp from "../../hooks/useSignUp";
import { useNavigate } from "react-router-native";

const SignUp = () => {
  const { signUp } = useSignUp();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  return (
    <View style={styles.loginContainer}>
      <SignUpContainer
        onSubmit={async (values) => {
          setErrorMessage("");
          try {
            await signUp(values);
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
  loginContainer: {
    padding: theme.spacing.large,
    backgroundColor: "white",
  },
});

export default SignUp;
