import "./style.css";
import { animate, inView } from "motion";

const sneakerTag = document.querySelector("section.sneaker");
const loaderTag = document.querySelector("div.loader");

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
  "section.content p, section.content img, section.content iframe, section.content ul.listen-links",
  {
    opacity: 0,
  }
);

inView("section.content", (info) => {
  animate(
    info.target.querySelectorAll(
      "p, img, iframe, section.content ul.listen-links"
    ),
    { opacity: 1 },
    { duration: 1, delay: 0.5 }
  );
});
