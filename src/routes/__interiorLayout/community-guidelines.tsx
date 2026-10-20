import Typography from "@mui/material/Typography";
import { createFileRoute, Link } from "@tanstack/react-router";

const PAGE_TITLE = "Community Guidelines - Upstate Mesh";

export const Route = createFileRoute("/__interiorLayout/community-guidelines")({
  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content: "How we share the airwaves on Upstate Mesh.",
      },
    ],
    title: PAGE_TITLE,
  }),
  component: RouteComponent,
});

const guidelines = [
  "The airwaves were here before the first node and will outlast the last. No one owns them. We borrow them from each other, packet by packet, and hand them back.",
  "Be quick to listen and slow to transmit. High transmit power and network utilization are not virtues to be sought. Seek first a clear receiver and reliable connections to earn the respect of the network.",
  "Not every message arrives. The path is long and the air is shared. Send it again.",
  "What good is it if someone says they love the network but raises no repeater and fills no gap? Carry traffic you will never read for neighbors you will never meet. This is what it means to mesh.",
  "Do not honor the node on a tower while passing over the node in a small window. Just as the mast and high-gain antenna extend the mesh, so does the node on a child's windowsill. The strength of the mesh is only ever the sum of every part.",
  "The mesh that relies on a tower stands only as long as that tower stands. Build so that you remain when other nodes fall. What you do not control can be taken from you without warning; what you raise yourself, you keep.",
  "A whisper in an open channel is a shout among the silent. Messages are not quickly forgotten and packets not lost. Speak as though your voice is being recorded into history, because it is.",
  "Never stake a life on a network of hobbyists. When a message must arrive, the mesh stands as one road among many.",
  "Leave your work where the next builder can read and learn. What you hide only hurts the mesh, and what you share becomes someone else's beginning.",
  "Tend the air, and it will carry you. Spend it well, and there will be enough for all who come after.",
];

function RouteComponent() {
  return (
    <>
      <Typography component="h1" variant="h4">
        Community guidelines
      </Typography>
      {guidelines.map((guideline) => (
        <Typography
          key={guideline}
          sx={{ borderLeft: "3px solid #75eba5", pl: 2 }}
        >
          {guideline}
        </Typography>
      ))}
      <Typography component="h5" variant="h5">
        In practice
      </Typography>
      <ul>
        <li>
          Scope everyday messages to <code>alb</code>. <code>east</code> and{" "}
          <code>northeast</code> are for emergencies only. See{" "}
          <Link to="/regions" title="Regions">
            Regions
          </Link>
          .
        </li>
        <li>
          Use <code>#testing</code> for tests, not the Public channel.
        </li>
        <li>Don't send adverts over and over. Each one uses shared airtime.</li>
        <li>
          Running a bot? Read our{" "}
          <Link to="/bot-guidelines" title="Bot guidelines">
            bot guidelines
          </Link>{" "}
          first.
        </li>
        <li>Be kind. Everyone here was new once.</li>
      </ul>
      <Typography variant="caption">
        Guidelines adapted with thanks from{" "}
        <a
          href="https://www.austinmesh.org/join/community-guidelines/"
          target="_blank"
          title="Austin Mesh community guidelines"
        >
          Austin Mesh
        </a>
        , licensed CC BY-SA 4.0.
      </Typography>
    </>
  );
}
