function randomSum(min, max) {
  document.querySelector('.sum').innerHTML = (Math.floor(Math.random() * (max - min + 1) ) + min);
}
