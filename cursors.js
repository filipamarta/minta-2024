const cursorTag = document.querySelector("div.cursors");
const ball = cursorTag.querySelector("div");

/* document.addEventListener("mousemove", (event) => {
  ball.style.left = event.pageX + "px";
  ball.style.top = event.pageY + "px";
}); */
/* 

FOR MORE ONE BALL AND SPEED

let speed = 0.2;
let currentX = 0;
let currentY = 0;
let aimToGoX = 0;
let aimToGoY = 0;

const animate = () => {
  currentX = currentX + (aimToGoX - currentX) * speed;
  currentY = currentY + (aimToGoY - currentY) * speed;

  ball.style.left = currentX + "px";
  ball.style.top = currentY + "px";

  requestAnimationFrame(animate);
};

animate();

document.addEventListener("mousemove", (event) => {
  aimToGoX = event.pageX;
  aimToGoY = event.pageY;
}); */

/* FOR MORE THAN ONE BALL AND SPEED */
let isNotMobile = window.matchMedia("(min-width: 768px)");

if (isNotMobile.matches) {
  const balls = cursorTag.querySelectorAll("div");
  const paragraphLinks = document.querySelectorAll("p a");
  const footerLinks = document.querySelectorAll("footer ul li a");
  const headerLinks = document.querySelectorAll("header a");
  const allLinks = [...paragraphLinks, ...footerLinks, ...headerLinks];

  let aimToGoX = 0;
  let aimToGoY = 0;

  balls.forEach((eachBall, index) => {
    let speed = 0.2 - index * 0.012;
    let currentX = 0;
    let currentY = 0;

    allLinks.forEach((link) => {
      link.addEventListener("mouseover", () => {
        eachBall.style.width = 68 + "px";
        eachBall.style.height = 68 + "px";
      });
      link.addEventListener("mouseout", () => {
        eachBall.style.width = 10 + "px";
        eachBall.style.height = 10 + "px";
      });
    });

    const animate = () => {
      currentX = currentX + (aimToGoX - currentX) * speed;
      currentY = currentY + (aimToGoY - currentY) * speed;

      eachBall.style.left = currentX + "px";
      eachBall.style.top = currentY + "px";

      document.body.style.cursor = "none";

      requestAnimationFrame(animate);
    };

    animate();
  });

  document.addEventListener("mousemove", (event) => {
    aimToGoX = event.pageX;
    aimToGoY = event.pageY;
  });
}