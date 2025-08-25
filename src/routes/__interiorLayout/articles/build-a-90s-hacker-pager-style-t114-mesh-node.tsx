import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute(
  "/__interiorLayout/articles/build-a-90s-hacker-pager-style-t114-mesh-node",
)({
  component: RouteComponent,
});

const rows = [
  createData(
    "Heltec Mesh Node T114 with Display - Kit including 1200mAh Battery",
    1,
    "https://muzi.works/products/heltec-t114-kit-h1-battery",
    "Why are we suggesting you get this kit instead of just individual parts? This has everything you need (aside from the case) to begin assembling with no soldering required.",
  ),
  createData(
    "H2T - Case for Heltec T114 with GPS running Meshtastic",
    1,
    "https://www.printables.com/model/982046-h2t-case-for-heltec-t114-with-gps-running-meshtast",
    "Recommended to print in PETG if you have it (or something strong/heat resistant), if not, PLA will work. Don't have a printer, but live in the Capital Region? Hit us up on Discord and we'll set you up with a case.",
  ),
  createData(
    "Pager Style Holster for the muzi.works H2T Heltec T114 Case",
    1,
    "https://www.printables.com/model/1080074-pager-style-holster-for-the-muziworks-h2t-heltec-t",
    "Recommended to print in PETG if you have it (or something strong/heat resistant), if not, PLA will work. Don't have a printer, but live in the Capital Region? Hit us up on Discord and we'll set you up with a holster.",
  ),
  createData(
    "Baofeng style belt clip",
    1,
    "https://www.amazon.com/dp/B00EV58TRQ",
    "There are others available elsewhere, it just needs to be compatible with this screw hole layout.",
  ),
  createData(
    "M2.5 hex nuts or heat set insets",
    2,
    undefined,
    "Go with whichever you prefer. The model author offers variants for either, so it depends on your tools and comfort level.",
  ),
];

function createData(
  name: string,
  quantity: number,
  url?: string,
  notes?: string,
) {
  return { name, quantity, url, notes };
}

function RouteComponent() {
  return (
    <>
      <Typography component="h1" variant="h4">
        Build a 90's hacker pager-style T114 mesh node
      </Typography>
      <Typography variant="caption">
        Use modern tech to build a Meshtastic text messaging node that goes
        wherever you go, complete with a 90's hacker cyberpunk aesthetic. Trust
        your technolust.
      </Typography>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: "auto" }}
      >
        <source src="/um_t114_article.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <Typography component="h5" variant="h5">
        Who is this for?
      </Typography>
      <Typography>
        Someone who wants to dive into the world of off-grid text messaging with
        Meshtastic, but doesn't know where to begin. The intention behind this
        article is to present an entry point to the hobby. It's a combination of
        other nerdy hobbies including, but not limited to electronics, amateur
        radio, 3D printing, making things, tinkering around, etc. So if that
        sounds like your jam and you want to build a chonky 90s pager-style
        node, read on.
      </Typography>
      <Typography component="h5" variant="h5">
        Required Tools
      </Typography>
      <ul>
        <li>
          A precision driver/bit set. The sort of thing to drive machine screws.
        </li>
        <li>
          Access to a 3D printer to print the case and very hip belt holster.`
        </li>
      </ul>
      <Typography component="h5" variant="h5">
        Bill of materials
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {!row.url && <>{row.name}</>}
                  {row.url && (
                    <a href={row.url} target="_blank" title={row.name}>
                      {row.name}
                    </a>
                  )}
                </TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell>{row.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
