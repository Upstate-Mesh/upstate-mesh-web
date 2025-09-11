import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { createFileRoute } from "@tanstack/react-router";

const PAGE_TITLE = "Learn - Upstate Mesh";

export const Route = createFileRoute("/__interiorLayout/learn")({
  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content:
          "Learn about mesh communications, Meshtastic, and Upstate Mesh.",
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
        Learn
      </Typography>
      <Typography component="h5" variant="h5">
        Why build a mesh in the first place?
      </Typography>
      <Typography sx={{ borderLeft: "3px solid #75eba5", pl: 2 }}>
        First responders have access to FirstNet, a hardened, prioritized
        cellular service operated by AT&amp;T. Ordinary citizens have no
        equivalent “network of last resort”… or at least they didn’t until
        Meshtastic was developed. Meshtastic is being used in (preparation for)
        emergency scenarios by ordinary citizens because it is inexpensive to
        buy individual nodes and doesn’t depend on infrastructure. Meshtastic’s
        relay (mesh) functionality is automatic, and it can easily be deployed
        by individuals or in groups such as a neighborhood.
      </Typography>
      <Typography>
        -{" "}
        <a
          href="https://www.zeroretries.org/p/zero-retries-0170?open=false#%C2%A7a-few-good-comments-on-fcc-docket"
          target="_blank"
          title="Steve Stroh N8GNJ, Zero Retries 0170"
        >
          Steve Stroh N8GNJ, Zero Retries 0170
        </a>
      </Typography>
      <Card sx={{ width: "100%" }}>
        <CardHeader
          title="Mesh communications after a disaster"
          titleTypographyProps={{ variant: "h6" }}
        />
        <CardMedia
          component="iframe"
          src="https://www.youtube.com/embed/s6Z6Z0Iizgg?si=I62mmax7qP8Uz7er"
          sx={{
            width: "100%",
            aspectRatio: "16/9",
            border: 0,
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </Card>
      <Typography component="h5" variant="h5">
        What can it do?
      </Typography>
      <Typography>
        Meshtastic is a bit like a decentralized social media platform or SMS
        text messaging. It has a number of different features which will be
        familiar to anyone who has sent a text message or posted on social
        media.
      </Typography>
      <ol>
        <li>
          <b>Primary channel</b>
          <br />
          You can broadcast an unencrypted message to the Primary Channel and
          everyone on your mesh will see it. This is a bit like “posting”
          publicly on a social media platform.
        </li>
        <li>
          <b>Group channels</b>
          <br />
          You can send an encrypted message to a select group of people on a
          Secondary Channel and everyone who is subscribed to that channel will
          get it. People can join the channel if you provide them with an
          encryption key which you can send to them via Direct Message or which
          they can scan from a QR code in person. This is a bit like a private
          group on social media, or a group text message chain on SMS.
        </li>
        <li>
          <b>Direct messages</b>
          <br />
          You can send encrypted direct messages to people on the mesh. This is
          like a private text message or a DM on social medial.
        </li>
        <li>
          <b>Location</b>
          <br />
          If you choose to enable it you can send your location to the mesh and
          it will show up on everyone’s map in the app.
        </li>
        <li>
          <b>Connect worldwide</b>
          <br />
          If anyone on your local mesh is running an MQTT gateway your local
          mesh will connect to the other meshes around the world. This can allow
          you to broadcast messages to everyone globally or send encrypted
          messages to groups or individuals worldwide.
        </li>
        <li>
          <b>Telemetry data</b>
          <br />
          Nodes can be set up to send telemetry data like the battery status or
          signal strength, which is helpful for monitoring remote solar-powered
          nodes. Nodes can also have sensors connected to them which allow them
          to send data on temperature, humidity, or air pressure which allow
          them to act like weather stations.
        </li>
      </ol>
      <Typography component="h5" variant="h5">
        What build this network?
      </Typography>
      <ol>
        <li>
          <b>Community</b>
          <br />
          As this is essentially a regional group text message chain, the hope
          is that people use the network to build community. Tell the group
          where your band is playing tonight, chat about local events, ask for a
          good cheese dip recipe, etc.
        </li>
        <li>
          <b>Disasters</b>
          <br />
          If the power goes out, like has happened in the past with winter ice
          storms, this network should allow people to continue to communicate
          with each other without electricity, cell phone coverage, or internet.
          This big regional group text chain could allow people to ask for help
          or offer assistance. People could get information about where warming
          centers are open or ask who in their neighborhood still has power.
          People could also send encrypted direct messages to check in on
          friends and family or they could send encrypted group messages to
          coordinate privately in a group.
        </li>
        <li>
          <b>Decentralized, open, and resilient</b>
          <br />
          Upstate Mesh is decentralized - there is no central server or
          corporation - all the communication bounces through the entire mesh.
          Upstate Mesh is open to everyone - you don't have to ask permission to
          join and all of the software is open-source. Upstate Mesh is resilient
          - solar-powered radios don't need cell phone towers, internet access,
          or electricity. Hopefully, this project will inspire others to build
          things that are decentralized, open, and resilient.
        </li>
      </ol>
      <Typography component="h5" variant="h5">
        Comparing it to APRS on amateur radio bands
      </Typography>
      <Typography>
        For people who are familiar with using the{" "}
        <a
          href="https://en.wikipedia.org/wiki/Automatic_Packet_Reporting_System"
          target="_blank"
          title="Automatic Packet Reporting System"
        >
          Automatic Packet Reporting System
        </a>{" "}
        (APRS) on ham radio, Meshtastic is similar in a few ways:
      </Typography>
      <Typography component="h6" variant="h6">
        Similarities
      </Typography>
      <ul>
        <li>
          <b>Digipeaters</b>
          <br />
          APRS radios can be set up as clients, which receive all messages and
          only transmit the users messages, or APRS radios can be set up as
          digipeaters, which repeat all the messages they hear. Meshtastic
          radios by default all act as repeaters – just like APRS digipeaters.
        </li>
        <li>
          <b>iGates</b>
          <br />
          MQTT Gateways are like APRS iGates – they repeat all local traffic
          over the internet to other MQTT Gateways around the world.
        </li>
        <li>
          <b>ANSRVR</b>
          <br />
          APRS users can subscribe to groups using the ANSRVR service. This
          allows for group chats like the popular #APRSThursday net. Meshtastic
          has “Secondary Channels” that can be subscribe to, allowing users to
          send messages to everyone on the channel.
        </li>
        <li>
          <b>Burst</b>
          <br />
          APRS uses the AX.25 protocol which sends messages using data bursts
          between 0.3 and 0.5 seconds long. Meshtastic uses the LoRa protocol
          which sends messages in data bursts between 0.5 and 10 seconds long.
        </li>
      </ul>
      <Typography component="h6" variant="h6">
        Differences
      </Typography>
      <Typography>
        But Meshtastic is also <strong>different</strong> than APRS in a few
        ways:
      </Typography>
      <ul>
        <li>
          <b>Primary</b>
          <br />
          APRS doesn’t have a way to broadcast a message to everyone on the
          network. Messages sent to Meshtastic's Primary Channel go to everyone.
        </li>
        <li>
          <b>Encryption</b>
          <br />
          APRS is unencrypted because it is against FCC regulations to use
          encryption on amateur radio bands/modes. Meshtastic is encrypted for
          communications on private group channels and for direct messages
          between users, because it runs on the 900 MHz ISM band, which does not
          have restrictions on encryption.
        </li>
        <li>
          <b>License</b>
          <br />
          APRS requires the user to have a technician amateur radio license.
          Meshtastic does not require any license and is open for anyone to use.
        </li>
        <li>
          <b>Equipment cost</b>
          <br />
          APRS capable handheld ham radios cost upwards of $400. Meshtastic
          radios cost less than $100.
        </li>
        <li>
          <b>Email</b>
          <br />
          APRS has services which allow users to send emails and SMS text
          messages to people who aren’t ham radio users. Meshtastic does not
          have this feature but it could be added in the future.
        </li>
        <li>
          <b>Simplicity</b>
          <br />
          APRS is quite a bit more difficult to use than Meshtastic. APRS does
          not have any standardized user interface – there are dozens of
          software packages available. Meshtastic has a standardized iPhone and
          Android app which is easy to understand for new users.
        </li>
      </ul>
    </>
  );
}
