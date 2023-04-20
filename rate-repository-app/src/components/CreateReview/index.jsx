import { StyleSheet, View } from "react-native";
import CreateReviewContainer from "./CreateReviewContainer";
import theme from "../../theme";
import { useState } from "react";
import { CREATE_REVIEW } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";

const CreateReview = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [createReview] = useMutation(CREATE_REVIEW, {
    onError: (e) => {
      console.log(e);
      setErrorMessage(e.graphQLErrors[0].message);
    },
  });
  const navigate = useNavigate();

  return (
    <View style={styles.loginContainer}>
      <CreateReviewContainer
        onSubmit={async (values) => {
          setErrorMessage("");
          try {
            const review = { ...values, rating: parseInt(values?.rating) };
            const { errors } = await createReview({
              variables: { review },
            });

            if (errors) {
              throw new Error(errors.message);
            }

            navigate("/my-reviews");
          } catch (e) {
            console.log(e);
            setErrorMessage(e.message);
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

export default CreateReview;
