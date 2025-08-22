import blueskyIcon from "/bluesky.svg";
import discordIcon from "/discord.svg";
import gitHubIcon from "/github.svg";
import instagramIcon from "/instagram.svg";
import Stack from "@mui/material/Stack";

import SocialIcon from "./SocialIcon";

export default function SocialIcons() {
  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <SocialIcon
        src={discordIcon}
        href="https://discord.gg/FvajRmXEsb"
        title="Discord"
      />
      <SocialIcon
        src={blueskyIcon}
        href="https://bsky.app/profile/upstatemesh.bsky.social"
        title="Bluesky"
      />
      <SocialIcon
        src={instagramIcon}
        href="https://www.instagram.com/upstatemesh/"
        title="Instagram"
      />
      <SocialIcon
        src={gitHubIcon}
        href="https://github.com/upstate-mesh/mesh-station"
        title="GitHub"
      />
    </Stack>
  );
}
