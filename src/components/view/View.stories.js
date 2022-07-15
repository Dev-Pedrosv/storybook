import React from "react";
import View from "./View";

export default {
  title: "Components/View",
  component: View,
};

export const Primary = () => (
  <View variant="primary" color="black">
    Primary
  </View>
);
export const Secondary = () => (
  <View variant="secondary" color="dark">
    Secondary
  </View>
);
export const Gray50 = () => <View variant="gray50">Gray50</View>;
