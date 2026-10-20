import Typography from "@mui/material/Typography";
import { createFileRoute, Link } from "@tanstack/react-router";

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
        Observers &amp; MQTT
      </Typography>
      <Typography>
        Within the mesh network, MQTT is used to collect what observer nodes
        hear and show it on live maps and analyzers. It helps everyone
        understand coverage and troubleshoot the network.
      </Typography>
      <Typography sx={{ borderLeft: "3px solid #75eba5", pl: 2 }}>
        It is <b>not</b> a substitute for building a robust, resilient mesh
        network. Bridging nodes through the Internet would present a false
        representation of the reality off-grid.
      </Typography>
      <Typography component="h5" variant="h5">
        What is an observer?
      </Typography>
      <Typography>
        An observer is a MeshCore radio connected to an always-on computer, such
        as a Raspberry Pi, that has internet access. The radio runs repeater
        firmware built with packet logging, and a small bridge program
        (meshcoretomqtt) forwards every packet it overhears to MQTT servers.
        Those packets power our{" "}
        <Link to="/live" title="Live tools">
          live tools
        </Link>
        : the live map, CoreScope, and the health check.
      </Typography>
      <Typography>
        A spot that isn't great for a repeater can still make a good observer.
        Set it to <code>repeat off</code> and it will listen and report without
        retransmitting anything. Every observer adds a vantage point, so the
        more of them there are, the more complete the picture.
      </Typography>
      <Typography component="h5" variant="h5">
        Our observer
      </Typography>
      <Typography>
        Upstate Mesh runs <b>UM-Observer-Westmere</b>. It reports to our own
        tools and also shares its data with{" "}
        <a
          href="https://cdme.sh/"
          target="_blank"
          title="Capital District Mesh"
        >
          Capital District Mesh
        </a>
        ,{" "}
        <a
          href="https://bostonme.sh/"
          target="_blank"
          title="Greater Boston Mesh"
        >
          Greater Boston Mesh
        </a>
        , LetsMesh and MeshMapper, so our corner of the mesh shows up on their
        maps too.
      </Typography>
      <Typography component="h5" variant="h5">
        Become an observer
      </Typography>
      <Typography>
        Observers in our area report through Capital District Mesh, and our live
        tools read from there as well, so one setup puts you on every map. See{" "}
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
        to see who is already contributing. Want help building one? Ask in our
        Discord.
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
