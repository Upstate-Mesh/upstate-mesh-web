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
        content: "How to configure your node and join the mesh.",
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
        Connect to the network
      </Typography>
      <ol>
        <li>
          Get a Mesh Radio.
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
              The LILYGO T-Echo is a good first radio, as it costs around $70
              and is ready to go out of the box (besides having to flash the
              firmware).
            </li>
            <li>
              You can also buy a pre-built battery-powered radio for between
              $50-$100 on Etsy or eBay - these usually have 3D printed cases.
            </li>
            <li>
              If you can afford it, and have a place to mount it outside, you
              could buy a pre-built solar-powered node for between $100 and $200
              and mount it as high off the ground as you can.
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
        ensure the best experience for everyone as the community grows.
      </Typography>
      <Typography component="h6" variant="h6">
        Device Role
      </Typography>
      <Typography>
        It may be tempting to set your device to ‘client/router’ or one of the
        other infrastructure modes, however from extensive testing it has been
        observed that the best results for the end user, and the network as a
        whole using the ‘client’ role. Meshtastic does not currently have any
        intelligent routing built into the firmware. Nodes are set to
        rebroadcast any message they receive that they have not heard
        rebroadcast from another node at a random time interval. The
        ‘client/router’ and other infrastructure role takes that random interval
        and subtracts another random interval ensuring that they rebroadcast
        first.
      </Typography>
      <Typography>
        While this may sound good on paper, due to constantly changing
        environmental variables you may be inadvertently creating dead ends in
        the network, bypassing intended recipients, and closing off redundant
        routing paths. It is highly recommend starting with a ‘client’ role even
        for well placed nodes.
      </Typography>
      <Typography>
        For device connected nodes (the ones you're sending messages from) that
        are not contributing to the network it is recommended to use a device
        role of ‘client mute’ to reduce overall network airtime. An example of
        this would be a device connected node in your home that goes through a
        relay node on your roof.
      </Typography>
      <Typography component="h6" variant="h6">
        Hop Count
      </Typography>
      <Typography>
        It is recommend starting with a hop count of 3, and always using the
        minimum number of hops needed to reach your destination. If you are
        running a device connected node in your home and a relay node that your
        client always goes through, a hop count of 4 is advised. If you are on
        the edge of the network and are not achieving results with the above, 5
        hops may be useful however, ensure that you've done all you can with
        regard to optimizing your node hardware and placement first, if these
        are not taken care of additional hops will not yield greater distance
        and will degrade the performance of the wider network.
      </Typography>
      <Typography component="h6" variant="h6">
        Broadcast Interval (Position, Telemetry, Node Info)
      </Typography>
      <Typography>
        In order to reduce overall channel utilization and ensure messages are
        delivered it is recommended to use the following settings for everyday
        use unless you have a specific use case or are running a test that
        requires more frequent updates.
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
