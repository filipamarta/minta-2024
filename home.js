import { animate, inView } from "motion";

animate(
  ".stretch-title",
  {
    y: [0, 0],
    opacity: [0, 1],
  },
  { duration: 0.5, delay: 0.5 }
);

animate(
  ".small-title",
  {
    y: [-100, 0],
    opacity: [0, 1],
  },
  { duration: 0.9, delay: 0.8 }
);

animate(
  "section.content h3, section.content div, section.content a, section.content iframe",
  {
    opacity: 0,
  }
);

inView("section.content", (info) => {
  animate(
    info.target.querySelectorAll("h3, div, a, iframe"),
    { opacity: 1 },
    { duration: 1, delay: 0.5 }
  );
});
