import { animate } from "motion";

animate(
  "section.content.upcoming",
  {
    y: [-100, -10],
    opacity: [0, 1],
  },
  { duration: 0.6, delay: 0 }
);

animate(
  "section.content.bg-color-1",
  {
    y: [-100, -10],
    opacity: [0, 1],
  },
  { duration: 0.6, delay: 0.6 }
);
