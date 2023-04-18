import { useField } from "formik";
import { StyleSheet, View } from "react-native";

import theme from "../theme";
import Text from "./Text";
import TextInput from "./TextInput";

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.error,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  const otherProps = { ...props };

  if (showError) {
    otherProps.style = { ...props.style, borderColor: theme.colors.error };
  }

  return (
    <View {...props.containerStyle}>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...otherProps}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default FormikTextInput;
