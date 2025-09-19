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
            A meshtastic community group for the Capital District!
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
            Upstate Mesh is a community group of makers and tech enthusiasts
            tinkering with an open source, solar-powered{" "}
            <a
              href="https://meshtastic.org/"
              target="_blank"
              title="Meshtastic"
            >
              Meshtastic
            </a>{" "}
            network in Upstate New York's Capital District. A Meshtastic network
            acts like a regional text messaging system. It's perfect for hiking,
            camping, emergency preparedness, or just trying new off-grid
            technology!
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
            Meshtastic works the same way as this paper example, but instead of
            sending paper notes users send digital text messages with radio
            waves. The radios are solar powered and they don’t need any internet
            access. This means they will work even if the power is out.
          </Typography>
          <Typography component="h5" variant="h5">
            How to join the mesh
          </Typography>
          <Typography>
            Check out{" "}
            <a
              href="/join"
              title="instructions on how to join the mesh network"
            >
              instructions on how to join the mesh network
            </a>
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
