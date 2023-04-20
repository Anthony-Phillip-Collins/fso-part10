import { Platform } from "react-native";

const colors = {
  textPrimary: "#24292e",
  textSecondary: "#586069",
  primary: "#0366d6",
  error: "#d73a4a",
  appBarBackground: "#24292e",
  mainBackground: "#e1e4e8",
};

const fontWeights = {
  normal: "400",
  bold: "700",
};

const fontSizes = {
  body: 14,
  subheading: 16,
  heading: 20,
};

const spacing = {
  small: 5,
  normal: 10,
  large: 20,
};

const buttons = {
  primary: {
    container: {
      backgroundColor: colors.primary,
      borderRadius: 5,
      padding: 20,
    },
    text: {
      color: "white",
      fontSize: fontSizes.subheading,
      textAlign: "center",
      fontWeight: fontWeights.bold,
    },
  },
};

buttons.primaryDanger = {
  ...buttons.primary,
  container: { ...buttons.primary.container, backgroundColor: colors.error },
};

const form = {
  container: {
    marginBottom: spacing.large,
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 12,
    borderRadius: 5,
    fontSize: fontSizes.body,
  },
  errorText: {
    marginBottom: spacing.large,
    color: colors.error,
    textAlign: "left",
    alignSelf: "flex-start",
  },
};

const containers = {
  main: {
    padding: spacing.large,
    backgroundColor: "white",
  },
};

const theme = {
  colors,
  buttons,
  spacing,
  form,
  containers,
  fontWeights,
  fontSizes,
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
};

export default theme;
