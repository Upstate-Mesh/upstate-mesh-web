import Typography from "@mui/material/Typography";
import { createFileRoute, Link } from "@tanstack/react-router";

import { DISCORD_URL } from "../../site";

const PAGE_TITLE = "Bot Guidelines - Upstate Mesh";

export const Route = createFileRoute("/__interiorLayout/bot-guidelines")({
  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content:
          "Guidelines for bots on Upstate Mesh. Keep channels clear, stay local, reduce congestion, and share sources.",
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
        Bot guidelines
      </Typography>
      <Typography>
        Bots are welcome on Upstate Mesh. Weather stations, games and utilities
        all add value. So that humans and bots can share the network, we've put
        together some community guidelines. In a decentralized network these
        can't be enforced, but we respectfully ask that you follow them, or talk
        alternatives over with the community before building around them.
      </Typography>
      <Typography component="h5" variant="h5">
        TL;DR
      </Typography>
      <ul>
        <li>
          <b>Most channels are for humans.</b> Keep bots in a dedicated channel
          such as <code>#bot</code>.
        </li>
        <li>
          <b>Long interactions belong in DMs</b> rather than channels.
        </li>
        <li>
          <b>Keep it local:</b> scope bot traffic to <code>alb</code>.
        </li>
        <li>
          <b>Avoid internet dependencies</b>, or make sure there's a local
          fallback.
        </li>
        <li>
          <b>Battery backup with solar</b> for anything useful when the grid may
          be down.
        </li>
        <li>
          <b>Open source or source-available</b> with documentation preferred.
        </li>
      </ul>
      <Typography component="h6" variant="h6">
        Most channels are for humans
      </Typography>
      <Typography>
        We believe the best experience on the network is talking to other
        humans. That doesn't mean bots aren't valuable, but we prefer to keep
        bot interactions in dedicated channels. That way people choose whether
        they're interacting with your bot, rather than having it forced on them.
      </Typography>
      <Typography component="h6" variant="h6">
        Long interactions belong in DMs
      </Typography>
      <Typography>
        If your bot uses back-and-forth exchanges with a person, offer that over
        DM. DMs follow learned paths instead of flooding, which reduces
        congestion, and it keeps channels free of messages only one person cares
        about.
      </Typography>
      <Typography component="h6" variant="h6">
        Keep it local
      </Typography>
      <Typography>
        Every channel message floods. Scope your bot's channel traffic to{" "}
        <code>alb</code> so it doesn't use airtime across the whole region, and
        never use <code>east</code> or <code>northeast</code> for bot traffic.
        See{" "}
        <Link to="/regions" title="Regions">
          Regions
        </Link>{" "}
        for how scopes work.
      </Typography>
      <Typography component="h6" variant="h6">
        Avoid internet dependencies
      </Typography>
      <Typography>
        We're building a network that doesn't depend on existing infrastructure.
        A bot that queries a weather service or a cloud AI model is cool, but
        whenever possible prefer local functionality: your own environmental
        sensors, weather data received with an RTL-SDR, or a local LLM.{" "}
        <i>Always</i> have a fallback for when the internet is unavailable.
      </Typography>
      <Typography component="h6" variant="h6">
        Battery backup with solar
      </Typography>
      <Typography>
        If your bot provides a service that could be useful when the power grid
        or internet is out, consider running it on a computer powered by a
        backup battery connected to solar.
      </Typography>
      <Typography component="h6" variant="h6">
        Open source or source-available
      </Typography>
      <Typography>
        We're an open-source community. Given the privacy-centric nature of the
        mesh, we <b>strongly</b> recommend you publish your bot's source. That
        lets people audit it for security and privacy issues.
      </Typography>
      <Typography component="h6" variant="h6">
        Questions?
      </Typography>
      <Typography>
        Not sure whether your bot fits? Ask in our{" "}
        <a href={DISCORD_URL} target="_blank" title="Discord server">
          Discord
        </a>
        .
      </Typography>
      <Typography variant="caption">
        Adapted with thanks from the{" "}
        <a
          href="https://www.austinmesh.org/join/bot-guidelines/"
          target="_blank"
          title="Austin Mesh bot guidelines"
        >
          Austin Mesh bot guidelines
        </a>
        , licensed CC BY-SA 4.0.
      </Typography>
    </>
  );
}
