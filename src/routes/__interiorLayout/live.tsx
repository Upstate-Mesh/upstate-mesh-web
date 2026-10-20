import { ReactNode } from "react";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createFileRoute, Link } from "@tanstack/react-router";

import {
  CORESCOPE_URL,
  DISCORD_URL,
  HEALTH_CHECK_CHANNEL,
  HEALTH_CHECK_URL,
  LIVE_MAP_URL,
} from "../../site";

const PAGE_TITLE = "Live - Upstate Mesh";

export const Route = createFileRoute("/__interiorLayout/live")({
  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content:
          "Watch Capital District MeshCore traffic live, map the network, and test how far your messages reach.",
      },
    ],
    title: PAGE_TITLE,
  }),
  component: RouteComponent,
});

interface Tool {
  name: string;
  url: string;
  tagline: string;
  description: ReactNode;
  useItFor: string[];
}

const tools: ReadonlyArray<Tool> = [
  {
    name: "Health Check",
    url: HEALTH_CHECK_URL,
    tagline: "How far does my message reach?",
    description: (
      <>
        Generate a short code, send it to <code>{HEALTH_CHECK_CHANNEL}</code>{" "}
        from your radio, and watch which observers hear it, with the path it
        took and signal strength at each one.
      </>
    ),
    useItFor: [
      "Testing a new node or antenna",
      "Comparing locations before mounting a repeater",
      "Checking you can reach the mesh from home",
    ],
  },
  {
    name: "Live Map",
    url: LIVE_MAP_URL,
    tagline: "What's happening on the mesh right now?",
    description: (
      <>
        Nodes and message routes animated on a map as they happen, with 24 hours
        of route history, a heat map, and line-of-sight and propagation tools.
      </>
    ),
    useItFor: [
      "Seeing which repeaters carry traffic",
      "Finding coverage gaps",
      "Planning line of sight to a new site",
    ],
  },
  {
    name: "CoreScope",
    url: CORESCOPE_URL,
    tagline: "Every packet, decoded.",
    description: (
      <>
        A packet analyzer for the network: a live packet feed, node and observer
        health, channel messages, and detailed analytics for each node.
      </>
    ),
    useItFor: [
      "Troubleshooting a node that isn't being heard",
      "Following one packet across observers",
      "Checking repeater and observer health",
    ],
  },
];

function RouteComponent() {
  return (
    <>
      <Typography component="h1" variant="h4">
        Live
      </Typography>
      <Typography>
        See the Capital District mesh as it happens. These tools are fed by{" "}
        <b>observers</b>, radios around the region that report every packet they
        hear. They're useful for testing your own setup, finding coverage gaps,
        and watching the network grow.
      </Typography>
      <Grid container spacing={2} sx={{ width: "100%" }}>
        {tools.map((tool) => (
          <Grid key={tool.name} size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography component="h2" variant="h6">
                  {tool.name}
                </Typography>
                <Typography variant="caption" component="div" sx={{ mb: 1 }}>
                  {tool.tagline}
                </Typography>
                <Typography>{tool.description}</Typography>
                <ul>
                  {tool.useItFor.map((use) => (
                    <li key={use}>{use}</li>
                  ))}
                </ul>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                  href={tool.url}
                  target="_blank"
                  variant="contained"
                  endIcon={<OpenInNewIcon />}
                  sx={{ color: "#111111" }}
                >
                  Open {tool.name}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography component="h5" variant="h5">
        Run a health check
      </Typography>
      <ol>
        <li>
          In the MeshCore app, add the hashtag channel{" "}
          <code>{HEALTH_CHECK_CHANNEL}</code>.
        </li>
        <li>
          Open the{" "}
          <a href={HEALTH_CHECK_URL} target="_blank" title="Health Check">
            Health Check
          </a>{" "}
          and generate a code.
        </li>
        <li>
          Send the code as a message in <code>{HEALTH_CHECK_CHANNEL}</code>.
        </li>
        <li>
          Watch the results fill in. Each observer that heard your message shows
          up with the path it took and its signal strength. You get a share link
          you can post in Discord.
        </li>
      </ol>
      <Typography sx={{ borderLeft: "3px solid #75eba5", pl: 2 }}>
        Few or no observers? That's useful to know too. It usually means you
        need more height, a better antenna, or a repeater closer to you. Ask in{" "}
        <a href={DISCORD_URL} target="_blank" title="Discord server">
          Discord
        </a>{" "}
        and someone can help you read the results.
      </Typography>

      <Typography component="h5" variant="h5">
        Where the data comes from
      </Typography>
      <Typography>
        Upstate Mesh runs its own observer, UM-Observer-Westmere, and these
        tools also include observers shared through our neighbors at{" "}
        <a
          href="https://cdme.sh/"
          target="_blank"
          title="Capital District Mesh"
        >
          Capital District Mesh
        </a>
        . The more observers there are, the more complete the picture.{" "}
        <Link to="/mqtt" title="Become an observer">
          Become an observer
        </Link>{" "}
        to help fill in your corner of the map.
      </Typography>
      <Typography component="h5" variant="h5">
        A note on privacy
      </Typography>
      <Typography>
        These tools show what anyone with a radio could hear. Messages on the
        Public channel and <code>#hashtag</code> channels appear in CoreScope as
        readable text, along with node names and any locations nodes choose to
        share. Direct messages and private channels stay encrypted.
      </Typography>
    </>
  );
}
