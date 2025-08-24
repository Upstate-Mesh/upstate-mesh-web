import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <Box
      px={2}
      py={4}
      sx={{ backgroundColor: "#3a3c4d", flexGrow: 1, width: "100%" }}
    >
      <Container maxWidth="md">
        <Stack
          direction="column"
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SocialIcons />
          <Typography variant="caption">
            Our website content is licensed under the Creative Commons
            Attribution-ShareAlike 4.0 International License. Portions of our
            content have been adopted and adapted from the excellent folks at{" "}
            <a
              href="https://www.austinmesh.org/"
              target="_blank"
              title="Austin Mesh"
            >
              Austin Mesh
            </a>
            . Albany skyline photo courtesy of{" "}
            <a href="https://unsplash.com/@wenhao_ruan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Wenhao Ruan
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/a-city-skyline-at-night-EPwcjhF5i6U?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </Typography>
          <Typography variant="caption">
            Upstate Mesh is not affilated with{" "}
            <a
              href="https://meshtastic.org/"
              target="_blank"
              title="Meshtastic"
            >
              Meshtastic®
            </a>
            , nor endorsed by{" "}
            <a
              href="https://meshtastic.org/docs/legal/licensing-and-trademark/"
              title="Meshtastic LLC"
              target="_blank"
            >
              Meshtastic LLC
            </a>
            .{" "}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
