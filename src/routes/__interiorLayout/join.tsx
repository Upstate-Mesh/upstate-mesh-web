import Typography from "@mui/material/Typography";
import { createFileRoute } from "@tanstack/react-router";

const PAGE_TITLE = "Join - Upstate Mesh";

export const Route = createFileRoute("/__interiorLayout/join")({
  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content: "How to configure your node and join Upstate mesh.",
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
        Join
      </Typography>
      <Typography component="h5" variant="h5">
        Join the group
      </Typography>
      <Typography>
        Outside of the mesh network itself, we're most active in our{" "}
        <a
          href="https://discord.gg/FvajRmXEsb"
          target="_blank"
          title="Discord server"
        >
          Discord server
        </a>
        , which you're certainly welcome to join even if you do not have a radio
        or node on the mesh. You can also follow us on{" "}
        <a
          href="https://bsky.app/profile/upstatemesh.bsky.social"
          target="_blank"
          title="Bluesky"
        >
          Bluesky
        </a>{" "}
        and{" "}
        <a
          href="https://www.instagram.com/upstatemesh/"
          target="_blank"
          title="Instagram"
        >
          Instagram
        </a>
        .
      </Typography>
      <Typography component="h5" variant="h5">
        Connect to the network
      </Typography>
      <ol>
        <li>
          Get a Meshtastic Radio.
          <ul>
            <li>
              You can build one yourself for about $35. The official Meshtastic
              page keeps a current list of{" "}
              <a
                href="https://meshtastic.org/docs/hardware/devices/"
                target="_blank"
                title="supported hardware"
              >
                supported hardware.
              </a>
            </li>
            <li>
              The LILYGO T-Echo is a good first meshtastic radio, as it costs
              around $70 and is ready to go out of the box (besides having to
              flash the firmware).
            </li>
            <li>
              You can also buy a pre-built battery-powered radio for between
              $50-$100 on Etsy or eBay - these usually have 3D printed cases.
            </li>
            <li>
              If you can afford it, and have a place to mount it outside, we
              recommend you buy a pre-built solar-powered node for between $100
              and $200 on Etsy and mount it as high off the ground as you can.
            </li>
            <li>
              Alternatively you can{" "}
              <a
                href="https://www.rfindex.com/meshtastic/devices?categories=DIY"
                target="_blank"
                title="build your own"
              >
                build your own
              </a>
              .
            </li>
          </ul>
        </li>
        <li>
          Download the{" "}
          <a href="https://meshtastic.org/docs/software" title="Meshtastic App">
            Meshtastic App
          </a>{" "}
          on your iPhone or Android.
        </li>
        <li>Pair your radio to your phone with Bluetooth.</li>
        <li>Open the Meshtastic app and say hi!</li>
      </ol>
      <Typography component="h5" variant="h5">
        Best Practices
      </Typography>
      <Typography component="h6" variant="h6">
        TL;DR;
      </Typography>
      <ul>
        <li>
          <b>MQTT:</b> Disabled;Ignore;
        </li>
        <li>
          <b>Role:</b> Client (NOT Router & Client)
        </li>
        <li>
          <b>Hop Count:</b> 3
        </li>
        <li>
          <b>Broadcast intervals(info, position, telemetry):</b> 3 hours
        </li>
      </ul>
      <Typography>
        This is a community driven project, following these guidelines will
        ensure the best experience for everyone as we continue to grow. (credit
        @Nick, @AdvJosh (TEX#) - KJ5FZD, @edsai KI5OSB)
      </Typography>
      <Typography component="h6" variant="h6">
        MQTT
      </Typography>
      <Typography>
        The vast majority of us have chosen not to use MQTT with Meshtastic in
        the spirit of building out a stronger RF based mesh network, instead of
        relying on the internet to patch coverage gaps. We also recommend
        setting your nodes to ignore any MQTT traffic.
      </Typography>
      <Typography>
        If you use a busy MQTT server/topic it can quickly overwhelm your node
        and flood the entire network with traffic rendering local communications
        difficult or impossible. Additionally, using MQTT can give us a false
        sense of how robust our local RF network is, make it difficult to
        optimize, diagnose issues and plan future network expansion. Our goal is
        to build a robust, reliable off grid network that can be utilized by our
        community during internet/power outages.
      </Typography>
      <Typography component="h6" variant="h6">
        Device Role
      </Typography>
      <Typography>
        It may be tempting to set your device to ‘client/router’ or one of the
        other infrastructure modes, however from our extensive testing we’ve
        seen the best results for the end user, and the network as a whole using
        the ‘client’ role. Meshtastic does not currently have any intelligent
        routing built into the firmware. Nodes are set to rebroadcast any
        message they receive that they have not heard rebroadcast from another
        node at a random time interval. The ‘client/router’ and other
        infrastructure role takes that random interval and subtracts another
        random interval ensuring that they rebroadcast first.
      </Typography>
      <Typography>
        While this may sound good on paper, due to constantly changing
        environmental variables you may be inadvertently creating dead ends in
        the network, bypassing intended recipients, and closing off redundant
        routing paths. We highly recommend starting with a ‘client’ role even
        for well placed nodes.
      </Typography>
      <Typography>
        For device connected nodes (the ones you're sending messages from) that
        are not contributing to the network we recommend a device role of
        ‘client mute’ to reduce overall network airtime. An example of this
        would be a device connected node in your home that goes through a relay
        node on your roof.
      </Typography>
      <Typography component="h6" variant="h6">
        Hop Count
      </Typography>
      <Typography>
        We recommend starting with a hop count of 3, and always using the
        minimum number of hops needed to reach your destination. If you are
        running a device connected node in your home and a relay node that your
        client always goes through, a hop count of 4 is advised. If you are on
        the edge of the network and are not achieving results with the above, 5
        hops may be useful however we recommend ensuring that you've done all
        you can with regard to optimizing your node hardware and placement
        first, if these are not taken care of additional hops will not yield
        greater distance and will degrade the performance of the wider network.
      </Typography>
      <Typography component="h6" variant="h6">
        Broadcast Interval (Position, Telemetry, Node Info)
      </Typography>
      <Typography>
        In order to reduce overall channel utilization and ensure messages are
        delivered we recommend the following settings for everyday use unless
        you have a specific use case or are running a test that requires more
        frequent updates.
      </Typography>
      <Typography>
        <b>Device Config</b>
      </Typography>
      <Typography>Node Info Broadcast Interval: 3 Hours</Typography>
      <Typography>
        <b>Position</b>
      </Typography>
      <Typography>
        Broadcast Interval: 1 Hour, Enable Smart Position, Minimum Interval: One
        Minute, Minimum Distance: 100, Position Flags: Disable all flags that
        are not explicitly needed for your use case.
      </Typography>
      <Typography>
        <b>Telemetry (Sensors) Config</b>
      </Typography>
      <Typography>Device Metrics: 3 Hours, Sensor Metrics: 1 Hour</Typography>
    </>
  );
}
