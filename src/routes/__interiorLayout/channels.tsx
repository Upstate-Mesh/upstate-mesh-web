import Typography from "@mui/material/Typography";
import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { DISCORD_URL, HEALTH_CHECK_CHANNEL } from "../../site";

const PAGE_TITLE = "Channels - Upstate Mesh";

export const Route = createFileRoute("/__interiorLayout/channels")({
  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content:
          "Hashtag channels used on Upstate Mesh and neighboring meshes: local chat, dispatches, weather, ADS-B, ham radio, ARES/RACES and more.",
      },
    ],
    title: PAGE_TITLE,
  }),
  component: RouteComponent,
});

interface Channel {
  name: string;
  description: ReactNode;
}

const localChannels: ReadonlyArray<Channel> = [
  {
    name: "#cdmesh",
    description: "Discussion for the Capital District and the wider area.",
  },
  {
    name: "#testing",
    description: (
      <>
        Local testing. Send <code>ping</code> and the txtme.sh bot will reply so
        you know you're reaching the mesh.
      </>
    ),
  },
  {
    name: "#test",
    description: (
      <>
        Wider-area testing. For local tests, set your region scope to{" "}
        <code>alb</code> first.
      </>
    ),
  },
  {
    name: HEALTH_CHECK_CHANNEL,
    description: (
      <>
        Health check codes. See{" "}
        <Link to="/live" title="Live tools">
          Live
        </Link>{" "}
        for how to run a check.
      </>
    ),
  },
  {
    name: "#weather",
    description: (
      <>
        Local weather. Send <code>wx</code> followed by your ZIP code, like{" "}
        <code>wx 12180</code>, for a local report.
      </>
    ),
  },
  {
    name: "#dispatches",
    description: "Fire department and EMS dispatches from a wide area.",
  },
  {
    name: "#adsb",
    description: "ADS-B aircraft traffic.",
  },
  {
    name: "#bot",
    description: (
      <>
        For bots. See the{" "}
        <Link to="/bot-guidelines" title="Bot guidelines">
          bot guidelines
        </Link>
        .
      </>
    ),
  },
];

const hamChannels: ReadonlyArray<Channel> = [
  {
    name: "#ham",
    description: "Amateur radio chat.",
  },
  {
    name: "#hamradio",
    description: "Amateur radio chat.",
  },
  {
    name: "#ares-races-eny",
    description: "ARES and RACES in Eastern New York.",
  },
];

const otherChannels: ReadonlyArray<Channel> = [
  { name: "#ct", description: "Connecticut" },
  { name: "#hud", description: "Hudson Valley" },
  { name: "#hv", description: "Hudson Valley" },
  { name: "#li", description: "Long Island" },
  { name: "#ma-hc", description: "Massachusetts health check" },
  { name: "#ma-mesh", description: "Massachusetts" },
  { name: "#nh-mesh", description: "New Hampshire" },
  { name: "#nyc", description: "New York City" },
  { name: "#politics", description: "Politics" },
  { name: "#vtmesh", description: "Vermont" },
  { name: "#wmass", description: "Western Massachusetts" },
];

function ChannelList({ channels }: { channels: ReadonlyArray<Channel> }) {
  return (
    <ul>
      {channels.map((channel) => (
        <li key={channel.name}>
          <code>{channel.name}</code>: {channel.description}
        </li>
      ))}
    </ul>
  );
}

function RouteComponent() {
  return (
    <>
      <Typography component="h1" variant="h4">
        Channels
      </Typography>
      <Typography>
        Besides the Public channel, conversations on the mesh happen in hashtag
        channels. To join one, add a hashtag channel in the MeshCore app with
        the exact name below. Anyone who adds the same name can read it, so
        don't post anything private. See{" "}
        <Link to="/learn" title="Learn">
          Learn
        </Link>{" "}
        for how channels work.
      </Typography>
      <Typography>
        Every channel message floods across the mesh. Set your region scope to{" "}
        <code>alb</code> to keep local conversations local. See{" "}
        <Link to="/regions" title="Regions">
          Regions
        </Link>
        .
      </Typography>
      <Typography component="h5" variant="h5">
        Local channels
      </Typography>
      <ChannelList channels={localChannels} />
      <Typography component="h5" variant="h5">
        Ham radio and emergency
      </Typography>
      <ChannelList channels={hamChannels} />
      <Typography component="h5" variant="h5">
        Outside our area
      </Typography>
      <Typography>
        Channels used by neighboring meshes, handy if you travel or live near
        the edge of our area.
      </Typography>
      <ChannelList channels={otherChannels} />
      <Typography>
        Know a channel we're missing? Let us know in our{" "}
        <a href={DISCORD_URL} target="_blank" title="Discord server">
          Discord
        </a>
        .
      </Typography>
    </>
  );
}
