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

const theme = {
  colors,
  buttons,
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
