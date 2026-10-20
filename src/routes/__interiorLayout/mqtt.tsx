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
        content:
          "How to share what your MeshCore node hears on the regional live map by becoming an observer.",
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
        Within the mesh network, MQTT is used as a means of visualizing mesh
        activity on nodes which have Internet access, via a live map. It helps
        everyone understand coverage and troubleshoot the network.
      </Typography>
      <Typography sx={{ borderLeft: "3px solid #75eba5", pl: 2 }}>
        It is <b>not</b> a substitute for building a robust, resilient mesh
        network. Bridging nodes through the Internet would present a false
        representation of the reality off-grid.
      </Typography>
      <Typography component="h5" variant="h5">
        Become an observer
      </Typography>
      <Typography>
        For MeshCore, this is done with <b>observers</b>. An observer is a
        MeshCore node you already run, plus a small meshcore-to-mqtt bridge. The
        bridge forwards the packets your node overhears over the air to the
        regional packet database, so they show up on the{" "}
        <a href="https://live.cdme.sh/#/live" target="_blank" title="live map">
          live map
        </a>
        . It uses encrypted, authenticated MQTT with your own credentials and
        doesn't change how your node handles traffic on the mesh.
      </Typography>
      <Typography>
        Observers for our area are run through Capital District Mesh. See{" "}
        <a
          href="https://cdme.sh/observe"
          target="_blank"
          title="Become an observer"
        >
          cdme.sh/observe
        </a>{" "}
        for how to sign up, and{" "}
        <a
          href="https://cdme.sh/observers"
          target="_blank"
          title="Current observers"
        >
          the observer list
        </a>{" "}
        to see who is already contributing.
      </Typography>
      <Typography component="h5" variant="h5">
        Looking for the old MQTT server?
      </Typography>
      <Typography>
        The Meshtastic MQTT server and Meshview map that used to live at
        mqtt.upstatemesh.org are no longer online.
      </Typography>
      <Typography>
        If you need assistance setting up your node, hop into the Discord and
        give a shout!
      </Typography>
    </>
  );
}
