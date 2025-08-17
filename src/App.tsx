import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import upstateMeshLogo from "/um_logo_web.png";
import SocialIcons from "./SocialIcons";

function App() {
  return (
    <Container
      maxWidth="md"
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        direction="column"
        px={1}
        spacing={3}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#75eba5",
            borderRadius: 1,
            lineHeight: 1,
            maxWidth: 500,
            width: "100%",
          }}
        >
          <Box
            sx={{
              padding: 2,
            }}
          >
            <img
              src={upstateMeshLogo}
              alt="Upstate Mesh logo"
              width="100%"
              height="auto"
            />
          </Box>
        </Box>
        <Box>
          We are a community group of makers and tech enthusiasts building a
          community mesh text messaging network in Upstate New York's Capital
          District.
        </Box>
        <Box sx={{ width: "100%" }}>
          <h2>Join the network</h2>
        </Box>
        <Box>
          More details on how to join the network is coming soon. For now, if
          you're interested in joining, check out our{" "}
          <a href="https://discord.gg/mjwbKJBv" target="_blank" title="Discord">
            Discord
          </a>{" "}
          or one of the social media channels below.
        </Box>
        <SocialIcons />
      </Stack>
    </Container>
  );
}

export default App;
