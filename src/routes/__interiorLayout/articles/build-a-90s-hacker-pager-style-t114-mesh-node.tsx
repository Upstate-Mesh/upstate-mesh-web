import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/__interiorLayout/articles/build-a-90s-hacker-pager-style-t114-mesh-node",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: "auto" }}
      >
        <source src="/um_t114_article.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}
