import React from "react";
import Button from "./";

export default {
  title: "Components/Button",
  component: Button,
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => (
  <Button variant="secondary" color="black">
    Secondary
  </Button>
);
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;
