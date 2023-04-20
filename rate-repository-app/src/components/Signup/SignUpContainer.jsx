import { Formik } from "formik";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import theme from "../../theme";
import FormikTextInput from "../FormikTextInput";
import Text from "../Text";
import UniversalButton from "../UniversalButton";

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

const signInSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .max(30, "Username must be at most 30 characters long"),
  password: Yup.string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters long")
    .max(50, "Password must be at most 50 characters long"),
  passwordConfirmation: Yup.string()
    .required("Password confirmation is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignUpContainer = ({ errorMessage, ...props }) => {
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
            containerStyle={styles.container}
            testID="usernameInput"
          />
          <FormikTextInput
            name="password"
            placeholder="Password"
            secureTextEntry
            style={styles.textInput}
            containerStyle={styles.container}
            testID="passwordInput"
          />
          <FormikTextInput
            name="passwordConfirmation"
            placeholder="Password confirmation"
            secureTextEntry
            style={styles.textInput}
            containerStyle={styles.container}
            testID="passwordConfirmationInput"
          />
          <UniversalButton
            title="Sign up"
            onPress={handleSubmit}
            testID="submitButton"
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create(theme.form);

export default SignUpContainer;
