import React from "react";
import Button from "../button";
import Typography from "../typography";
import View from "../view";

export default {
  title: "Components/Subscription",
};

export const Subscription = () => (
  <View variant="warning">
    <Typography size="h1" color="dark" weight="bold">
      Subscription
    </Typography>
    <Button variant="primary" width="330px" weight="bold">
      Click here to subscribe
    </Button>
  </View>
);
