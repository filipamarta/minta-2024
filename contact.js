import { animate } from "motion";

animate(
  ".general-container figure",
  {
    y: [-100, 0],
    opacity: [0, 1],
  },
  { duration: 1, delay: 0.4 }
);

animate(
  ".general-container .general",
  {
    y: [-200, 0],
    opacity: [0, 1],
  },
  { duration: 0.8, delay: 0 }
);
