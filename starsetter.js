(function() {
  let b = document.querySelector(".social-count.js-social-count"); 
  let stars = parseInt(b.textContent);
  let newStars = stars += Math.ceil(stars / 20);
  b.innerHTML = newStars;
})()
