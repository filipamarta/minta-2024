import "./style.css";
import { animate } from "motion";

const musicList = document.querySelector("section.music-list");
const musicListAlbums = musicList.querySelectorAll("a");

musicListAlbums.forEach((album, index) => {
  animate(
    album,
    {
      y: [-100, 0],
      opacity: [0, 1],
    },
    { duration: 1, delay: index * 0.1 }
  );
});
