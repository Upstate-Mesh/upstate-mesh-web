import { ReactNode } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { createFileRoute, Link } from "@tanstack/react-router";

const PAGE_TITLE = "FAQ - Upstate Mesh";

export const Route = createFileRoute("/__interiorLayout/faq")({
  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content:
          "Frequently asked questions and a glossary of mesh networking terms.",
      },
    ],
    title: PAGE_TITLE,
  }),
  component: RouteComponent,
});

const faqs: ReadonlyArray<{ question: string; answer: ReactNode }> = [
  {
    question: "Do I need a ham radio license?",
    answer: (
      <>
        No. MeshCore radios operate in the unlicensed 902–928 MHz ISM band under
        FCC Part 15, the same rules that cover garage door openers and baby
        monitors.
      </>
    ),
  },
  {
    question: "What does it cost?",
    answer: (
      <>
        The network is free to use. You just need your own radio, which
        typically runs around $50–60 for a ready-made companion like the
        T1000-E. See{" "}
        <Link
          to="/articles/getting-started-with-meshcore"
          title="Getting started"
        >
          getting started
        </Link>
        .
      </>
    ),
  },
  {
    question: "Does it need the internet or cell service?",
    answer: (
      <>
        No. Messages travel radio to radio through solar-powered repeaters. Your
        phone only talks to your own radio, over Bluetooth.
      </>
    ),
  },
  {
    question: "How far can I reach?",
    answer: (
      <>
        It depends mostly on height and terrain. A handheld radio at ground
        level might reach a repeater a mile or a few miles away. Repeaters on
        rooftops and hills can link to each other over much longer distances,
        and a message can pass through up to 64 of them.
      </>
    ),
  },
  {
    question: "Is it private?",
    answer: (
      <>
        It depends on where you post. The Public channel and{" "}
        <code>#hashtag</code> channels can be read by anyone who has joined
        them, so treat them like a public forum. Direct messages and private
        channels are encrypted so only the intended people can read them. Your
        node's name, and its location if you choose to share it, are visible to
        everyone.
      </>
    ),
  },
  {
    question: "Can I talk to Meshtastic users?",
    answer: (
      <>
        Not directly. MeshCore and Meshtastic use different protocols and can't
        exchange messages, even on the same frequency. Meshtastic users are
        always welcome in our community, though. See{" "}
        <Link to="/learn" title="Learn">
          Learn
        </Link>{" "}
        for how the two compare.
      </>
    ),
  },
  {
    question: "Can I rely on it in an emergency?",
    answer: (
      <>
        It's a useful backup, but never stake a life on a network of hobbyists.
        Always try 911 first. When a message must get through, treat the mesh as
        one road among many.
      </>
    ),
  },
  {
    question: "Why didn't my direct message go through?",
    answer: (
      <>
        The first message to someone has to flood the mesh while your radio
        learns a path to them, so it can take a few tries. After that, messages
        go straight down the learned path. If it keeps failing, they may be out
        of range of any repeater right now.
      </>
    ),
  },
  {
    question: "What region should I use?",
    answer: (
      <>
        <code>alb</code> for everyday messages in the Capital District.{" "}
        <code>east</code> and <code>northeast</code> are for emergencies only.
        See{" "}
        <Link to="/regions" title="Regions">
          Regions
        </Link>
        .
      </>
    ),
  },
  {
    question: "How can I help?",
    answer: (
      <>
        Put up a repeater, or{" "}
        <Link to="/host-a-repeater" title="Host a repeater">
          offer a high spot to host one
        </Link>
        . You can also{" "}
        <Link to="/mqtt" title="Observers">
          become an observer
        </Link>{" "}
        to help map the network, or come to a meetup and share what you know.
      </>
    ),
  },
];

