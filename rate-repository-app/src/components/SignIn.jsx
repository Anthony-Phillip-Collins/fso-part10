import { Formik } from "formik";
import { Pressable, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";
import useSignIn from "../hooks/useSignIn";
import AuthStorage from "../utils/authStorage";

const initialValues = {
  username: "",
  password: "",
};

const signInSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.loginContainer}>
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
  const authStorage = new AuthStorage();

  return (
    <View style={styles.loginContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          try {
            const { data } = await signIn(values);
            await authStorage.setAccessToken(data.authenticate.accessToken);
          } catch (error) {
            console.log(error);
          }
        }}
        validationSchema={signInSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "50%",
    padding: 10,
    backgroundColor: "white",
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    width: "100%",
    fontSize: 20,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default SignIn;
