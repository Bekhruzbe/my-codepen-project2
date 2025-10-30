const aquarium = document.getElementById('aquarium');
const fishImages = [
   'https://i.postimg.cc/PPBFcmDJ/IMG-5677.png',
  'https://i.postimg.cc/1fLYTpFV/IMG-5675.png',
  "https://i.postimg.cc/zL35jwYN/IMG-5676.png"
  
];

const numFish = 10;

for (let i = 0; i < numFish; i++) {
  const fish = document.createElement('img');
  fish.src = fishImages[Math.floor(Math.random() * fishImages.length)];
  fish.classList.add('fish');

  fish.style.top = Math.random() * 80 + '%';
  fish.style.left = Math.random() * window.innerWidth + 'px';

  aquarium.appendChild(fish);

  let speed = 0.5 + Math.random() * 1;
  let direction = Math.random() < 0.5 ? 1 : -1;
  if (direction === -1) fish.style.transform = 'scaleX(-1)';

  function moveFish() {
    let currentLeft = parseFloat(fish.style.left);
    currentLeft += speed * direction;
    if (currentLeft > window.innerWidth) {
      direction = -1;
      fish.style.transform = 'scaleX(-1)';
    }
    if (currentLeft < -100) {
      direction = 1;
      fish.style.transform = 'scaleX(1)';
    }
    fish.style.left = currentLeft + 'px';
    requestAnimationFrame(moveFish);
  }

  moveFish();
}

// Ekran o'zgarganda baliq joyini moslash
window.addEventListener('resize', () => {
  const fishes = document.querySelectorAll('.fish');
  fishes.forEach(fish => {
    let left = parseFloat(fish.style.left);
    if (left > window.innerWidth) fish.style.left = window.innerWidth - 60 + 'px';
  });
});
