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

// Upcoming in-person meetups, in date order. The banner shows the first one
// that hasn't finished yet and lists the rest, so past ones can stay here.
export const MEETUPS: Meetup[] = [
  {
    title: "Mesh Meeting",
    start: "2026-12-09T18:00:00-05:00",
    location: "Tech Valley Center of Gravity",
    address: "Troy, NY",
    rsvpUrl: DISCORD_URL,
  },
  {
    title: "Mesh Meeting",
    start: "2027-01-12T18:00:00-05:00",
    location: "Tech Valley Center of Gravity",
    address: "Troy, NY",
    rsvpUrl: DISCORD_URL,
  },
];

// Live tools hosted by Upstate Mesh. Change these in one place when the tools
// move to their permanent home.
export const CORESCOPE_URL = "https://live.upst8me.sh";
export const LIVE_MAP_URL = "https://map.upst8me.sh";
export const HEALTH_CHECK_URL = "https://health.upst8me.sh";
export const HEALTH_CHECK_CHANNEL = "#ny-hc";

// MQTT server for observers. Observers log in with a token signed by their
// node's own key; everything is forwarded on to Capital District Mesh.
export const MQTT_HOST = "mqtt.upst8me.sh";
export const MQTT_URL = `wss://${MQTT_HOST}/mqtt`;
