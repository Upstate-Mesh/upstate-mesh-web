import React from "react";

import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import { createLink } from "@tanstack/react-router";

interface MUIButtonLinkProps extends ButtonProps<"a"> {
  to: string;
}

const MUIButtonLinkComponent = React.forwardRef<
  HTMLAnchorElement,
  MUIButtonLinkProps
>((props, ref) => (
  <Button ref={ref} component="a" color="darkButton" {...props} />
));

const CreatedButtonLinkComponent = createLink(MUIButtonLinkComponent);

export default function ButtonLink(props: MUIButtonLinkProps) {
  return <CreatedButtonLinkComponent preload={"intent"} {...props} />;
}
