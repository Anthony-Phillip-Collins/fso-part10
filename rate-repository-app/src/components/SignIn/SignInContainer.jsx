import { Pressable, StyleSheet, View } from "react-native";
import Text from "../Text";
import FormikTextInput from "../FormikTextInput";
import theme from "../../theme";
import { Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  username: "",
  password: "",
};

const signInSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const SignInContainer = ({ errorMessage, ...props }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      {...props}
    >
      {({ handleSubmit }) => (
        <View>
          {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

          <FormikTextInput
            name="username"
            placeholder="Username"
            style={styles.textInput}
            testID="usernameInput"
          />
          <FormikTextInput
            name="password"
            placeholder="Password"
            secureTextEntry
            style={styles.textInput}
            testID="passwordInput"
          />
          <Pressable
            style={styles.button}
            onPress={handleSubmit}
            testID="submitButton"
          >
            <Text style={styles.buttonText} fontWeight="bold">
              {"Sign in"}
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
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

export default SignInContainer;
