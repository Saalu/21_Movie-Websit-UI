const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemLength = movieLists[i].querySelectorAll("img").length;
  let counter = 0;

  arrow.addEventListener("click", function () {
    counter++;
    if (itemLength - (4 + counter) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = `translateX(0)`;
      counter = 0;
    }
  });
});
