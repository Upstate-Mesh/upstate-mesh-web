import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createFileRoute } from "@tanstack/react-router";

import Article from "../../../Article";

const PAGE_TITLE = "Articles - Upstate Mesh";

export const Route = createFileRoute("/__interiorLayout/articles/")({
  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content:
          "Articles about Meshtastic and mesh communication technologies.",
      },
    ],
    title: PAGE_TITLE,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Typography component="h1" variant="h4">
        Articles
      </Typography>
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <Grid container spacing={2}>
          <Article
            title="Build a 90's hacker pager-style T114 mesh node"
            thumbnail="/pager_completed.jpg"
            description="Use modern tech to build a Meshtastic text messaging node that goes wherever you go, complete with a 90's hacker cyberpunk aesthetic. Trust your technolust."
            href="/articles/build-a-90s-hacker-pager-style-t114-mesh-node"
          />
        </Grid>
      </Box>
    </>
  );
}
