import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { createFileRoute } from "@tanstack/react-router";

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
            A meshtastic user group for the Capital District and beyond!
          </Typography>
        </Box>
      </Stack>
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
          <Typography>
            We are a community group of makers and tech enthusiasts
            experimenting with a solar-powered{" "}
            <a
              href="https://meshtastic.org/"
              target="_blank"
              title="Meshtastic"
            >
              Meshtastic
            </a>{" "}
            network in Upstate New York's Capital District (and beyond). This
            network acts like a regional text messaging system, allowing people
            to communicate with anyone on the network. All of this happens
            without any external infrastructure.
          </Typography>
          <Typography component="h5" variant="h5">
            How does it work?
          </Typography>
          <Typography>
            We are setting up solar-powered radio repeaters in the Capital
            Region. These radios communicate on the{" "}
            <a
              href="https://en.wikipedia.org/wiki/33-centimeter_band"
              target="_blank"
              title="33cm band"
            >
              906.875 MHZ
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
            <a
              href="https://meshtastic.org/"
              target="_blank"
              title="Meshtastic"
            >
              Meshtastic
            </a>{" "}
            software. Users can connect to these repeaters by Bluetooth if
            they’re close enough or they can use their own handheld nodes which
            will also act as repeaters. The messages hop from node to node,
            extending the reach of the network and ensuring everyone receives
            every message.
          </Typography>
          <Typography component="h6" variant="h6">
            Can you explain it like I'm 5?
          </Typography>
          <Typography>
            Pretend you're sitting in class and want to send a note to everyone
            in the class. You write your note on a piece of paper and copy it
            three times. The message can be up to 228 characters - about as long
            as this paragraph so far. You hand those three pieces of paper to
            the three people around you. Then those three people re-write the
            message three times and hand it to the three people around them and
            so on. Now imagine a big gust of wind comes and blows away some of
            the messages. If even just a few people saw the note and keep
            copying and re-sending it, eventually everyone will get a copy of
            the note. This is like sending an unencrypted message to everyone on
            the network.
          </Typography>
          <Typography>
            Now imagine you want to send a message to a single person or a
            select group of people but you don't want other people who see the
            note to be able to read it. You could write the note using a secret
            language. You could then hand a decoder key to your friend or to a
            group of friends and they could decode the message. The message
            still gets passed the same way - with every single person writing
            the message a few times and handing it to everyone - but only those
            people with the decoder key will be able to understand the message.
            This is like sending an encrypted direct message or encrypted group
            message.
          </Typography>
          <Typography>
            Upstate Mesh works the same way as this paper example, but instead
            of sending paper notes we're using digital text messages and sending
            it with radio waves. Our radios are solar powered and they don’t
            need any internet or cell phone coverage. This means they will work
            even if the power is out.
          </Typography>
          <Typography component="h5" variant="h5">
            How to join
          </Typography>
          <Typography>
            We're just getting started and would love to have you join! Check
            out our{" "}
            <a
              href="/join"
              title="instructions on how to join the mesh network"
            >
              instructions on how to join the mesh network
            </a>
            .
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
        </Stack>
      </Container>
    </Box>
  );
}
