import { ReactNode } from "react";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { createFileRoute } from "@tanstack/react-router";

import Step from "../../../Step";

const PAGE_TITLE =
  "Build a '90s hacker pager-style T114 mesh node - Upstate Mesh";

export const Route = createFileRoute(
  "/__interiorLayout/articles/build-a-90s-hacker-pager-style-t114-mesh-node",
)({
  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content:
          "Use modern tech to build a Meshtastic text messaging node that goes wherever you go, complete with a '90s hacker cyberpunk aesthetic.",
      },
    ],
    title: PAGE_TITLE,
  }),
  component: RouteComponent,
});

const rows = [
  createData(
    "Heltec Mesh Node T114 with Display - Kit including 2000mAh Battery",
    1,
    "https://muzi.works/products/heltec-t114-kit",
    "Why am I suggesting you get this kit instead of just individual parts? It has everything you need (aside from the case) to begin assembly. There is no soldering required and it will all fit in the case just right.",
  ),
  createData(
    "H2T - Case for Heltec T114 with GPS running Meshtastic",
    1,
    "https://www.printables.com/model/982046-h2t-case-for-heltec-t114-with-gps-running-meshtast",
    "I recommend you print it in PETG if you have it (or something strong/heat resistant). If not, PLA will work. Just pick a fun color you like!",
  ),
  createData(
    "Pager Style Holster for the muzi.works H2T Heltec T114 Case",
    1,
    "https://www.printables.com/model/1080074-pager-style-holster-for-the-muziworks-h2t-heltec-t",
    "I recommend you print it in PETG if you have it (or something strong/heat resistant). If not, PLA will work. Just pick a fun color you like!",
  ),
  createData(
    "Baofeng style belt clip",
    1,
    "https://www.amazon.com/dp/B00EV58TRQ",
    "There are others available elsewhere, it just needs to be compatible with this screw hole layout.",
  ),
  createData(
    "M2.5 hex nuts or heat set inserts",
    2,
    undefined,
    "Go with whichever you prefer. The model author offers variants for either, so it depends on your tools and comfort level.",
  ),
  createData(
    "M2.5 machine screws",
    2,
    undefined,
    "Attaches the holster to the belt clip via your choice above of hex nuts or heat insets",
  ),
  createData(
    "M2.5 washers",
    2,
    undefined,
    "Used as spacers between the screws and hex nuts on the holster.",
  ),
  createData(
    "M3 x 16mm machine screw",
    1,
    undefined,
    "Mechanically attaches the front to the back of the case",
  ),
];

function createData(
  name: string,
  quantity: number,
  url?: string,
  notes?: ReactNode,
) {
  return { name, quantity, url, notes };
}

