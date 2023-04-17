import { Formik } from "formik";
import { Pressable, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import useSignIn from "../hooks/useSignIn";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import { useState } from "react";

const initialValues = {
  username: "",
  password: "",
};

const signInSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const SignInForm = ({ onSubmit, errorMessage }) => {
  return (
    <View>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

      <FormikTextInput
        name="username"
        placeholder="Username"
        style={styles.textInput}
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry
        style={styles.textInput}
      />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText} fontWeight="bold">
          {"Sign in"}
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const { signIn } = useSignIn();
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <View style={styles.loginContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          setErrorMessage("");
          try {
            await signIn(values);
          } catch (e) {
            console.log(e);
            setErrorMessage("Invalid username or password");
          }
        }}
        validationSchema={signInSchema}
      >
        {({ handleSubmit }) => (
          <SignInForm onSubmit={handleSubmit} errorMessage={errorMessage} />
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    padding: 20,
    backgroundColor: "white",
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    width: "100%",
    fontSize: 20,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 10,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  errorText: {
    marginBottom: 20,
    color: theme.colors.error,
    textAlign: "left",
    alignSelf: "flex-start",
  },
});

export default SignIn;
