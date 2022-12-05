const bigImg = document.querySelector(`.big-img`);
const smallImg = document.querySelectorAll(`.small-img`);
const container = document.querySelector(`.container`);

container.addEventListener(`click`, function (e) {
  const clicked = e.target.closest(`.small-img`);
  if (!clicked) return;
  smallImg.forEach(function (img) {
    img.classList.remove(`active`);
  });
  const srcImg = (bigImg.attributes.src.textContent =
    clicked.attributes.src.textContent);
  if (srcImg) {
    clicked.classList.add(`active`);
  }
});
