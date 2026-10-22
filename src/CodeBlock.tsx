import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function CodeBlock({ lines }: { lines: string[] }) {
  return (
    <Paper sx={{ width: "100%", px: 2, py: 1.5, overflowX: "auto" }}>
      <Box component="pre" sx={{ m: 0 }}>
        <code>{lines.join("\n")}</code>
      </Box>
    </Paper>
  );
}
