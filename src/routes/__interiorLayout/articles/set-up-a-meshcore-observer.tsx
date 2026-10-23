import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { createFileRoute, Link } from "@tanstack/react-router";

import CodeBlock from "../../../CodeBlock";
import { DISCORD_URL, MQTT_HOST, MQTT_URL } from "../../../site";
import Step from "../../../Step";

const PAGE_TITLE = "Set up a MeshCore observer - Upstate Mesh";

export const Route = createFileRoute(
  "/__interiorLayout/articles/set-up-a-meshcore-observer",
)({
  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content:
          "Turn a Wi-Fi LoRa board into an observer that puts what it hears on the Upstate Mesh live map. No account or password needed.",
      },
    ],
    title: PAGE_TITLE,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Stack spacing={1}>
        <Typography component="h1" variant="h4">
          Set up a MeshCore observer
        </Typography>
        <Typography variant="caption">
          Turn a Wi-Fi LoRa board into an observer that puts what it hears on
          the Upstate Mesh live map.
        </Typography>
        <Typography variant="caption">
          By Upstate Mesh | October 22, 2026
        </Typography>
      </Stack>
      <Typography component="h5" variant="h5">
        What you're building
      </Typography>
      <Typography>
        An observer is a MeshCore radio that listens to the mesh and reports
        every packet it hears over the internet. Those reports power our{" "}
        <Link to="/live" title="Live tools">
          live map, CoreScope and health check
        </Link>
        , and we pass them on to Capital District Mesh so they show up on their
        tools too. Every observer adds another set of ears, which makes the
        coverage picture more complete for everyone.
      </Typography>
      <Typography>
        This guide uses the MeshCore observer firmware, which connects to Wi-Fi
        by itself, so there's no Raspberry Pi or computer to keep running. It
        logs in to our server with its own node key, so there's no account to
        sign up for and no password to ask us for.
      </Typography>
      <Typography component="h5" variant="h5">
        What you need
      </Typography>
      <ul>
        <li>
          An ESP32 LoRa board with Wi-Fi, like a Heltec V3 or V4, with an
          antenna attached. Never power up a LoRa radio without its antenna.
        </li>
        <li>A USB cable and a computer with Chrome or Edge for flashing.</li>
        <li>
          A spot with Wi-Fi and power. Higher is better, but a window facing the
          rest of the mesh works fine. A spot that isn't good enough for a
          repeater can still make a useful observer.
        </li>
      </ul>
      <Typography component="h5" variant="h5">
        Steps
      </Typography>
      <Step
        stepNum={1}
        title="Flash the observer firmware"
        description={
          <>
            Open the{" "}
            <a
              href="https://observer.gessaman.com/"
              target="_blank"
              title="MeshCore observer flasher"
            >
              MeshCore observer flasher
            </a>{" "}
            in Chrome or Edge, pick <b>MQTT Observer Firmware</b> and your
            board, and flash it over USB.
          </>
        }
      />
      <Step
        stepNum={2}
        title="Open the console"
        description={
          <>
            The rest of the setup is typed commands. Connect to the board with a
            serial terminal at 115200 baud, or log in to it as a repeater admin
            from the MeshCore companion app and use its command line.
          </>
        }
      />
      <Step
        stepNum={3}
        title="Set the radio"
        description={
          <>
            Match the{" "}
            <Link to="/join" title="Join">
              Upstate Mesh radio settings
            </Link>
            , or your observer won't hear anything:
            <CodeBlock lines={["set radio 910.525,62.5,7,5", "set tx 22"]} />
          </>
        }
      />
      <Step
        stepNum={4}
        title="Name it and set the airport code"
        description={
          <>
            Pick a name people will recognize on the map, and set the nearest
            airport code in capitals. Most of our area is <code>ALB</code>.
            Optionally, set a rough location so it appears in the right place.
            The town level is plenty.
            <CodeBlock
              lines={[
                "set name YourCall-Observer",
                "set mqtt.iata ALB",
                "set lat 42.65",
                "set lon -73.75",
              ]}
            />
          </>
        }
      />
      <Step
        stepNum={5}
        title="Connect to Wi-Fi"
        description={
          <>
            Everything after the first space is used as-is, so don't add quotes:
            <CodeBlock
              lines={[
                "set wifi.ssid YourWiFiNetwork",
                "set wifi.pwd YourWiFiPassword",
              ]}
            />
          </>
        }
      />
      <Step
        stepNum={6}
        title="Point it at Upstate Mesh"
        description={
          <>
            Out of the box, slot 1 reports to LetsMesh US and slot 2 to LetsMesh
            EU. Leave slot 1 alone and switch slot 2 to our server. Setting the
            audience is what makes it log in with its node key.
            <CodeBlock
              lines={[
                "set mqtt2.preset custom",
                `set mqtt2.server ${MQTT_URL}`,
                `set mqtt2.audience ${MQTT_HOST}`,
              ]}
            />
            Boards without PSRAM, like the Heltec V3, can only hold two secure
            connections at once, which is why we reuse slot 2 instead of adding
            a third.
          </>
        }
      />
      <Step
        stepNum={7}
        title="Make it listen only"
        description={
          <>
            An observer's job is to listen. Turning off repeating keeps it from
            adding traffic to the mesh, which matters most when it's indoors or
            close to an existing repeater:
            <CodeBlock lines={["set repeat off"]} />
          </>
        }
      />
      <Step
        stepNum={8}
        title="Reboot and check"
        description={
          <>
            Reboot, then check that it's on Wi-Fi and connected to its servers:
            <CodeBlock
              lines={["reboot", "get link.status", "get mqtt.status"]}
            />
            Within a few minutes your observer should appear on the{" "}
            <Link to="/live" title="Live tools">
              live tools
            </Link>{" "}
            and the{" "}
            <a
              href="https://cdme.sh/observers"
              target="_blank"
              title="Capital District Mesh observers"
            >
              Capital District Mesh observer list
            </a>
            .
          </>
        }
      />
      <Typography component="h5" variant="h5">
        Not working?
      </Typography>
      <ul>
        <li>
          <b>No Wi-Fi:</b> <code>get link.status</code> shows why it
          disconnected. Double-check the network name and password, and that the
          board is within range of a 2.4 GHz network.
        </li>
        <li>
          <b>Not connecting to our server:</b> <code>get mqtt2.diag</code> shows
          TLS, network and clock errors. Token logins fail if the clock is
          wrong, so check <code>get mqtt.ntp.diag</code> too.
        </li>
        <li>
          <b>Connected but not on the map:</b> make sure{" "}
          <code>get mqtt.iata</code> shows an uppercase code like{" "}
          <code>ALB</code>. Our server rejects lowercase codes and placeholders
          like <code>XXX</code>.
        </li>
        <li>
          <b>Hearing nothing:</b> check the radio settings in step 3 and that
          the antenna is connected.
        </li>
      </ul>
      <Typography>
        Using pyMC_Repeater, or a radio plugged into a Raspberry Pi instead? See{" "}
        <Link to="/mqtt" title="Observers & MQTT">
          Observers &amp; MQTT
        </Link>{" "}
        for those settings. Stuck on anything else? Ask in our{" "}
        <a href={DISCORD_URL} target="_blank" title="Discord server">
          Discord
        </a>
        .
      </Typography>
      <Typography variant="caption">
        Commands are from the observer firmware's{" "}
        <a
          href="https://github.com/agessaman/MeshCore/blob/observer-firmware-dev/MQTT_IMPLEMENTATION.md"
          target="_blank"
          title="MQTT observer firmware documentation"
        >
          documentation
        </a>
        , which covers every setting in detail.
      </Typography>
    </>
  );
}
