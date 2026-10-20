import { ReactNode } from "react";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
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

const PAGE_TITLE = "Regions - Upstate Mesh";

const GREEN = "#75eba5";
const DROP = "#f28b66";
const MUTED = "rgba(255,255,255,0.5)";

export const Route = createFileRoute("/__interiorLayout/regions")({
  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content:
          "How MeshCore regions (scopes) work and which regions Upstate Mesh supports.",
      },
    ],
    title: PAGE_TITLE,
  }),
  component: RouteComponent,
});

const ourRegions = [
  {
    name: "alb",
    area: "Capital District (Albany, Schenectady, Troy, Saratoga)",
    use: "Everyday messages. This should be your default.",
  },
  {
    name: "hud",
    area: "Hudson Valley",
    use: "Shared with our Hudson Valley and NYC neighbors. Repeaters toward the south of our area carry it.",
  },
  {
    name: "northeast",
    area: "The northeastern US",
    use: "Emergencies only.",
  },
  {
    name: "east",
    area: "The eastern US",
    use: "Emergencies only.",
  },
];

const neighborRegions = [
  {
    network: "Western NY (Buffalo)",
    regions: ["na", "us", "east", "northeast", "us-ny", "wny", "onny"],
    notes: (
      <>
        <code>na</code> is North America, <code>wny</code> is Western NY, and{" "}
        <code>onny</code> is for cross-border Ontario / New York traffic.
      </>
    ),
  },
  {
    network: (
      <a href="https://nyme.sh/" target="_blank" title="nyme.sh">
        NYC (nyme.sh)
      </a>
    ),
    regions: ["nyc", "hud", "hv", "li"],
    notes: (
      <>
        <code>hud</code> and <code>hv</code> both mean Hudson Valley. We support{" "}
        <code>hud</code>. <code>li</code> is Long Island.
      </>
    ),
  },
  {
    network: (
      <a
        href="https://newenglandme.sh/regions/"
        target="_blank"
        title="New England Mesh regions"
      >
        New England Mesh
      </a>
    ),
    regions: ["me", "nh", "vt", "ma", "bos", "ct", "ri"],
    notes: (
      <>
        States plus sub-regions like <code>bos</code> (Boston). They treat{" "}
        <code>east</code> and <code>northeast</code> as emergency-only. See
        their full list for the rest.
      </>
    ),
  },
];

const floodRules = [
  {
    packet: "No scope",
    detail: "Legacy packet with no region tag",
    check: (
      <>
        Counts as the null region <code>*</code>, which is allowed by default
      </>
    ),
    forward: true,
  },
  {
    packet: "Scoped: alb",
    detail: "Tagged by the sender's app",
    check: (
      <>
        <code>alb</code> is on this repeater's list, flood allowed (F)
      </>
    ),
    forward: true,
  },
  {
    packet: "Scoped: alb",
    detail: "Tagged by the sender's app",
    check: (
      <>
        <code>alb</code> is not on this repeater's list
      </>
    ),
    forward: false,
  },
];

const exampleRepeaters = [
  { id: "A", regions: ["east", "northeast", "alb"], status: "repeats" },
  { id: "B", regions: ["east", "northeast", "alb"], status: "repeats" },
  { id: "C", regions: ["east", "northeast", "alb", "hud"], status: "repeats" },
  { id: "D", regions: ["east", "northeast", "hud"], status: "drops" },
  { id: "E", regions: ["east", "northeast", "hud"], status: "never hears" },
] as const;

const myths = [
  {
    myth: "“alb sits under northeast, so a repeater that carries northeast also relays alb.”",
    reality: (
      <>
        The hierarchy is organizational only. It changes how a repeater's list
        is displayed and nothing about how packets are handled. Every scope is
        checked on its own, as a whole name. A repeater carrying{" "}
        <code>northeast</code> drops <code>alb</code> traffic unless{" "}
        <code>alb</code> is also on its list.
      </>
    ),
  },
  {
    myth: "“ALB and alb are the same region.”",
    reality: (
      <>
        The name is hashed exactly as typed, letter case included.{" "}
        <code>ALB</code>, <code>Alb</code> and <code>alb</code> are three
        different regions. Stick to lowercase letters, digits and hyphens, 29
        bytes max, no # needed.
      </>
    ),
  },
  {
    myth: "“Adding regions to my repeater will cut people off.”",
    reality: (
      <>
        Unscoped traffic still floods exactly as before. Nothing changes until
        senders start scoping, or an admin denies the null region.
      </>
    ),
  },
  {
    myth: "“Setting a scope limits what I can hear.”",
    reality: (
      <>
        A scope only tags what you send. Your companion still receives every
        message that reaches it, scoped or not.
      </>
    ),
  },
];

