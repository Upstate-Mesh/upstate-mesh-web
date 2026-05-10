import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {
  createRootRoute,
  HeadContent,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";

import Footer from "../Footer";
import Header from "../Header";

const PAGE_TITLE = "Upstate Mesh";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content: "A meshtastic user group for the Capital District and beyond!",
      },
    ],
    title: PAGE_TITLE,
  }),
  component: () => (
    <>
      <HeadContent />
      <ScrollRestoration />
      <Stack
        direction="column"
        spacing={0}
        sx={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          height: "100%",
        }}
      >
        <Header />
        <Box sx={{ pt: "80px", width: "100%" }}>
          <Outlet />
        </Box>
        <Footer />
      </Stack>
    </>
  ),
});
