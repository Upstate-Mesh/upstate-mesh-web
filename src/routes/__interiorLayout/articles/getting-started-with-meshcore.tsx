import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { createFileRoute, Link } from "@tanstack/react-router";

import Step from "../../../Step";

const PAGE_TITLE = "Getting started with MeshCore - Upstate Mesh";

export const Route = createFileRoute(
  "/__interiorLayout/articles/getting-started-with-meshcore",
)({
  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content:
          "Everything you need to go from zero to sending your first message on Upstate Mesh.",
      },
    ],
    title: PAGE_TITLE,
  }),
  component: RouteComponent,
});

const nodeTypes = [
  {
    name: "Companion",
    what: "Your personal radio. It pairs with your phone over Bluetooth so you can send and receive messages in the app.",
    relays: "No",
  },
  {
    name: "Repeater",
    what: "A fixed radio, ideally mounted high up and solar powered. It relays everyone's messages and is what grows the mesh.",
    relays: "Yes",
  },
  {
    name: "Room server",
    what: "A node that stores messages for a group, so people who were offline can catch up later. A bit like an old-school BBS.",
    relays: "No",
  },
];

function RouteComponent() {
  return (
    <>
      <Stack spacing={1}>
        <Typography component="h1" variant="h4">
          Getting started with MeshCore
        </Typography>
        <Typography variant="caption">
          Everything you need to go from zero to sending your first message on
          Upstate Mesh.
        </Typography>
        <Typography variant="caption">
          By Upstate Mesh | October 20, 2026
        </Typography>
      </Stack>
      <Typography component="h5" variant="h5">
        Who is this for?
      </Typography>
      <Typography>
        Anyone who is brand new to mesh networking. You don't need a ham
        license, programming experience, or a soldering iron. If you can install
        an app and plug in a USB cable, you can be on the mesh this afternoon.
      </Typography>
      <Typography component="h5" variant="h5">
        What is MeshCore?
      </Typography>
      <Typography>
        <a href="https://meshcore.io/" target="_blank" title="MeshCore">
          MeshCore
        </a>{" "}
        is open-source firmware for small, inexpensive LoRa radios. Your radio
        sends a message, and repeaters across the Capital District pass it along
        hop by hop until it reaches the people it's meant for. No cell towers,
        internet, or power grid required. For the deeper background, see{" "}
        <Link to="/learn" title="Learn">
          Learn
        </Link>
        .
      </Typography>
      <Typography component="h6" variant="h6">
        The three kinds of node
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>What it does</TableCell>
              <TableCell>Relays others?</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {nodeTypes.map((nodeType) => (
              <TableRow
                key={nodeType.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <b>{nodeType.name}</b>
                </TableCell>
                <TableCell>{nodeType.what}</TableCell>
                <TableCell>{nodeType.relays}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography>
        Almost everyone starts with a companion. That's what this guide covers.
      </Typography>
      <Typography component="h5" variant="h5">
        Pick your hardware
      </Typography>
      <ul>
        <li>
          <b>SenseCAP Card Tracker T1000-E:</b> our recommended first node.
          Credit-card sized, built-in GPS and battery, and nothing to assemble.
          Around $50–60.
        </li>
        <li>
          <b>Heltec Mesh Node T114:</b> inexpensive and available with a
          display. Want a fun project? Try our{" "}
          <Link
            to="/articles/build-a-90s-hacker-pager-style-t114-mesh-node"
            title="pager build"
          >
            '90s hacker pager build
          </Link>
          .
        </li>
        <li>
          <b>RAK WisBlock:</b> modular and great for tinkerers, and a popular
          base for solar repeaters later on.
        </li>
      </ul>
      <Typography sx={{ borderLeft: "3px solid #75eba5", pl: 2 }}>
        <b>Antenna first.</b> If your board has an external antenna connector,
        always attach the antenna before powering it on. Transmitting without
        one can damage the radio.
      </Typography>
      <Typography component="h5" variant="h5">
        Let's get on the mesh
      </Typography>
      <Step
        stepNum={1}
        title="Flash MeshCore companion firmware"
        description={
          <>
            Plug your node into a computer with a USB data cable and open the
            web flasher at{" "}
            <a href="https://meshcore.io/" target="_blank" title="MeshCore">
              meshcore.io
            </a>{" "}
            in Chrome or Edge. Pick your device, choose the{" "}
            <b>Companion (Bluetooth)</b> firmware, and flash it.
          </>
        }
      />
      <Step
        stepNum={2}
        title="Install the MeshCore app"
        description={
          <>
            Get the MeshCore app for iPhone or Android, linked from{" "}
            <a href="https://meshcore.io/" target="_blank" title="MeshCore">
              meshcore.io
            </a>
            . There's also a web client if you'd rather use a computer.
          </>
        }
      />
      <Step
        stepNum={3}
        title="Pair over Bluetooth"
        description="Open the app, find your node in the device list, and connect. Follow the prompts to finish pairing."
      />
      <Step
        stepNum={4}
        title="Set your name and radio settings"
        description={
          <>
            Give your node a name people will recognize: your first name, a
            handle, or your callsign. Then set the radio to match Upstate Mesh:
            <ul>
              <li>Frequency: 910.525 MHz</li>
              <li>Bandwidth: 62.5 kHz</li>
              <li>Spreading Factor: 7</li>
              <li>Coding Rate: 5</li>
            </ul>
            If any of these are off, you won't hear anyone.
          </>
        }
      />
      <Step
        stepNum={5}
        title="Set your region scope to alb"
        description={
          <>
            In your channels, open <b>Set Region Scope</b> and pick{" "}
            <code>alb</code>. This keeps your everyday chatter in the Capital
            District instead of flooding the whole state.{" "}
            <Link to="/regions" title="Regions">
              Read more about regions
            </Link>
            .
          </>
        }
      />
      <Step
        stepNum={6}
        title="Send an advert"
        description="An advert announces your node so other people can see you and message you. Send one flood advert after you set up. There's no need to send them over and over; each one uses airtime on every repeater."
      />
      <Step
        stepNum={7}
        title="Say hi!"
        description={
          <>
            Post a hello in the Public channel. Then add the{" "}
            <code>#testing</code> channel and send <code>ping</code> to check
            that you're reaching the mesh.
          </>
        }
      />
      <Typography component="h5" variant="h5">
        Not hearing anything?
      </Typography>
      <ul>
        <li>
          Double-check all four radio settings. One wrong number and you're on a
          different network.
        </li>
        <li>
          Get higher, or near a window. Indoors and at ground level, LoRa
          signals have a hard time reaching repeaters.
        </li>
        <li>Make sure your antenna is attached firmly.</li>
        <li>
          Direct messages may take a few tries the first time while your node
          learns a path. After that, they go straight through.
        </li>
        <li>
          Run a{" "}
          <Link to="/live" title="Live tools">
            health check
          </Link>{" "}
          to see whether any observers hear you, and through which repeaters.
        </li>
        <li>Still stuck? Ask in our Discord. Someone will help.</li>
      </ul>
      <Typography component="h5" variant="h5">
        Mesh etiquette
      </Typography>
      <ul>
        <li>
          Use <code>alb</code> for everyday messages. <code>east</code> and{" "}
          <code>northeast</code> are for emergencies only.
        </li>
        <li>
          Use <code>#testing</code> for tests, not the Public channel.
        </li>
        <li>
          Airtime is shared. Don't spam adverts or long messages, and everyone
          gets a better mesh.
        </li>
      </ul>
      <Typography component="h5" variant="h5">
        Next steps
      </Typography>
      <ul>
        <li>
          Learn how MeshCore compares to Meshtastic on the{" "}
          <Link to="/learn" title="Learn">
            Learn
          </Link>{" "}
          page.
        </li>
        <li>
          Put up a repeater. A solar repeater mounted high is the single best
          thing you can do for the mesh. See{" "}
          <Link to="/regions" title="Regions">
            Regions
          </Link>{" "}
          for how to configure one.
        </li>
        <li>
          Watch the mesh{" "}
          <Link to="/live" title="Live tools">
            live
          </Link>{" "}
          and test your reach with the health check.
        </li>
        <li>
          Help map the network by{" "}
          <Link to="/mqtt" title="MQTT">
            becoming an observer
          </Link>
          .
        </li>
        <li>
          Join us on{" "}
          <a
            href="https://discord.gg/FvajRmXEsb"
            target="_blank"
            title="Discord server"
          >
            Discord
          </a>{" "}
          to talk radios, antennas, 3D printing and solar builds.
        </li>
      </ul>
    </>
  );
}