function Callout({ children }: { children: ReactNode }) {
  return (
    <Typography sx={{ borderLeft: `3px solid ${GREEN}`, pl: 2 }}>
      {children}
    </Typography>
  );
}

function CodeBlock({ lines }: { lines: string[] }) {
  return (
    <Paper sx={{ width: "100%", px: 2, py: 1.5, overflowX: "auto" }}>
      <Box component="pre" sx={{ m: 0 }}>
        <code>{lines.join("\n")}</code>
      </Box>
    </Paper>
  );
}

function RegionChip({ name }: { name: string }) {
  return (
    <Chip
      label={name}
      size="small"
      variant="outlined"
      sx={{ fontFamily: '"JetBrains Mono", monospace', borderColor: MUTED }}
    />
  );
}

function FloodRipple() {
  const nodes = [
    [135, 112, 1],
    [128, 196, 1],
    [206, 84, 1],
    [196, 222, 1],
    [268, 160, 1],
    [272, 56, 0.8],
    [276, 252, 0.8],
    [344, 118, 0.6],
    [350, 214, 0.6],
    [414, 72, 0.4],
    [408, 178, 0.4],
    [420, 262, 0.4],
  ];

  return (
    <Box
      component="svg"
      viewBox="0 0 440 300"
      aria-hidden="true"
      sx={{ width: "100%", maxWidth: 440, height: "auto", display: "block" }}
    >
      <defs>
        <clipPath id="ripple-clip">
          <rect width="440" height="300" rx="16" />
        </clipPath>
      </defs>
      <rect width="440" height="300" rx="16" fill="#3a3c4d" />
      <g
        clipPath="url(#ripple-clip)"
        fill="none"
        stroke={GREEN}
        strokeWidth={2}
      >
        {[75, 150, 225, 300, 375].map((r, i) => (
          <circle
            key={r}
            cx="70"
            cy="150"
            r={r}
            opacity={[0.85, 0.6, 0.4, 0.25, 0.15][i]}
          />
        ))}
      </g>
      <g fill={GREEN}>
        {nodes.map(([cx, cy, opacity]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6" opacity={opacity} />
        ))}
      </g>
      <circle cx="70" cy="150" r="10" fill={DROP} />
    </Box>
  );
}

function WorkedExample() {
  const statusColor = {
    repeats: GREEN,
    drops: DROP,
    "never hears": MUTED,
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Typography variant="caption">
        You send with scope <code>alb</code> from near repeater A.
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, minmax(0, 1fr))",
            sm: "repeat(5, minmax(0, 1fr))",
          },
          gap: 2,
          width: "100%",
        }}
      >
        {exampleRepeaters.map((repeater) => (
          <Paper
            key={repeater.id}
            sx={{
              p: 2,
              textAlign: "center",
              border: `2px ${repeater.status === "drops" ? "dashed" : "solid"} ${statusColor[repeater.status]}`,
              opacity: repeater.status === "never hears" ? 0.6 : 1,
            }}
          >
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: 800,
                color: statusColor[repeater.status],
              }}
            >
              {repeater.id}
            </Typography>
            <Typography
              variant="caption"
              component="div"
              sx={{
                fontWeight: 800,
                color: statusColor[repeater.status],
                mb: 1,
              }}
            >
              {repeater.status}
            </Typography>
            {repeater.regions.map((region) => (
              <Typography
                key={region}
                variant="caption"
                component="div"
                sx={{ fontFamily: '"JetBrains Mono", monospace' }}
              >
                {region}
              </Typography>
            ))}
          </Paper>
        ))}
      </Box>
      <Typography variant="caption">
        A and B are in the Capital District. C sits where the areas meet, so it
        carries both <code>alb</code> and <code>hud</code>. D and E are in the
        Hudson Valley.
      </Typography>
    </Stack>
  );
}

