import Typography from "@mui/material/Typography";
import { createFileRoute, Link } from "@tanstack/react-router";

import { CONTACT_EMAIL, DISCORD_URL } from "../../site";
import SocialIcons from "../../SocialIcons";

const PAGE_TITLE = "Contact - Upstate Mesh";

export const Route = createFileRoute("/__interiorLayout/contact")({
  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content: "How to get in touch with Upstate Mesh.",
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
        Contact
      </Typography>
      <Typography component="h5" variant="h5">
        Discord
      </Typography>
      <Typography>
        The fastest way to reach us. Ask questions, get help setting up a node,
        or just say hi in our{" "}
        <a href={DISCORD_URL} target="_blank" title="Discord server">
          Discord server
        </a>
        .
      </Typography>
      <Typography component="h5" variant="h5">
        Email
      </Typography>
      <Typography>
        For anything else, including{" "}
        <Link to="/host-a-repeater" title="Host a repeater">
          hosting a repeater
        </Link>{" "}
        on your property, press or partnership inquiries, email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} title="Email Upstate Mesh">
          {CONTACT_EMAIL}
        </a>
        .
      </Typography>
      <Typography component="h5" variant="h5">
        On the mesh
      </Typography>
      <Typography>
        Already have a node? Say hi in the Public channel, or ask for help in{" "}
        <code>#testing</code>.
      </Typography>
      <Typography component="h5" variant="h5">
        Elsewhere
      </Typography>
      <SocialIcons />
      <Typography>
        Found a problem with this website? Open an issue on{" "}
        <a
          href="https://github.com/Upstate-Mesh/upstate-mesh-web/issues"
          target="_blank"
          title="Website issues on GitHub"
        >
          GitHub
        </a>
        .
      </Typography>
    </>
  );
}
