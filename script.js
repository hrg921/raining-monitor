/**
 * Created by hangeonho on 2018. 7. 2..
 * File purpose : raining animation
 */
const body = document.getElementsByTagName('body')[0];
const height = document.documentElement.offsetHeight;
const width = document.documentElement.offsetWidth;
const terminalSpeed = 3000;
const theNumberOfRainDrop = 500;

function createRainDrop() {
  var raindrop = document.createElement('div');
  raindrop.classList.add('raindrop');
  body.appendChild(raindrop);
  return raindrop;
}

function dropRainDrop(raindrop, topOfRainDrop) {
  raindrop.animate([
    {top: -topOfRainDrop + "px", opacity: 1},
    {top: height + 'px', opacity: 0.3}
  ], {
    duration: terminalSpeed,
    iterations: Infinity,
    delay: Math.floor((Math.random() * terminalSpeed) + 1)
  });
}

for (var i = 0; i < theNumberOfRainDrop; i++) {
  var raindrop = createRainDrop();
  var leftOfRainDrop = Math.floor((Math.random() * width) + 1);
  var topOfRainDrop = Math.floor((Math.random() * height) + 1);
  raindrop.style.left = leftOfRainDrop + "px";
  raindrop.style.top = topOfRainDrop + "px";
  dropRainDrop(raindrop, topOfRainDrop);
}
