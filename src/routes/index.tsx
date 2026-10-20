import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { createFileRoute, Link } from "@tanstack/react-router";

import MeetupBanner from "../MeetupBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      {
        rel: "preload",
        as: "image",
        href: "/um_hero.png",
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          background: "#3a3c4d url(/um_hero.png) center center/cover no-repeat",
          boxShadow: "0 10px 10px rgba(0, 0, 0, .2)",
          height: {
            xs: 550,
            md: 400,
          },
          padding: {
            xs: 0,
            md: 2,
          },
          width: "100%",
          justifyContent: "flex-end",
          alignItems: {
            xs: "center",
            md: "flex-start",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: {
              xs: "rgb(0, 0, 0, .8)",
              md: "rgb(0, 0, 0, .6)",
            },
            borderRadius: {
              xs: 0,
              md: 2,
            },
            padding: 2,
          }}
        >
          <Typography component="h1" variant="h4">
            Welcome to Upstate Mesh
          </Typography>
          <Typography component="h5" variant="h5" sx={{ color: "#ffffff" }}>
            A mesh communication community group for the Capital District!
          </Typography>
        </Box>
      </Stack>
      <Container maxWidth="md">
        <Stack
          direction="column"
          spacing={3}
          sx={{
            justifyContent: "center",
            alignItems: "flex-start",
            py: 3,
          }}
        >
          <MeetupBanner />
          <Typography>
            Upstate Mesh is a community group of makers and tech enthusiasts
            tinkering with open source, solar-powered mesh networks in Upstate
            New York's Capital District. A mesh network acts like a regional
            text messaging system. It's perfect for hiking, camping, emergency
            preparedness, or just trying new off-grid technology!
          </Typography>
          <Typography component="h5" variant="h5">
            How does it work?
          </Typography>
          <Typography>
            Community members set up solar-powered radio repeaters. These radios
            communicate on the{" "}
            <a
              href="https://en.wikipedia.org/wiki/33-centimeter_band"
              target="_blank"
              title="33cm band"
            >
              910.525 MHz
            </a>{" "}
            frequency using the{" "}
            <a
              href="https://en.wikipedia.org/wiki/LoRa"
              target="_blank"
              title="LoRa"
            >
              LoRa protocol
            </a>
            . The radios mesh using the open-source{" "}
            <a href="https://meshcore.io/" target="_blank" title="MeshCore">
              MeshCore
            </a>{" "}
            software. Users can use their own handheld nodes with a mobile app
            and can send messages to other users. The messages hop from node to
            node, extending the reach of the network, helping everyone receive
            messages.
          </Typography>
          <Typography component="h5" variant="h5">
            See it live
          </Typography>
          <Typography>
            Watch messages hop across the Capital District in real time, and
            test how far your own radio reaches, with our{" "}
            <Link to="/live" title="live tools">
              live map, packet analyzer and health check
            </Link>
            .
          </Typography>
          <Typography component="h5" variant="h5">
            How to join the mesh
          </Typography>
          <Typography>
            Check out{" "}
            <Link
              to="/join"
              title="instructions on how to join the mesh network"
            >
              instructions on how to join the mesh network
            </Link>
            .
          </Typography>
          <Typography>
            Outside of the mesh network itself, folks are most active in{" "}
            <a
              href="https://discord.gg/FvajRmXEsb"
              target="_blank"
              title="Discord server"
            >
              Discord
            </a>{" "}
            building radios, talking about 3d printing, designing solar
            solutions, etc. You're welcome to join even if you do not have a
            node on the mesh.
          </Typography>
          <Box
            sx={{
              alignContent: "center",
              justifyContent: "center",
              display: "flex",
              width: "100%",
            }}
          >
            <a
              href="https://discord.gg/FvajRmXEsb"
              target="_blank"
              title="Discord server"
            >
              <img
                src="/um_discord_qrcode.png"
                style={{ width: 250, height: "auto" }}
                alt="Discord QR code"
              />
            </a>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
