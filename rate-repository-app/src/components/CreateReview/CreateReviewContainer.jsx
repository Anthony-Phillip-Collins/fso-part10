import { Formik } from "formik";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import theme from "../../theme";
import FormikTextInput from "../FormikTextInput";
import Text from "../Text";
import UniversalButton from "../UniversalButton";

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const signInSchema = Yup.object().shape({
  ownerName: Yup.string().required("Repository owner name is required"),
  repositoryName: Yup.string().required("Repository name is required"),
  rating: Yup.number().min(0).max(100).required("Rating is required"),
});

const CreateReviewContainer = ({ errorMessage, ...props }) => {
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
            name="ownerName"
            placeholder="Repository owner name"
            style={styles.textInput}
            containerStyle={styles.container}
            testID="ownerNameInput"
          />

          <FormikTextInput
            name="repositoryName"
            placeholder="Repository name"
            style={styles.textInput}
            containerStyle={styles.container}
            testID="repositoryNameInput"
          />

          <FormikTextInput
            name="rating"
            placeholder="Rating between 0 and 100"
            style={styles.textInput}
            containerStyle={styles.container}
            testID="ratingInput"
          />

          <FormikTextInput
            multiline={true}
            textAlignVertical="top"
            name="text"
            placeholder="Review"
            style={{ ...styles.textInput, minHeight: 80 }}
            containerStyle={styles.container}
            testID="textInput"
          />

          <UniversalButton
            title="Create a review"
            onPress={handleSubmit}
            testID="submitButton"
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create(theme.form);

export default CreateReviewContainer;
