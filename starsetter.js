(function() {
  let b = document.querySelector('.social-count.js-social-count'); 
  let stars = parseInt(b.textContent);
  if ( b.textContent == "0" )
  {
    stars = 0;
  }
  let newStars = stars + Math.ceil(stars / 20) + 1;
  b.innerHTML = newStars;
})()
