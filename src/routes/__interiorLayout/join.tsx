import Typography from "@mui/material/Typography";
import { createFileRoute, Link } from "@tanstack/react-router";

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
      <Typography>
        New to all this? Our{" "}
        <Link
          to="/articles/getting-started-with-meshcore"
          title="Getting started with MeshCore"
        >
          getting started with MeshCore
        </Link>{" "}
        guide walks through each step in more detail.
      </Typography>
      <ol>
        <li>
          Get a MeshCore node.
          <ul>
            <li>
              The <b>SenseCAP Card Tracker T1000-E</b> is our recommended first
              node. It’s a compact, credit-card sized device with built-in GPS
              that costs around $50–60.
            </li>
            <li>
              You can also build your own using a RAK WisBlock, Heltec T114, or
              other LoRa-capable hardware and flash MeshCore firmware onto it.
            </li>
            <li>
              If you can afford it and have a place to mount it outside, a
              solar-powered repeater node mounted as high as possible makes an
              excellent contribution to the network.
            </li>
          </ul>
        </li>
        <li>
          Flash{" "}
          <a href="https://meshcore.io/" target="_blank" title="MeshCore">
            MeshCore firmware
          </a>{" "}
          onto your node using the MeshCore web flasher.
        </li>
        <li>
          Download the{" "}
          <a href="https://meshcore.io/" target="_blank" title="MeshCore app">
            MeshCore companion app
          </a>{" "}
          on your iPhone, Android device or use the web client.
        </li>
        <li>
          Pair your node to your device with Bluetooth in the MeshCore app.
        </li>
        <li>
          Configure your radio settings to match the Upstate Mesh network:
          <ul>
            <li>Frequency: 910.525 MHz</li>
            <li>Bandwidth: 62.5 kHz</li>
            <li>Spreading Factor: 7</li>
            <li>Coding Rate: 5</li>
          </ul>
          These match MeshCore's USA/Canada preset.
        </li>
        <li>
          Set your region scope to <code>alb</code> so your messages stay local.
          See{" "}
          <Link to="/regions" title="How regions work">
            how regions work
          </Link>{" "}
          for details.
        </li>
        <li>Say hi in the public channel!</li>
        <li>Send "ping" in the #testing channel.</li>
        <li>
          See how far you reach with a{" "}
          <Link to="/live" title="Live tools">
            health check
          </Link>
          .
        </li>
      </ol>
    </>
  );
}
