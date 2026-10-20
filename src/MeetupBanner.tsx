import { useState } from "react";

import EventIcon from "@mui/icons-material/Event";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { DISCORD_URL, NEXT_MEETUP } from "./site";

// Keep a meetup up for a few hours after it starts.
const SHOW_AFTER_START_MS = 4 * 60 * 60 * 1000;

export default function MeetupBanner() {
  const [now] = useState(() => Date.now());
  const meetup = NEXT_MEETUP;
  const start = meetup ? new Date(meetup.start) : null;
  const upcoming =
    meetup && start && start.getTime() + SHOW_AFTER_START_MS > now;

  return (
    <Paper
      sx={{
        width: "100%",
        p: 2,
        borderLeft: "3px solid #75eba5",
      }}
    >
      <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
        <EventIcon sx={{ color: "#75eba5", mt: 0.5 }} />
        {upcoming && start ? (
          <Stack spacing={0.5}>
            <Typography component="h2" variant="h6">
              Next meetup: {meetup.title}
            </Typography>
            <Typography>
              {start.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                timeZone: "America/New_York",
              })}{" "}
              at{" "}
              {start.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                timeZone: "America/New_York",
              })}
            </Typography>
            <Typography>
              {meetup.location}
              {meetup.address && `, ${meetup.address}`}
            </Typography>
            {meetup.details && <Typography>{meetup.details}</Typography>}
            {meetup.rsvpUrl && (
              <Typography>
                <a href={meetup.rsvpUrl} target="_blank" title="RSVP">
                  RSVP
                </a>
              </Typography>
            )}
          </Stack>
        ) : (
          <Typography>
            We get together in person regularly. Meetups are announced in our{" "}
            <a href={DISCORD_URL} target="_blank" title="Discord server">
              Discord
            </a>
            .
          </Typography>
        )}
      </Stack>
    </Paper>
  );
}
