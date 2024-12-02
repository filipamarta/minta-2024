import { animate, inView } from "motion";

animate("section.content p, section.content img", {
  opacity: 0,
});

inView("section.content", (info) => {
  animate(
    info.target.querySelectorAll("p, img"),
    { opacity: 1 },
    { duration: 1, delay: 0.5 }
  );
});
