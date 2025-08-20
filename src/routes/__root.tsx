import Stack from "@mui/material/Stack";
import { createRootRoute, Outlet } from "@tanstack/react-router";

import Footer from "../Footer";
import Header from "../Header";

export const Route = createRootRoute({
  component: () => (
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
      <Outlet />
      <Footer />
    </Stack>
  ),
});
