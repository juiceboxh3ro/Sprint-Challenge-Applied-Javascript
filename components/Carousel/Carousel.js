/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

// 2
const carouselImages = [
  './assets/carousel/mountains.jpeg',
  './assets/carousel/computer.jpeg',
  './assets/carousel/trees.jpeg',
  './assets/carousel/turntable.jpeg'
];

// 3
let currentIndex = 0;

function carousel (arr) {
  const carouselDiv = document.createElement('div'),
  btnLeft = document.createElement('div'),
  image = document.createElement('img'),
  btnRight = document.createElement('div')

  carouselDiv.classList.add('carousel');
  btnLeft.classList.add('left-button');
  btnRight.classList.add('right-button');

  image.src = arr[0];

  image.style.display = 'block'

  btnLeft.textContent = '◀';
  btnRight.textContent = '▶';

  carouselDiv.append(btnLeft)
  carouselDiv.append(btnRight)
  carouselDiv.append(image)

  // 4
  btnLeft.addEventListener('click', () => {
    if(currentIndex == 0) {
      currentIndex = 3
      image.src = arr[currentIndex]
    } else if (currentIndex == 3) {
      currentIndex = 2
      image.src = arr[currentIndex]
    } else if (currentIndex == 2) {
      currentIndex = 1
      image.src = arr[currentIndex]
    } else if (currentIndex == 1) {
      currentIndex = 0
      image.src = arr[currentIndex]
    }
  })

  btnRight.addEventListener('click', e => {
    if(currentIndex == 0) {
      currentIndex = 1
      image.src = arr[currentIndex]
    } else if (currentIndex == 1) {
      currentIndex = 2
      image.src = arr[currentIndex]
    } else if (currentIndex == 2) {
      currentIndex = 3
      image.src = arr[currentIndex]
    } else if (currentIndex == 3) {
      currentIndex = 0
      image.src = arr[currentIndex]
    }
  })

  return carouselDiv;
}

const carouselHolder = document.querySelector('.carousel-container');

carouselHolder.append(carousel(carouselImages));

