import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import upstateMeshLogo from "/um_logo_web.png";
import Nav from "./Nav";

export default function Header() {
  return (
    <Box
      sx={{
        backgroundColor: "#75eba5",
        borderBottom: "2px solid rgb(0, 0, 0, .2)",
        boxShadow: "0 10px 10px rgba(0, 0, 0, .3)",
        p: 2,
        width: "100%",
        zIndex: 999,
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
          <Nav />
        </Box>
      </Stack>
    </Box>
  );
}
