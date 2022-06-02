let tl = gsap.timeline();

// const btn = document.querySelector(".btn");
// const btnplay = document.querySelector(".btnplay");

tl.from(".hero__title", { opacity: 0, y: 30, duration: 0.5 }, "+=1")
  .from(".hero__descr", { opacity: 0, y: 30, duration: 0.5 })
  .from(".hero__btn", { opacity: 0, y: 30, duration: 0.5 })
  .from(".photos-wrap__img1", { opacity: 0, duration: 0.5 })
  .from(".photos-wrap__img2", { opacity: 0, duration: 0.5 })
  .from(".photos-wrap__img3", { opacity: 0, duration: 0.5 })
  .from(".photos__author", { opacity: 0, y: 30, duration: 0.5 });

// btn.onclick = function () {
//   tl.reverse();
// };
// btnplay.onclick = function () {
//   tl.play();
// };
