import { animate, inView } from "motion";

animate(
  ".lyrics-intro",
  {
    y: [-100, 0],
    opacity: [0, 1],
  },
  { duration: 0.6, delay: 0 }
);

animate(
  "section.lyrics-wrapper h2, section.lyrics-wrapper ul, section.lyrics-wrapper img",
  {
    opacity: 0,
  }
);

inView("section.lyrics-wrapper", (info) => {
  animate(
    info.target.querySelectorAll("h2, ul, img"),
    { opacity: 1 },
    { duration: 1, delay: 0.5 }
  );
});
