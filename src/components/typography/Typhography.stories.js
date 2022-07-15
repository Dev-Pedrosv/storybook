import React from "react";
import Typography from "./";

export default {
  title: "Components/Typography",
  component: Typography,
};

export const TypographyTitle = () => (
  <Typography size="h1">TypographyH1</Typography>
);
export const TypographySubtitle = () => (
  <Typography size="h2">TypographyH2</Typography>
);
export const Normal = () => <Typography size="normal">Normal</Typography>;
export const RegularMobile = () => (
  <Typography size="regularMobile">RegularMobile</Typography>
);
