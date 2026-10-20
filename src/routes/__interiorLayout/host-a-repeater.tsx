import { ReactNode } from "react";

import Typography from "@mui/material/Typography";
import { createFileRoute } from "@tanstack/react-router";

import { CONTACT_EMAIL } from "../../site";

const PAGE_TITLE = "Host a Repeater - Upstate Mesh";

export const Route = createFileRoute("/__interiorLayout/host-a-repeater")({
  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
      {
        name: "description",
        content:
          "Information for property owners considering hosting an Upstate Mesh repeater.",
      },
    ],
    title: PAGE_TITLE,
  }),
  component: RouteComponent,
});

const questions: ReadonlyArray<{ question: string; answers: ReactNode[] }> = [
  {
    question: "Why should I host an Upstate Mesh repeater?",
    answers: [
      "Your property becomes part of the Capital District's backup communication network for when storms or outages knock out power and cell service.",
      "Height is everything for radio. A good rooftop or hilltop site can connect neighborhoods that otherwise can't hear each other.",
      "It costs you nothing, asks nothing of you, and quietly does good for your neighbors every day.",
    ],
  },
  {
    question: "What exactly is the repeater being used for?",
    answers: [
      "It expands a free, open-source, community mesh network that uses low-power radio.",
      "It relays text messages between people in areas with limited cellular or internet coverage.",
      "It's often used for emergency readiness and local community support.",
    ],
  },
  {
    question: "What kind of equipment will be installed?",
    answers: [
      "Typically a small, weatherproof box containing a radio board and battery.",
      "A lightweight antenna and a small solar panel.",
      "Usually under 2 pounds and compact, roughly the size of a Wi-Fi router, though the antenna is longer.",
    ],
  },
  {
    question: "How will it be powered?",
    answers: [
      "Repeaters are solar-powered and self-sufficient. Nothing plugs into your electrical system.",
    ],
  },
  {
    question: "What kind of antenna or cabling will be involved?",
    answers: [
      "Usually a small external antenna mounted to a mast or pole.",
      "No cabling into the building.",
      "Typical installations use magnets, U-bolts around a mast or pole, or hose clamps. No drilling or screwing required.",
    ],
  },
  {
    question: "What is the expected maintenance requirement?",
    answers: [
      "Very low. Repeaters are designed to run on their own for long periods, and most settings can be updated over the radio.",
      "Occasional visits, once or twice a year, may be needed for firmware updates or hardware checks.",
      "Access terms can be set in writing when helpful, but we're generally flexible and plan weeks to months out.",
    ],
  },
  {
    question: "What range and signal coverage will this repeater support?",
    answers: [
      "It depends on elevation and terrain, anywhere from 2 to 10 miles or more.",
      "It operates in the 902–928 MHz Industrial, Scientific and Medical (ISM) band, the same range used by many garage door openers and baby monitors.",
    ],
  },
  {
    question: "Will the equipment interfere with my existing systems?",
    answers: [
      "The radios are FCC-certified, which means they've been tested for interference.",
      "Interference is extremely unlikely. The repeater is very low power and operates on different frequencies from Wi-Fi, cell and TV systems. Some utility meters use the same band, but on different frequencies.",
      "Documentation and spec sheets are available for review.",
    ],
  },
  {
    question: "What are the liability implications?",
    answers: [
      "The property owner carries the liability, though the likelihood of an incident is not material.",
    ],
  },
  {
    question:
      "Are there any permits, HOA, zoning or regulatory issues to be aware of?",
    answers: [
      "Permits are not typically needed for small antennas and non-commercial installations.",
      "HOA or building rules may restrict roof modifications.",
      "We recommend written permission if you're a tenant or part of a shared property.",
    ],
  },
  {
    question:
      "Will this increase the likelihood my property is struck by lightning?",
    answers: ["No."],
  },
  {
    question:
      "How long is the repeater expected to stay there? Can it be removed at any time?",
    answers: [
      "We'll work together to agree on a clear timeframe if needed.",
      "There's no long-term obligation. You may request removal, or remove it yourself, at any time.",
    ],
  },
];

function RouteComponent() {
  return (
    <>
      <Typography component="h1" variant="h4">
        Host a repeater
      </Typography>
      <Typography>
        Repeaters are what make the mesh work, and the best ones sit up high. If
        you own or manage a building, tower or hilltop in the Capital District,
        hosting a small solar repeater is one of the most helpful things you can
        do for the network. Here are answers to the questions property owners
        usually ask.
      </Typography>
      {questions.map((item, i) => (
        <div key={item.question}>
          <Typography component="h2" variant="h6">
            {i + 1}. {item.question}
          </Typography>
          <ul>
            {item.answers.map((answer, j) => (
              <li key={j}>{answer}</li>
            ))}
          </ul>
        </div>
      ))}
      <Typography component="h5" variant="h5">
        Interested?
      </Typography>
      <Typography>
        Email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} title="Email Upstate Mesh">
          {CONTACT_EMAIL}
        </a>{" "}
        and tell us a little about the site. We'll follow up to talk through
        whether it's a good fit and what an install would look like.
      </Typography>
      <Typography variant="caption">
        Adapted with thanks from the{" "}
        <a
          href="https://www.austinmesh.org/about/property-owner-faq-hosting-a-node/"
          target="_blank"
          title="Austin Mesh property owner FAQ"
        >
          Austin Mesh property owner FAQ
        </a>
        , licensed CC BY-SA 4.0.
      </Typography>
    </>
  );
}
