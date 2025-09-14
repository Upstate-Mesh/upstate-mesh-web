import Typography from "@mui/material/Typography";
import { createFileRoute } from "@tanstack/react-router";

const PAGE_TITLE = "MQTT - Upstate Mesh";

export const Route = createFileRoute("/__interiorLayout/mqtt")({
  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content: "How to setup MQTT to show up on the Upstate Mesh map.",
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
        MQTT
      </Typography>
      <Typography>
        Within the mesh network, MQTT is used as a means of{" "}
        <a
          href="http://mqtt.upstatemesh.org/map"
          target="_blank"
          title="visualizing"
        >
          visualizing
        </a>{" "}
        mesh activity on nodes which have Internet access. A private MQTT server
        is setup for use locally.
      </Typography>
      <Typography>
        It is <b>not</b> recommended to use this as a substitue for building a
        robust, resilient mesh network. Bridging nodes through the Internet
        would present a false representation of the reality off-grid.
      </Typography>
      <Typography variant="h5">Quickstart</Typography>
      <ol>
        <li>
          Navigate to <strong>Settings &gt; LoRa</strong>. Activate{" "}
          <strong>Ok to MQTT</strong>.
        </li>
        <li>
          Navigate to <strong>Settings &gt; MQTT</strong> and make sure to set
          things up like this:
          <ul>
            <li>
              <strong>Enabled</strong> <code>Yes</code>
            </li>
            <li>
              If your node only has access to the internet through your device
              running the Meshtastic app: <strong>MQTT Client Proxy:</strong>{" "}
              <code>Yes</code>
            </li>
            <li>
              <strong>Encryption enabled:</strong> <code>Yes</code>
            </li>
            <li>
              <strong>Root topic:</strong> <code>msh/US/NY</code>
            </li>
            <li>
              <strong>Server address:</strong> <code>mqtt.upstatemesh.org</code>
            </li>
            <li>
              <strong>Username:</strong> <code>meshdev</code>
            </li>
            <li>
              <strong>Password:</strong> <code>large4cats</code>
            </li>
          </ul>
        </li>
      </ol>
      <Typography variant="h6">Channel configuration</Typography>
      <Typography>
        Each channel you wish to connect to the MQTT server needs to be
        configured separately.
      </Typography>
      <Typography>
        <b>If you just want to appear on the map</b>, it's recommended to
        configuring your <strong>Primary Channel</strong> to be{" "}
        <strong>Uplink Enabled</strong>. Downlink MQTT is not enabled on the
        primary channel. Even if activated, the node will not receive downlink
        packets.
      </Typography>
      <Typography variant="h6">Private channel with full MQTT</Typography>
      <Typography>
        It <strong>is</strong> allowed to configure{" "}
        <strong>Uplink Enabled</strong> and <strong>Downlink Enabled</strong> in
        the <strong>Upsate Mesh</strong> private channel. This channel is like a
        big regional chat room over the mesh and MQTT.
      </Typography>
      <ul>
        <li>
          <strong>Channel Number:</strong> <code>1</code>
        </li>
        <li>
          <strong>Name:</strong> <code>UpstateMesh</code>
        </li>
        <li>
          <strong>Key Size:</strong> <code>256 bit</code>
        </li>
        <li>
          <strong>Key:</strong>{" "}
          <code>dsb2L/BYJ0XtOiWFiy/hoLKha1NIlEiKY6RA8jw2zSM=</code>
        </li>
        <li>
          <strong>Channel Role:</strong> <code>Secondary</code>
        </li>
      </ul>
      <Typography>
        If you need assistance setting up your device, hop into the Discord and
        give a shout!
      </Typography>
      <Typography variant="h5">Meshview</Typography>
      <Typography>
        The packets gathered by the MQTT server may be{" "}
        <a
          href="http://mqtt.upstatemesh.org/"
          title="Meshview map"
          target="_blank"
        >
          visualized on the Meshview map
        </a>
        . They are also bridged to upstream MQTT servers including{" "}
        <a href="https://meshmap.net/" title="MeshMap" target="_blank">
          https://meshmap.net/
        </a>{" "}
        and{" "}
        <a
          href="https://meshtastic.liamcottle.net/"
          title="Meshtastic Map"
          target="_blank"
        >
          https://meshtastic.liamcottle.net/
        </a>
      </Typography>
    </>
  );
}
