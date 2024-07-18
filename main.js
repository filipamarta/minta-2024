import "./style.css";
import { animate, inView } from "motion";

animate(
  "header",
  {
    y: [-100, 0],
    opacity: [0, 1],
  },
  { duration: 1, delay: 0 }
);

animate(
  ".cantaloupe",
  {
    y: [-100, 0],
    opacity: [0, 1],
  },
  { duration: 1, delay: 0.5 }
);

animate(
  "section.content p, section.content img, section.content iframe, section.content.listen ul",
  {
    opacity: 0,
  }
);

inView("section.content", (info) => {
  animate(
    info.target.querySelectorAll("p, img, iframe, section.content.listen ul"),
    { opacity: 1 },
    { duration: 1, delay: 0.5 }
  );
});
