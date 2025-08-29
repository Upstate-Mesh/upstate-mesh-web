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
        Within the Upstate Mesh network, we're using MQTT as a means of{" "}
        <a
          href="http://mqtt.upstatemesh.org/map"
          target="_blank"
          title="visualizing"
        >
          visualizing
        </a>{" "}
        the off-grid network activity, on nodes which have Internet access. We
        have set up a private MQTT server for use by local members.
      </Typography>
      <Typography>
        It's a fully optional part of participating in the group and is by no
        means required.
      </Typography>
      <Typography>
        It is <b>not</b> recommended to use this as a substitue for building a
        robust, resilient mesh network. Bridging nodes through the Internet
        would present a false representation of the reality off-grid. Please
        only enable MQTT if you'd like to contribute to the node visualization
        map.
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
      <Typography>
        NOTE: We have deactivated Downlink functionality in our MQTT server.
        This means that even if Downlink is enabled for a given channel in your
        node's settings, it will not receive packets from our MQTT server.
      </Typography>
      <Typography>
        If you need assistance setting up your device, hop into the Discord and
        give us a shout!
      </Typography>
      <Typography variant="h5">Meshview</Typography>
      <Typography>
        The packets gathered by our MQTT server may be{" "}
        <a
          href="http://mqtt.upstatemesh.org/"
          title="Meshview map"
          target="_blank"
        >
          visualized on our Meshview map
        </a>
        .
      </Typography>
    </>
  );
}
