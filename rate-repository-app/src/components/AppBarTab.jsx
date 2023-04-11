import React from "react";
import Text from "./Text";
import { Link } from "react-router-native";

const AppBarTab = ({ text, uri }) => {
  return (
    <Link to={uri}>
      <Text style={{ color: "white" }} fontWeight="bold" fontSize="heading">
        {text}
      </Text>
    </Link>
  );
};

export default AppBarTab;
