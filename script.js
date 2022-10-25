let bigImg = document.querySelector(`.big-img`);
let smallImg = document.querySelectorAll(`.small-img`);

smallImg.forEach((sImgElm) => {
  sImgElm.addEventListener(`click`, () => {
    bigImg.attributes.src.textContent = sImgElm.attributes.src.textContent;
    console.log(`clicked`);
  });
});
