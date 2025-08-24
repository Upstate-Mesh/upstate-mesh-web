import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/__interiorLayout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container maxWidth="md">
      <Stack
        direction="column"
        py={3}
        spacing={3}
        sx={{
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Outlet />
      </Stack>
    </Container>
  );
}
