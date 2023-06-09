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
          <UniversalButton
            title="Sign in"
            onPress={handleSubmit}
            testID="submitButton"
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create(theme.form);

export default SignInContainer;