const glossary: ReadonlyArray<{ term: string; definition: string }> = [
  {
    term: "ACK",
    definition:
      "Acknowledgement. A short reply confirming a direct message arrived.",
  },
  {
    term: "Advert",
    definition:
      "A packet announcing a node's name, public key and (optionally) location, so others can find and message it. Can be zero-hop (neighbors only) or flood.",
  },
  {
    term: "Airtime",
    definition:
      "Time spent transmitting. Only one radio can transmit at a time in an area, so airtime is the mesh's scarcest resource.",
  },
  {
    term: "Bandwidth (BW)",
    definition:
      "How wide a slice of spectrum each transmission uses. Upstate Mesh uses 62.5 kHz.",
  },
  {
    term: "Channel",
    definition:
      "A group conversation. Includes the Public channel, #hashtag channels and private channels.",
  },
  {
    term: "Coding rate (CR)",
    definition:
      "How much error-correction data is added to each packet. Upstate Mesh uses CR 5.",
  },
  {
    term: "Companion",
    definition:
      "A personal radio that pairs with your phone or computer. It does not relay other people's messages.",
  },
  {
    term: "Direct path",
    definition:
      "A learned route to another node. Messages sent on a path only use the repeaters along it, instead of flooding.",
  },
  {
    term: "Flood",
    definition:
      "Sending a packet that every repeater that hears it repeats once. Used for channel messages, flood adverts, and messages without a known path.",
  },
  {
    term: "Hashtag channel",
    definition:
      "An open channel joined by name, like #testing. Anyone who adds the same name can read it.",
  },
  {
    term: "Hop",
    definition:
      "One trip from one radio to the next. MeshCore allows up to 64 hops.",
  },
  {
    term: "ISM band",
    definition:
      "The Industrial, Scientific and Medical band. In the US, 902–928 MHz can be used without a license.",
  },
  {
    term: "LoRa",
    definition:
      "Long Range. The low-power radio technology MeshCore and Meshtastic are built on.",
  },
  {
    term: "MeshCore",
    definition:
      "The open-source mesh firmware Upstate Mesh runs. Repeaters relay; companions don't.",
  },
  {
    term: "Meshtastic",
    definition:
      "A different open-source LoRa mesh project. Not compatible with MeshCore.",
  },
  {
    term: "MQTT",
    definition:
      "An internet messaging protocol observers use to send what they hear to a live map.",
  },
  {
    term: "Observer",
    definition:
      "A node connected to the internet that reports the packets it overhears, so the network can be mapped and monitored.",
  },
  {
    term: "Public channel",
    definition:
      "The default channel every MeshCore node has. Anyone can read it.",
  },
  {
    term: "Region (scope)",
    definition:
      "A tag on a flood message that tells repeaters whether to relay it. Limits how far messages travel.",
  },
  {
    term: "Repeater",
    definition:
      "A fixed radio, usually high up and solar powered, that relays everyone's messages.",
  },
  {
    term: "Room server",
    definition:
      "A node that stores messages for a group so people who were offline can catch up.",
  },
  {
    term: "RSSI",
    definition:
      "Received Signal Strength Indicator. How loud a signal was, in dBm. Closer to zero is stronger.",
  },
  {
    term: "SNR",
    definition:
      "Signal-to-noise ratio, in dB. How far a signal stood out above the background noise. Higher is better, and LoRa can still decode below zero.",
  },
  {
    term: "Spreading factor (SF)",
    definition:
      "How slowly each bit is sent. Higher SF reaches farther but uses more airtime. Upstate Mesh uses SF 7.",
  },
];

function RouteComponent() {
  return (
    <>
      <Typography component="h1" variant="h4">
        FAQ
      </Typography>
      {faqs.map((faq) => (
        <div key={faq.question}>
          <Typography component="h2" variant="h6">
            {faq.question}
          </Typography>
          <Typography>{faq.answer}</Typography>
        </div>
      ))}
      <Typography component="h5" variant="h5">
        Glossary
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }}>
          <TableBody>
            {glossary.map((entry) => (
              <TableRow
                key={entry.term}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ whiteSpace: { sm: "nowrap" }, verticalAlign: "top" }}
                >
                  <b>{entry.term}</b>
                </TableCell>
                <TableCell>{entry.definition}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography>
        Question not answered here? Ask in our Discord or{" "}
        <Link to="/contact" title="Contact">
          get in touch
        </Link>
        .
      </Typography>
    </>
  );
}
