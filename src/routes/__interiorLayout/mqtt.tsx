import Typography from "@mui/material/Typography";
import { createFileRoute, Link } from "@tanstack/react-router";

import CodeBlock from "../../CodeBlock";
import { DISCORD_URL, MQTT_HOST, MQTT_URL } from "../../site";

const PAGE_TITLE = "Observers & MQTT - Upstate Mesh";

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
        An observer is a MeshCore radio that forwards every packet it overhears
        to MQTT servers over the internet. It can be a Wi-Fi board running
        observer firmware, or a radio plugged into an always-on computer, such
        as a Raspberry Pi, running a small bridge program (meshcoretomqtt).
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
        Send your observer's data to the Upstate Mesh MQTT server,{" "}
        <code>{MQTT_HOST}</code>. There's no account to sign up for and no
        password to ask for: your observer logs in with a token signed by its
        own node key, the same way it logs in to LetsMesh and MeshMapper. We
        forward everything on to{" "}
        <a
          href="https://cdme.sh/"
          target="_blank"
          title="Capital District Mesh"
        >
          Capital District Mesh
        </a>
        , so one setup puts you on our live tools and theirs.
      </Typography>
      <Typography>The settings, whichever software you use:</Typography>
      <ul>
        <li>
          <b>Server:</b> <code>{MQTT_URL}</code> (port 443, WebSockets over TLS)
        </li>
        <li>
          <b>Login:</b> token signed by your node's key. Your software fills in
          the username (<code>v1_</code> plus your public key) and the token for
          you.
        </li>
        <li>
          <b>Audience:</b> <code>{MQTT_HOST}</code>
        </li>
        <li>
          <b>Airport code:</b> the nearest airport, in capitals, like{" "}
          <code>ALB</code>. Lowercase codes are rejected.
        </li>
      </ul>
      <Typography component="h6" variant="h6">
        Wi-Fi observer firmware
      </Typography>
      <Typography>
        The easiest observer is a Wi-Fi board, like a Heltec V3 or V4, running
        the MeshCore observer firmware from the{" "}
        <a
          href="https://observer.gessaman.com/"
          target="_blank"
          title="MeshCore observer flasher"
        >
          observer flasher
        </a>
        . It needs no separate computer. Fresh installs report to LetsMesh US in
        slot 1 and LetsMesh EU in slot 2. Once it's on your Wi-Fi, point slot 2
        at Upstate Mesh instead:
      </Typography>
      <CodeBlock
        lines={[
          "set mqtt.iata ALB",
          "set mqtt2.preset custom",
          `set mqtt2.server ${MQTT_URL}`,
          `set mqtt2.audience ${MQTT_HOST}`,
        ]}
      />
      <Typography>
        Setting an audience is what switches the slot to token login. Boards
        without PSRAM, like the Heltec V3, can only hold two secure connections
        at once, which is why we reuse slot 2 rather than adding a third. See
        our{" "}
        <Link
          to="/articles/set-up-a-meshcore-observer"
          title="Set up a MeshCore observer"
        >
          step-by-step observer guide
        </Link>{" "}
        for the full setup.
      </Typography>
      <Typography component="h6" variant="h6">
        Raspberry Pi with meshcoretomqtt
      </Typography>
      <Typography>
        If your radio is plugged into a computer running{" "}
        <a
          href="https://github.com/Cisien/meshcoretomqtt"
          target="_blank"
          title="meshcoretomqtt"
        >
          meshcoretomqtt
        </a>
        , add a file such as{" "}
        <code>/etc/mctomqtt/config.d/30-upstatemesh.toml</code> and restart the
        service:
      </Typography>
      <CodeBlock
        lines={[
          "[[broker]]",
          'name = "upstatemesh"',
          "enabled = true",
          `server = "${MQTT_HOST}"`,
          "port = 443",
          'transport = "websockets"',
          "keepalive = 60",
          "qos = 0",
          "retain = true",
          "",
          "[broker.tls]",
          "enabled = true",
          "verify = true",
          "",
          "[broker.auth]",
          'method = "token"',
          `audience = "${MQTT_HOST}"`,
          "",
          "# Only needed if your [general] iata is lowercase.",
          "[broker.topics]",
          'iata = "ALB"',
        ]}
      />
      <Typography component="h6" variant="h6">
        Check that it's working
      </Typography>
      <Typography>
        Within a few minutes your observer should appear on the{" "}
        <Link to="/live" title="Live tools">
          live tools
        </Link>{" "}
        and on{" "}
        <a
          href="https://cdme.sh/observers"
          target="_blank"
          title="Current observers"
        >
          the Capital District Mesh observer list
        </a>
        . If your software can't do token login, ask in our{" "}
        <a href={DISCORD_URL} target="_blank" title="Discord server">
          Discord
        </a>{" "}
        and we'll set you up with a username and password instead. Want help
        building an observer? Ask there too.
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
