import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import upstateMeshLogo from "/um_logo_web.png";
import ButtonLink from "./ButtonLink";

export default function Header() {
  return (
    <Box
      py={2}
      px={6}
      sx={{
        backgroundColor: "#75eba5",
        boxShadow: "0 5px 5px rgba(0, 0, 0, .2)",
        width: "100%",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            lineHeight: 1,
            maxWidth: 300,
            width: "100%",
          }}
        >
          <a href="/" title="Home">
            <img
              src={upstateMeshLogo}
              alt="Upstate Mesh logo"
              width="100%"
              height="auto"
            />
          </a>
        </Box>
        <Box>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <ButtonLink to="/join">Join</ButtonLink>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
