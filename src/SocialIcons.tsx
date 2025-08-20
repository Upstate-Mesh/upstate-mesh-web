import blueskyIcon from "/bluesky.svg";
import discordIcon from "/discord.svg";
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
        src={discordIcon}
        href="https://discord.gg/mjwbKJBv"
        title="Discord"
      />
    </Stack>
  );
}
