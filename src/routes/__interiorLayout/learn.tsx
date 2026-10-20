import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { createFileRoute } from "@tanstack/react-router";

const PAGE_TITLE = "Learn - Upstate Mesh";

export const Route = createFileRoute("/__interiorLayout/learn")({
  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content: "Learn about mesh communications and Upstate Mesh.",
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
        Learn
      </Typography>
      <Typography component="h5" variant="h5">
        Why build a mesh network in the first place?
      </Typography>
      <Typography sx={{ borderLeft: "3px solid #75eba5", pl: 2 }}>
        First responders have access to FirstNet, a hardened, prioritized
        cellular service operated by AT&amp;T. Ordinary citizens have no
        equivalent “network of last resort”… or at least they didn’t until
        Meshtastic was developed. Meshtastic is being used in (preparation for)
        emergency scenarios by ordinary citizens because it is inexpensive to
        buy individual nodes and doesn’t depend on infrastructure. Meshtastic’s
        relay (mesh) functionality is automatic, and it can easily be deployed
        by individuals or in groups such as a neighborhood.
      </Typography>
      <Typography>
        -{" "}
        <a
          href="https://www.zeroretries.org/p/zero-retries-0170?open=false#%C2%A7a-few-good-comments-on-fcc-docket"
          target="_blank"
          title="Steve Stroh N8GNJ, Zero Retries 0170"
        >
          Steve Stroh N8GNJ, Zero Retries 0170
        </a>
      </Typography>
      <Card sx={{ width: "100%" }}>
        <CardHeader
          title="Mesh communications after a disaster"
          titleTypographyProps={{ variant: "h6" }}
        />
        <CardMedia
          component="iframe"
          src="https://www.youtube.com/embed/s6Z6Z0Iizgg?si=I62mmax7qP8Uz7er"
          sx={{
            width: "100%",
            aspectRatio: "16/9",
            border: 0,
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </Card>
      <Typography component="h5" variant="h5">
        What can it do?
      </Typography>
      <Typography>
        Mesh communication is a bit like a decentralized social media platform
        or SMS text messaging. It has a number of different features which will
        be familiar to anyone who has sent a text message or posted on social
        media.
      </Typography>
      <ol>
        <li>
          <b>Public channel</b>
          <br />
          Every MeshCore node comes with the Public channel. Anyone on the mesh
          can read what you post there. This is a bit like “posting” publicly on
          a social media platform.
        </li>
        <li>
          <b>Hashtag channels</b>
          <br />
          Channels whose names start with a #, like <code>#testing</code>, are
          open topic rooms. Anyone who adds a channel with the same name joins
          it. This is a bit like a public group or forum on social media.
        </li>
        <li>
          <b>Private channels</b>
          <br />
          You can create a channel with its own secret key and share it with
          friends by QR code or by sending them the key. Only people with the
          key can read it. This is a bit like a group text message chain on SMS.
        </li>
        <li>
          <b>Direct messages</b>
          <br />
          You can send encrypted direct messages to people on the mesh. Once a
          path to them is learned, messages travel straight down it and you get
          a delivery acknowledgement. This is like a private text message or a
          DM on social media.
        </li>
        <li>
          <b>Room servers</b>
          <br />A room server is a node that stores messages for a group, so
          people who were offline can catch up when they connect. This is a bit
          like an old-school BBS.
        </li>
        <li>
          <b>Location</b>
          <br />
          If you choose to enable it, your node can include its location in its
          advert so it shows up on maps in the app.
        </li>
        <li>
          <b>Telemetry data</b>
          <br />
          Repeaters and sensor nodes can report battery status, signal strength
          and sensor readings like temperature, humidity or air pressure. In
          MeshCore you request telemetry when you want it, rather than every
          node broadcasting it on a timer, which saves airtime.
        </li>
      </ol>
      <Typography component="h5" variant="h5">
        Why build this network?
      </Typography>
      <ol>
        <li>
          <b>Community</b>
          <br />
          As this is essentially a regional group text message chain, the hope
          is that people use the network to build community. Tell the group
          where your band is playing tonight, chat about local events, ask for a
          good cheese dip recipe, etc.
        </li>
        <li>
          <b>Disasters</b>
          <br />
          If the power goes out, like has happened in the past with winter ice
          storms, this network should allow people to continue to communicate
          with each other without electricity, cell phone coverage, or internet.
          This big regional group text chain could allow people to ask for help
          or offer assistance. People could get information about where warming
          centers are open or ask who in their neighborhood still has power.
          People could also send encrypted direct messages to check in on
          friends and family or they could send encrypted group messages to
          coordinate privately in a group.
        </li>
        <li>
          <b>Decentralized, open, and resilient</b>
          <br />
          Mesh networks are decentralized - there is no central server or
          corporation - all the communication bounces through the entire mesh.
          It's open to everyone - you don't have to ask permission to join and
          all of the software is open-source. Mesh networks are resilient -
          solar-powered radios don't need cell phone towers, internet access, or
          electricity. Hopefully, this project will inspire others to build
          things that are decentralized, open, and resilient.
        </li>
      </ol>
      <Typography component="h5" variant="h5">
        Meshtastic vs. MeshCore on Upstate Mesh
      </Typography>
      <Typography>
        Upstate Mesh is focused on MeshCore. Our repeater network is built for
        it and most of our members use it. That said, we're not anti-Meshtastic:
        it's a great project, plenty of members run both, and Meshtastic users
        are always welcome in our Discord. This section explains (1) how mesh
        networking works at a high level, and (2) the practical differences
        between Meshtastic and MeshCore, and why we chose MeshCore for the
        region.
      </Typography>
      <Typography component="h6" variant="h6">
        ELI5
      </Typography>
      <Typography>
        Think of sending a whisper across a playground. With Meshtastic,
        everyone passes your whisper along, so the "chain" can move and grow as
        people move around, but they stop sharing your message after it's passed
        through 7 people. With MeshCore, only special helpers (repeaters) pass
        the whisper, but they can pass it to up to 64 more helpers.
      </Typography>
      <Typography>
        By default, with MeshCore those helpers also talk faster and there are
        fewer side conversations that might delay your whisper. On Meshtastic,
        the other people talk slower and are having side conversations that have
        to finish before your whisper can be shared, slowing down the rate at
        which your whisper makes its way through the crowd.
      </Typography>
      <Typography component="h6" variant="h6">
        TL;DR
      </Typography>
      <Typography>
        Meshtastic works well when people and links are moving (friends at an
        event, a hike, a bike ride). Regular nodes help by rebroadcasting, so
        coverage can shift and grow as people move. MeshCore works well when you
        can place fixed repeaters on rooftops or hills. Phones connect through
        companion radios; companions do not rebroadcast, so repeaters are what
        grow the mesh.
      </Typography>
      <Typography>
        <strong>Main differences</strong>
      </Typography>
      <ul>
        <li>Hop limits: Meshtastic default 3 (max 7); MeshCore up to 64.</li>
        <li>
          Who rebroadcasts: Meshtastic clients help relay; MeshCore companions
          do not. Only repeaters relay.
        </li>
        <li>
          Telemetry (battery, temperature, etc): Meshtastic pushes data
          regularly; MeshCore pushes rarely, and allows manual pulling.
        </li>
        <li>
          Responsiveness: MeshCore feels considerably faster with default
          config; Meshtastic can be manually tuned to similar results.
        </li>
      </ul>
      <Typography component="h6" variant="h6">
        Mesh networking in 30 seconds
      </Typography>
      <ul>
        <li>
          Self-healing + multi-hop: Messages can traverse multiple radios
          (“hops”). If one link disappears, the mesh finds another path.
        </li>
        <li>
          Flood routing: On low-power radios, many systems use a simple “managed
          flood” where nodes selectively rebroadcast packets without maintaining
          big routing tables.
        </li>
        <li>
          Direct paths: Some systems learn a path during the first flood, then
          send future messages via a more efficient “next-hop” route, falling
          back to flood if the path breaks.
        </li>
      </ul>
      <Typography component="h6" variant="h6">
        Default roles &amp; behavior
      </Typography>
      <ul>
        <li>
          Meshtastic: Default role is CLIENT, which does take part in
          rebroadcasting in most cases. This helps ad-hoc, moving groups connect
          even without fixed infrastructure.
        </li>
        <li>
          MeshCore: Default end-user firmware is Companion (USB/BLE app
          companion). Companions do not rebroadcast other people’s packets;
          Repeaters handle forwarding. This concentrates airtime on
          purpose-built, well-placed infrastructure nodes.
        </li>
      </ul>
      <Typography>
        Meshtastic shines for non-geostationary groups (e.g. a ski hill or a
        bike ride with moving parties). MeshCore is optimized for large scale
        meshes with infrastructure nodes (repeaters) placed on high points.
      </Typography>
      <Typography component="h6" variant="h6">
        Routing strategies
      </Typography>
      <ul>
        <li>
          Meshtastic: Managed flood. Since v2.6, Direct Messages use next-hop
          routing: flood to discover, then optimized relays for subsequent DMs.
        </li>
        <li>
          MeshCore: Flood-then-direct by design: first message floods to learn a
          path; later messages embed the learned path; if that route fails after
          a few retries, the node automatically falls back to flood.
        </li>
      </ul>
      <Typography component="h6" variant="h6">
        Hop limits
      </Typography>
      <ul>
        <li>Meshtastic: Default Max Hops = 3 (configurable to max 7)</li>
        <li>MeshCore: Internal max hop limit = 64</li>
      </ul>
      <Typography>
        <strong>Implication for Upstate Mesh:</strong> Hill/valley terrain often
        needs many relays. Seven hops can be a hard ceiling for Meshtastic
        across the whole area, while MeshCore's higher limit gives more
        headroom.
      </Typography>
      <Typography component="h6" variant="h6">
        Telemetry &amp; airtime
      </Typography>
      <ul>
        <li>
          Meshtastic periodically transmits device telemetry, position, and node
          info on timers (defaults ~30 min, 15 min*, and 3 hours). As meshes
          grow, the firmware auto-backs off these intervals to reduce
          congestion. This is good for tracking/telemetry, but on very large
          meshes the background traffic can consume valuable airtime.
        </li>
        <li>
          MeshCore avoids frequent network-wide telemetry by default. Repeaters
          can send periodic adverts (local or flood) on long intervals, and you
          can tune or disable them to conserve airtime.
        </li>
      </ul>
      <Typography>
        For Upstate Mesh, where the goal is region wide messaging (not sensor
        telemetry), MeshCore’s default traffic profile typically leaves more
        airtime for actual messages.
      </Typography>
      <Typography component="h6" variant="h6">
        Radio presets, throughput &amp; interference
      </Typography>
      <Typography>
        Both systems use LoRa (Chirp Spread Spectrum), where bandwidth,
        spreading factor (SF), and coding rate (CR) trade range for speed and
        airtime.
      </Typography>
      <ul>
        <li>
          Meshtastic defaults: The standard preset is LongFast, which (in US)
          uses 250 kHz bandwidth and a conservative SF/CR mix. It's robust, but
          airtime per message is relatively high, especially over multiple hops.
          <br />
          <small>
            NOTE: You can switch Meshtastic to faster presets (e.g.,
            MediumFast/ShortFast) or even custom narrow bandwidths; Meshtastic
            supports special narrow values like 31.25 kHz and 62.5 kHz when
            manually configured.
          </small>
        </li>
        <li>
          MeshCore defaults: In the US, the default preset is a narrower
          bandwidth (62.5 kHz) with moderate SF/CR to slot between noisy parts
          of the US 902–928 MHz ISM band, improving SNR and airtime efficiency
          while maintaining city-scale coverage.
        </li>
      </ul>
      <Typography>
        In real Albany-area testing, the narrower default MeshCore configs have
        produced noticeably snappier delivery (often sub-second for nearby
        peers, and sub-2 second for multi-hop routes) compared to default
        Meshtastic presets. Your mileage will vary by terrain, antenna quality,
        and infrastructure density, but the airtime math generally favors higher
        data rates + less background traffic. This, among other reasons is why
        the majority of members have chosen to focus their time and effort on
        building a robust MeshCore mesh.
      </Typography>
      <Typography component="h6" variant="h6">
        When to use which
      </Typography>
      <ul>
        <li>
          Choose Meshtastic if you want a "bring-a-radio, it just works"
          experience for roaming groups, mapping, and rich telemetry modules,
          with minimal setup and no guaranteed infrastructure.
        </li>
        <li>
          Choose MeshCore if your aim is a resilient, city or region scale
          messaging network with fixed repeaters, where end-users don’t
          rebroadcast by default.
        </li>
      </ul>
    </>
  );
}
