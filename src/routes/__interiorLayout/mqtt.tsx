import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { createFileRoute } from "@tanstack/react-router";

const PAGE_TITLE = "MQTT - Upstate Mesh";

export const Route = createFileRoute("/__interiorLayout/mqtt")({
  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content: "How to setup MQTT to show up on the Upstate Mesh map.",
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
        MQTT
      </Typography>
      <Typography>
        Within the mesh network, MQTT is used as a means of{" "}
        <a
          href="http://mqtt.upstatemesh.org/map"
          target="_blank"
          title="visualizing"
        >
          visualizing
        </a>{" "}
        mesh activity on nodes which have Internet access, via a map. An Upstate
        Mesh MQTT server is setup for use in the region.
      </Typography>
      <Typography>
        It is <b>not</b> a substitue for building a robust, resilient mesh
        network. Bridging nodes through the Internet would present a false
        representation of the reality off-grid.
      </Typography>
      <Typography>
        Content on this page has been adapted with thanks to PugetMesh.
      </Typography>
      <Typography variant="h5">
        How to configure your node for Meshview
      </Typography>
      <Typography variant="h6">Basic configuration</Typography>
      <Typography>
        Completing the basic configuration will allow <strong>other</strong>{" "}
        MQTT enabled nodes to share your node's info to the MQTT server.
      </Typography>
      <Typography>
        The packets gathered by the MQTT server may be{" "}
        <a
          href="http://mqtt.upstatemesh.org/"
          title="Meshview map"
          target="_blank"
        >
          visualized on the Meshview map
        </a>
        . They are also bridged to upstream MQTT servers including{" "}
        <a href="https://meshmap.net/" title="MeshMap" target="_blank">
          https://meshmap.net/
        </a>{" "}
        and{" "}
        <a
          href="https://meshtastic.liamcottle.net/"
          title="Meshtastic Map"
          target="_blank"
        >
          https://meshtastic.liamcottle.net/
        </a>
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }}>
          <TableBody>
            <TableRow>
              <TableCell>
                <strong>Enable "OK to MQTT":</strong> Navigate to{" "}
                <code>Settings &gt; LoRa</code>. Set <code>"Ok to MQTT"</code>{" "}
                to <code>TRUE</code>. This allows your node information to be
                shared with the MQTT server by other nodes on the mesh.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>
                  Enable Position Sharing (optional, recommended):
                </strong>{" "}
                Navigate to{" "}
                <code>Settings &gt; Channels &gt; Primary Channel</code> and set{" "}
                <code>"Position Enabled"</code> to <code>TRUE</code>. Also set{" "}
                <code>"Uplink Enabled"</code> to <code>TRUE</code>. This allows
                your node's position and recieved messages to be shared with
                other nodes and the MQTT server.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Set Position Precision:</strong> Set the position
                precision slider to a value you are comfortable with sharing
                publicly. Meshview will represent your position with the
                accuracy that you select for public channels and MapInfo
                packets.
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <strong>Configure Your Position:</strong> Use GPS (if your
                device has a GPS module) or set a fixed position in{" "}
                <code>Settings &gt; Position</code>.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h6">MQTT configuration</Typography>
      <Typography>
        Users who connect to MQTT can share what their node is hearing on the
        mesh network.
      </Typography>
      <Typography>
        Connecting your node to the MQTT server allows your data to contribute
        to analysis of the regional mesh network and helps everyone better
        understand network coverage via the map.
      </Typography>
      <Typography>
        To connect your node to the UpstateMesh MQTT server, configure these
        settings in <code>Settings &gt; MQTT</code>:
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }}>
          <TableBody>
            <TableRow>
              <TableCell>
                <strong>Enabled:</strong> <code>TRUE</code>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>MQTT Client Proxy:</strong> <code>TRUE</code> if your
                node only has access to the internet through the device running
                the Meshtastic app. If your node has access to the internet via
                wifi or some other means, set it to <code>FALSE</code>.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Encryption enabled:</strong> <code>TRUE</code>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Root topic:</strong> <code>msh/US/NY</code>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Server address:</strong>{" "}
                <code>mqtt.upstatemesh.org</code>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Username:</strong> <code>meshdev</code>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <strong>Password:</strong> <code>large4cats</code>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h6">Primary channel configuration</Typography>
      <Typography>
        Each channel you wish to connect to the MQTT server needs to be
        configured separately.
      </Typography>
      <Typography>
        <strong>If you just want to appear on the map</strong>, it's recommended
        to configuring your <code>"Primary Channel"</code> to set{" "}
        <code>"Uplink Enabled"</code> to <code>TRUE</code>. Downlink MQTT is not
        enabled on the primary channel. Even if activated, the node will{" "}
        <strong>not</strong> receive downlink packets.
      </Typography>
      <Typography variant="h6">
        Upstate Mesh private channel configuration
      </Typography>
      <Typography>
        You <strong>are</strong> allowed to configure both{" "}
        <code>"Uplink Enabled"</code> and <code>"Downlink Enabled"</code> to{" "}
        <code>TRUE</code> in the <code>"Upsate Mesh"</code> private channel.
        This channel is like a big regional chat room over the mesh and MQTT.
      </Typography>
      <Typography>
        We are only using this as a stopgap measure while we build a robust
        mesh, to ensure more remote nodes are able to be participate.
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }}>
          <TableBody>
            <TableRow>
              <TableCell>
                <strong>Channel Number:</strong> <code>1</code>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Name:</strong> <code>UpstateMesh</code>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Key Size:</strong> <code>256 bit</code>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Key:</strong>{" "}
                <code>dsb2L/BYJ0XtOiWFiy/hoLKha1NIlEiKY6RA8jw2zSM=</code>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <strong>Channel Role:</strong> <code>Secondary</code>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography>
        If you need assistance setting up your device, hop into the Discord and
        give a shout!
      </Typography>
    </>
  );
}
