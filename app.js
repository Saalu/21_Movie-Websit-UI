const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemLength = movieLists[i].querySelectorAll("img").length;
  let counter = 0;

  arrow.addEventListener("click", function () {
    const ratio = Math.floor(window.innerWidth / 270);
    counter++;
    if (itemLength - (4 + counter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = `translateX(0)`;
      counter = 0;
    }
  });
});

// Toggle Logic
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-main-title,.navbar-container,.sidebar,.sider-icon,.toggle,.toggle-ball"
);

ball.addEventListener("click", function () {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
});
