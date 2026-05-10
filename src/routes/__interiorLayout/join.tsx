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
          Configure your radio settings to match the Upstate Mesh network:
          <ul>
            <li>Preset: US Default</li>
            <li>Spread Factor: 7</li>
            <li>Code Rate: 8</li>
          </ul>
        </li>
        <li>
          Download the{" "}
          <a href="https://meshcore.io/" target="_blank" title="MeshCore app">
            MeshCore companion app
          </a>{" "}
          on your iPhone, Android device or use the web client.
        </li>
        <li>Pair your node to your device with Bluetooth.</li>
        <li>Say hi on the mesh!</li>
      </ol>
    </>
  );
}
