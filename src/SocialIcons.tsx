import blueskyIcon from "/bluesky.svg";
import discordIcon from "/discord.svg";
import instagramIcon from "/instagram.svg";
import SocialIcon from "./SocialIcon";
import Stack from "@mui/material/Stack";

export default function SocialIcons() {
  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
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
