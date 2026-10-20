// Site-wide details that show up on more than one page.

export const CONTACT_EMAIL = "info@upstatemesh.org";

export const DISCORD_URL = "https://discord.gg/FvajRmXEsb";

export interface Meetup {
  title: string;
  // ISO 8601 with offset, so the banner hides itself once the meetup is over.
  start: string;
  location: string;
  address?: string;
  rsvpUrl?: string;
  details?: string;
}

// The next in-person meetup. Set to null when nothing is scheduled.
export const NEXT_MEETUP: Meetup | null = {
  title: "Mesh Meetup",
  start: "2026-11-04T18:00:00-05:00",
  location: "Tech Valley Center of Gravity",
  address: "Troy, NY",
  rsvpUrl: DISCORD_URL,
};