function RouteComponent() {
  return (
    <>
      <Typography component="h1" variant="h4">
        Regions
      </Typography>
      <Typography variant="caption">
        Region filtering needs repeater firmware 1.10+. A default scope needs
        firmware 1.15+ and app 1.43+.
      </Typography>
      <Typography>
        A region (the app calls it a <b>scope</b>) is a tag that tells repeaters
        how far a flood message is allowed to travel. Here is what it does, what
        it does not do, which regions Upstate Mesh supports, and how to set it
        up.
      </Typography>

      <Typography component="h5" variant="h5">
        Our regions
      </Typography>
      <Typography>
        Upstate Mesh repeaters carry these regions. If you're in the Capital
        District, scope your channels to <code>alb</code>.
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell>Region</TableCell>
              <TableCell>Area</TableCell>
              <TableCell>When to use it</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ourRegions.map((region) => (
              <TableRow
                key={region.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <code>{region.name}</code>
                </TableCell>
                <TableCell>{region.area}</TableCell>
                <TableCell>{region.use}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Callout>
        <b>
          <code>east</code> and <code>northeast</code> are for emergencies only
        </b>
        : an imminent threat to life or property. They reach well beyond our
        area, including our New England neighbors, who follow the same rule. For
        everything else, use <code>alb</code> (or <code>hud</code> if you're
        talking with the Hudson Valley).
      </Callout>

      <Typography component="h5" variant="h5">
        The problem: floods go everywhere
      </Typography>
      <Typography>
        MeshCore normally learns a path and sends messages straight down it.
        When it has no path, it floods: every repeater that hears the packet
        repeats it once, for up to 64 hops.
      </Typography>
      <Typography>
        Some traffic always floods: every group channel message, flood adverts,
        and DMs or logins sent before a path is known. On a mesh that spans the
        state, a “good morning” in Albany can eat airtime in Buffalo. Regions
        let the sender say how far is far enough.
      </Typography>
      <FloodRipple />
      <Typography variant="caption">
        One unscoped message: every repeater in range, ring after ring, until it
        runs out of hops or mesh.
      </Typography>

      <Typography component="h5" variant="h5">
        How it works
      </Typography>
      <ol>
        <li>
          <b>You pick a scope</b>
          <br />
          Set a region on a channel, or a default scope for everything you send.
          Leave it blank and the message goes out unscoped, like it always has.
        </li>
        <li>
          <b>The radio tags the packet</b>
          <br />
          The region name is turned into a short code carried in the packet
          header. The name itself never goes over the air.
        </li>
        <li>
          <b>Repeaters check their list</b>
          <br />
          Each repeater keeps a list of regions it will relay. It repeats a
          scoped flood only if that exact region is on its list.
        </li>
      </ol>

      <Typography component="h6" variant="h6">
        What every repeater does with a flood
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell>Packet arrives</TableCell>
              <TableCell>Repeater checks</TableCell>
              <TableCell>Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {floodRules.map((rule, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <b>{rule.packet}</b>
                  <br />
                  <Typography variant="caption">{rule.detail}</Typography>
                </TableCell>
                <TableCell>{rule.check}</TableCell>
                <TableCell>
                  <Box
                    component="b"
                    sx={{ color: rule.forward ? GREEN : DROP }}
                  >
                    {rule.forward ? "Forward" : "Drop"}
                  </Box>
                  <br />
                  <Typography variant="caption">
                    {rule.forward ? "repeats it once" : "goes no further"}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ul>
        <li>
          <b>The leak.</b> Repeaters older than 1.10 skip this check and forward
          everything, so scoped traffic slips past them until they are updated.
        </li>
        <li>
          <b>The off switch.</b> An admin can block the first row with{" "}
          <code>region denyf *</code>. MeshCore's guidance is not to do that
          yet.
        </li>
      </ul>

      <Typography component="h5" variant="h5">
        Worked example: Albany and the Hudson Valley
      </Typography>
      <Typography>
        Five repeaters, each showing the list its admin set up. Every one of
        them carries <code>east</code> and <code>northeast</code>.
      </Typography>
      <WorkedExample />
      <ul>
        <li>
          <b>Sent with scope alb:</b> A, B and C repeat it. D hears C but does
          not carry <code>alb</code>, so it drops the packet. E never hears it,
          so Hudson Valley airtime stays free.
        </li>
        <li>
          <b>Sent with scope northeast (emergencies only):</b> every repeater
          here carries <code>northeast</code>, so it crosses both areas and
          keeps going.
        </li>
      </ul>

      <Typography component="h5" variant="h5">
        Common mix-ups
      </Typography>
      {myths.map((item) => (
        <Callout key={item.myth}>
          <b>Myth: {item.myth}</b>
          <br />
          {item.reality}
        </Callout>
      ))}
      <Typography>
        What <code>region</code> prints on a repeater set up like ours. The
        indent is filing only. On the air these are separate, unrelated checks.
      </Typography>
      <CodeBlock lines={["* F", " east F", "  northeast F", "   alb F"]} />

      <Typography component="h5" variant="h5">
        Setting it up
      </Typography>
      <Typography component="h6" variant="h6">
        If you use the app
      </Typography>
      <ul>
        <li>
          <b>Scope a channel:</b> in a channel, open <b>Set Region Scope</b> and
          pick a region. The choice is saved per channel.
        </li>
        <li>
          <b>Set a default scope:</b> under <b>Experimental Settings</b>. It
          tags every flood you originate: adverts, plus DMs, logins and requests
          sent before a path is known. A channel's own scope overrides it.
        </li>
        <li>
          <b>Size it to the conversation:</b> pick a region that covers you and
          the person you are messaging. Their ACKs come back on the same scope.
        </li>
        <li>
          <b>See what is nearby:</b> the region picker can ask nearby repeaters
          which regions they carry, so you can choose one that will actually be
          relayed.
        </li>
      </ul>
      <Typography component="h6" variant="h6">
        If you run a repeater
      </Typography>
      <Typography>Carry our core regions:</Typography>
      <CodeBlock
        lines={[
          "region put east",
          "region put northeast east",
          "region put alb northeast",
          "region save",
          "region",
        ]}
      />
      <ul>
        <li>
          The second name on a <code>region put</code> line is only a display
          parent. It is optional and has no effect on forwarding.
        </li>
        <li>
          If your repeater is toward the Hudson Valley, also run{" "}
          <code>region put hud northeast</code>. A site on the line between two
          areas carries both.
        </li>
        <li>
          The last line lists what you carry. Each entry should show F (flood
          allowed). On firmware older than 1.15, follow each put with{" "}
          <code>region allowf &lt;name&gt;</code>.
        </li>
        <li>
          <code>region default &lt;name&gt;</code> scopes the repeater's own
          adverts and saves automatically. We're not recommending a default yet:
          leave it unset so your repeater's adverts reach the whole mesh while
          other repeaters are still adding regions. Login replies reuse the
          request's scope if it is on your list, otherwise they go out unscoped.
        </li>
        <li>
          Leave <code>*</code> allowed. It's also needed for remote management
          of distant repeaters. To keep far-off unscoped floods from swamping
          you, <code>set flood.max.unscoped 3</code> limits their hops instead
          of blocking them.
        </li>
      </ul>

      <Typography component="h5" variant="h5">
        Neighboring networks
      </Typography>
      <Typography>
        For awareness, here's what nearby meshes recommend. Apart from the ones
        we share, our repeaters don't carry these, but if you travel or talk
        with folks in those areas, these are the scopes their repeaters relay.
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell>Network</TableCell>
              <TableCell>Regions</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {neighborRegions.map((neighbor, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {neighbor.network}
                </TableCell>
                <TableCell>
                  <Stack
                    direction="row"
                    useFlexGap
                    spacing={0.5}
                    sx={{ flexWrap: "wrap" }}
                  >
                    {neighbor.regions.map((region) => (
                      <RegionChip key={region} name={region} />
                    ))}
                  </Stack>
                </TableCell>
                <TableCell>{neighbor.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography>
        The wider MeshCore community hasn't settled on one naming convention, so
        check with the operators in an area before relying on a region there.
        Questions? Ask in our Discord, or head back to{" "}
        <Link to="/join" title="Join">
          Join
        </Link>{" "}
        to get on the mesh.
      </Typography>

      <Typography variant="caption">
        Sources: MeshCore blog, “Region Filtering” (Jan 2026) and “Default Scope
        Region” (Apr 2026) ·{" "}
        <a href="https://docs.meshcore.io/" target="_blank">
          docs.meshcore.io
        </a>{" "}
        CLI reference · MeshCore firmware source, RegionMap.cpp ·{" "}
        <a href="https://newenglandme.sh/regions/" target="_blank">
          New England Mesh regions
        </a>
        . Region filtering is still evolving; check docs.meshcore.io before
        changing a live repeater.
      </Typography>
    </>
  );
}
