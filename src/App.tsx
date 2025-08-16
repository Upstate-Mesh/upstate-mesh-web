import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import upstateMeshLogo from "/um_logo_web.png";
import blueskyIcon from "/bluesky.svg";
import discordIcon from "/discord.svg";
import "./App.css";

function App() {
  return (
    <Container maxWidth="md">
      <Stack
        direction="column"
        spacing={3}
        sx={{
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img src={upstateMeshLogo} className="logo" alt="Upstate Mesh logo" />
        </Stack>
        <div className="temp">
          We are a community group of makers and tech enthusiasts growing an
          open source text messaging network in Upstate New York's Capital
          District.
        </div>
        <h2>Join the network</h2>
        <div className="temp">
          More info on how to join the network is coming soon. For now, if
          you're interested in joining, check out our{" "}
          <a href="https://discord.gg/mjwbKJBv" target="_blank" title="Discord">
            Discord
          </a>{" "}
          or one of the social media channels below.
        </div>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <a
            href="https://bsky.app/profile/upstatemesh.bsky.social"
            target="_blank"
            title="Bluesky"
          >
            <img src={blueskyIcon} className="icon" alt="Bluesky" />
          </a>
          <a href="https://discord.gg/mjwbKJBv" target="_blank" title="Discord">
            <img src={discordIcon} className="icon" alt="Discord" />
          </a>
        </Stack>
      </Stack>
    </Container>
  );
}

export default App;
