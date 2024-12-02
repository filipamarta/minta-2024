import { animate } from "motion";

animate(
  "h1",
  {
    y: [-100, 0],
    opacity: [0, 1],
  },
  { duration: 1, delay: 0 }
);

const videosContainer = document.querySelector("section.videos");
const videoList = videosContainer.querySelectorAll(".video-element");

videoList.forEach((video, index) => {
  animate(
    video,
    {
      y: [-100, 0],
      opacity: [0, 1],
    },
    { duration: 1, delay: index * 0.1 }
  );
});
