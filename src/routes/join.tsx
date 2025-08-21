import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/join")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container maxWidth="md">
      <Stack
        direction="column"
        py={3}
        spacing={3}
        sx={{
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography component="h1" variant="h4">
          How to join Upstate Mesh
        </Typography>
        <Typography component="h5" variant="h5">
          Join the group
        </Typography>
        <Typography>
          Outside of the mesh network itself, we're most active in our{" "}
          <a
            href="https://discord.gg/mjwbKJBv"
            target="_blank"
            title="Discord server"
          >
            Discord server
          </a>
          , which you're certainly welcome to join even if you do not have a
          radio or node on the mesh. You can also follow us on{" "}
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
                You can build one yourself for about $35. The official
                Meshtastic page keeps a current list of{" "}
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
                recommend you buy a pre-built solar-powered node for between
                $100 and $200 on Etsy and mount it as high off the ground as you
                can.
              </li>
              <li>
                Alternatively you can{" "}
                <a
                  href="https://austinmesh.org/devices/"
                  target="_blank"
                  title="build your own"
                >
                  build your own (courtesy of our friends at Austin Mesh)
                </a>
                .
              </li>
            </ul>
          </li>
          <li>
            Download the{" "}
            <a
              href="https://meshtastic.org/docs/software"
              title="Meshtastic App"
            >
              Meshtastic App
            </a>{" "}
            on your iPhone or Android.
          </li>
          <li>Pair your radio to your phone with Bluetooth.</li>
          <li>Open the Meshtastic app and say hi!</li>
        </ol>
      </Stack>
    </Container>
  );
}
