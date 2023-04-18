import React from "react";
import { Pressable } from "react-native";
import Text from "./Text";

const AppBarTab = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={{ color: "white" }} fontWeight="bold" fontSize="subHeading">
        {text}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