function RouteComponent() {
  return (
    <>
      <Stack spacing={1}>
        <Typography component="h1" variant="h4">
          Build a '90s hacker pager-style T114 mesh node
        </Typography>
        <Typography variant="caption">
          Use modern tech to build a Meshtastic text messaging node that goes
          wherever you go, complete with a '90s hacker cyberpunk aesthetic.
          Trust your technolust.
        </Typography>
        <Typography variant="caption">
          By Craig KD2NSP | August 31, 2025
        </Typography>
      </Stack>
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
        This is for anyone curious about off-grid text messaging with Meshtastic
        but unsure where to start. The intention behind this article is to
        present an entry point to the hobby.
      </Typography>
      <Typography>
        It's a combination of other nerdy hobbies including electronics, amateur
        radio, 3D printing, making things, tinkering around, etc. So if that
        sounds like your jam and you want to build a chonky 90s pager-style
        node, read on.
      </Typography>
      <Typography component="h5" variant="h5">
        What does the completed build look like?
      </Typography>
      <img
        src="/pager_completed.jpg"
        alt="Completed T114 build"
        style={{ width: "100%", height: "auto" }}
      />
      <Typography component="h5" variant="h5">
        Required tools
      </Typography>
      <ul>
        <li>A precision driver/bit set for machine screws.</li>
        <li>
          Access to a 3D printer for the case and belt holster. Don't have a
          printer, but live in the Capital District? Hit us up on Discord and
          we'll set you up with a case and holster.
        </li>
        <li>
          Optionally, a soldering iron for heat set inserts on the holster if
          you prefer that approach vs. hex nuts.
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
                    <Link
                      href={row.url}
                      target="_blank"
                      title={row.name}
                      rel="noopener noreferrer"
                      sx={{ display: "inline-flex", alignItems: "center" }}
                    >
                      {row.name}
                      <Box component="span" sx={{ ml: 0.5, lineHeight: 0 }}>
                        <OpenInNewIcon fontSize="small" />
                      </Box>
                    </Link>
                  )}
                </TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell>{row.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography component="h6" variant="h6">
        Rough total cost
      </Typography>
      <Typography>
        Average cost: about $70 USD (as of August 2025, excluding shipping and
        assuming you already have 3D printing materials and some machine
        screws).
      </Typography>
      <Typography component="h5" variant="h5">
        Let's build!
      </Typography>
      <Typography>
        Now that we've sourced all our parts and have our tools ready, let's
        make it happen.
      </Typography>
      <Step
        stepNum={0}
        title="Optional, but encouraged: get your vibes in order"
        vidSrc="https://www.youtube.com/embed/sAt02YId4ks?si=DkrG-kaxVOak8vWQ"
        description="Anything from the Hackers soundtrack will do."
      />
      <Step
        stepNum={1}
        title="Print all 3D printed parts"
        imgSrc="/pager_step_0.jpg"
        description="1x case front, 1x case back, 1x holster. I recommend PETG, but you'd probably be okay with PLA too, just don't leave it in the sun."
      />
      <Step
        stepNum={2}
        title="Bench test electronics"
        imgSrc="/pager_step_1.jpg"
        description={
          <ul>
            <li>
              Doing this prevents a situation where you fully assemble the node,
              then have to take it all apart again if troubleshooting is
              required. Trust me- I've been there. We're just looking to
              validate that everything powers up as expected.
            </li>
            <li>
              <strong>
                Ensure the antenna and GPS module are connected to the PCB
                <i> before</i> hooking up the battery or USB-C power.
              </strong>{" "}
              Without connecting the antennas, the microcontroller could be
              damaged when powered up.
            </li>
            <li>
              The GPS module only connects one way, so carefully check the
              orientation before connecting.
            </li>
            <li>
              The antenna pigtail can be tricky to push down onto the PCB. Be
              firm, but do not use too much force.
            </li>
          </ul>
        }
      />
      <Step
        stepNum={3}
        title="Organize your parts into groups"
        imgSrc="/pager_step_2.jpg"
        description={
          <ol>
            <li>
              Group 1:
              <ul>
                <li>Case front</li>
                <li>PCB</li>
                <li>GPS module</li>
                <li>Antenna and pigtail</li>
                <li>M3 x 16mm machine screw</li>
              </ul>
            </li>
            <li>
              Group 2:
              <ul>
                <li>Case back</li>
                <li>2000mAh LiPo</li>
              </ul>
            </li>
            <li>
              Group 3:
              <ul>
                <li>Holster</li>
                <li>Belt clip</li>
                <li>M2.5 hex nuts or heat set insets</li>
                <li>M2.5 x 4mm machine screws</li>
              </ul>
            </li>
          </ol>
        }
      />
      <Step
        stepNum={4}
        title="Dry fit the M3 x 16mm screw"
        imgSrc="/pager_step_3.jpg"
        description={
          <>
            You'll want to do this before final assembly, to "drill" into the
            back of the case, making it simpler when the time comes. Keep in
            mind you're screwing this into plastic with no threads, so make sure
            to do it by hand. Remove the screw, setting it aside for a later
            step.
          </>
        }
      />
      <Step
        stepNum={5}
        title="Remove the 2 screws holding the plastic cover over the screen"
        imgSrc="/pager_step_5.jpg"
        description={
          <>
            Be <strong> very careful </strong> when doing this. The screen will
            be loose, connected to the PCB only by a ribbon cable. Set the
            screws aside for step 7.
          </>
        }
      />
      <Step
        stepNum={6}
        title="Separate the antenna, washers, and hex nut"
        imgSrc="/pager_step_4.jpg"
        description={<>This is preparation for the next step.</>}
      />
      <Step
        stepNum={7}
        title="Assemble the front of the case"
        imgSrc="/pager_step_6.jpg"
        description={
          <ol>
            <li>
              Insert the buttons face down into the case, everything else will
              stack above.
            </li>
            <li>
              Insert the SMA antenna connector into the hex-shaped slot on the
              top, stack the washers and screw on the retention nut to the top.
            </li>
            <li>
              Connect the GPS module and antenna pigtail to the PCB, being
              careful not to damage the LCD or ribbon cable.
            </li>
            <li>
              Carefully thread the antenna pigtail through the inset portion of
              the case, just above where the PCB will slot into the case.
            </li>
            <li>
              Align the LCD and PCB, slotting it into the case at the edge where
              the USB-C connector fits in.
            </li>
            <li>
              Carefully press it down into the alignment slot. This may require
              flipping it over to ensure the LCD is correctly aligned.
            </li>
            <li>
              Gently push the GPS module into its slot on the left side of the
              case, with the ceramic portion of the antenna facing out, chipset
              and connector facing in.
            </li>
            <li>
              With everything correctly aligned and in place, screw in the 2
              small screws we saved from the PCB in step 5 to the right side of
              the PCB in the two holes adjacent to the power connectors.
            </li>
          </ol>
        }
      />
      <Step
        stepNum={8}
        title="Line up the battery"
        imgSrc="/pager_step_8.jpg"
        description={
          <>
            Be <strong> careful </strong> when doing this. It will fit, but
            quite snugly. Make sure to align it as in the photo, so the
            connector has space.
          </>
        }
      />
      <Step
        stepNum={9}
        title="Connect the battery"
        imgSrc="/pager_step_9.jpg"
        description={
          <>
            Flip the back over and connect the battery, tucking the wire into
            the open space reserved for it.
          </>
        }
      />
      <Step
        stepNum={10}
        title="Final node assembly"
        imgSrc="/pager_step_10.jpg"
        description={
          <>
            Firmly press the two halves of the case together. It will click when
            everything is lined up and closed. Screw in the M3 screw we dry fit
            earlier.
          </>
        }
      />
      <Step
        stepNum={11}
        title="Attach belt clip to holster"
        imgSrc="/pager_step_11.jpg"
        description={
          <>
            If you decided to go the heat set route, you'll need to get those
            lined up in the holster. If you went the hex nut route, they'll fit
            to the slots on the inside of the holster. All that remains is to
            screw the M2.5 screws through the back of the belt clip into the
            holster. This can be tricky as the springs on the clip require a bit
            of strength to hold in place while driving the screws.
          </>
        }
      />
      <Typography component="h5" variant="h5">
        All done!
      </Typography>
      <Typography>
        That's it, you've completed the build. All that's left is to connect it
        to your Meshtastic mobile app,{" "}
        <a
          href="https://meshtastic.org/downloads/"
          target="_blank"
          title="flash the latest firmware"
        >
          flash the latest firmware
        </a>
        , and you're on the mesh.
      </Typography>
      <Typography>
        Hope you had fun with this build! If you run into issues or just want to
        share your finished node, hop into our Discord and give a shout.
      </Typography>
    </>
  );
}
