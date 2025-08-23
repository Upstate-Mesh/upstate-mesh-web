import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/similar-networks")({
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
        <Typography component="h1" variant="h4">
          Similar networks
        </Typography>
        <Typography component="h5" variant="h5">
          Other NY meshes
        </Typography>
        <Typography>
          Here are some nearby networks in New York which we're working towards
          bridging Upstate Mesh with
        </Typography>
        <ul>
          <li>
            <b>New York City: </b>
            <a href="https://nyme.sh/" target="_blank" title="nyme.sh">
              nyme.sh
            </a>
          </li>
          <li>
            <b>Hudson Valley: </b>
            <a
              href="https://hvmesh.net/"
              target="_blank"
              title="Hudson Valley Mesh"
            >
              Hudson Valley Mesh
            </a>
          </li>
          <li>
            <b>Sullivan County and the Southern Catskills Mountains: </b>
            <a href="https://kmesh.us/" target="_blank" title="Kaatskills Mesh">
              Kaatskills Mesh
            </a>
          </li>
        </ul>
      </Stack>
    </Container>
  );
}
