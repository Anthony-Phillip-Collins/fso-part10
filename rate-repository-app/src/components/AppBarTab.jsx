import React from "react";
import { Pressable } from "react-native";
import Text from "./Text";

const AppBarTab = ({ text, onPress }) => {
  // add Pressable to make it clickable
  return (
    <Pressable onPress={onPress}>
      <Text style={{ color: "white" }} fontWeight="bold" fontSize="heading">
        {text}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
