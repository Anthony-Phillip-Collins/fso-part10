import { useCallback } from "react";
import { Alert, Linking, Pressable } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";
import theme from "../theme";

const UniversalButton = ({
  url,
  to,
  onPress,
  children,
  title,
  type = "primary",
  ...props
}) => {
  if (!children && !title) {
    throw new Error("UniversalButton must have either children or title prop.");
  }

  const styles = { container: {}, text: {} };

  // If the type is a key in the theme.buttons object, use the styles from there
  if (Object.keys(theme.buttons).includes(type)) {
    styles.container = theme.buttons[type].container;
    styles.text = theme.buttons[type].text;
  }

  // openUrl is a callback that opens the url in the browser
  const openUrl = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  // merge styles
  const containerStyle = { ...styles.container, ...props.style };
  const textStyle = { ...styles.text, ...props.textStyle };

  // If the button has children, render them as is otherwise render a Text component
  const body = children ? children : <Text style={textStyle}>{title}</Text>;

  // If the button has a to prop, render a Link component
  if (to) {
    return (
      <Link to={to} {...props} style={containerStyle}>
        {body}
      </Link>
    );
  }
  // If the button has a url prop or an onPress prop, render a Pressable component
  else {
    const handlePress = onPress || openUrl || (() => {});
    return (
      <Pressable onPress={handlePress} {...props} style={containerStyle}>
        {body}
      </Pressable>
    );
  }
};

export default UniversalButton;
