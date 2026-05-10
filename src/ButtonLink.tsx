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
  <Button
    ref={ref}
    component="a"
    variant="outlined"
    color="primary"
    size="small"
    sx={{
      px: 2.5,
      py: 0.75,
      backgroundColor: "#3a3c4d",
      color: "#ffffff",
      border: "1px solid #3a3c4d",
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: "#222222",
        borderColor: "#222222",
        color: "#ffffff",
      },
    }}
    {...props}
  />
));

const CreatedButtonLinkComponent = createLink(MUIButtonLinkComponent);

export default function ButtonLink(props: MUIButtonLinkProps) {
  return <CreatedButtonLinkComponent preload={"intent"} {...props} />;
}
