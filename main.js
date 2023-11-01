'use strict';

{
 const btns = document.querySelectorAll('.btn');
 const results = document.querySelectorAll('.result');


 const tokyoStations = [
  '新宿駅',
  '東京駅',
  '渋谷駅',
  '上野駅',
  '池袋駅',
  '大手町駅',
  '有楽町駅',
  '東京ディズニーランド駅',
 ];

 const kanagawaStations = [
  '横浜駅',
  '川崎駅',
  '新横浜駅',
  '中川駅',
  '保土ヶ谷駅',
  '相模原駅',
  '横須賀中央駅',
 ];

 const saitamaStations = [
  'さいたま新都心駅',
  '大宮駅',
  '川口駅',
  '与野駅',
  '川越駅',
  '所沢駅',
  '久喜駅',
 ];

btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    let station;

    switch (index) {
      case 0:
        station = tokyoStations[Math.floor(Math.random() * tokyoStations.length)];
      break;
      case 1:
        station = kanagawaStations[Math.floor(Math.random() * kanagawaStations.length)];
      break;
      case 2:
        station = saitamaStations[Math.floor(Math.random() * saitamaStations.length)];
      break;
    }

    results[index].textContent = station;

    if (results[index].textContent.length >= 6) {
      results[index].style.fontSize = '32px';
      results[index].style.padding = '56px 0';
     } else {
      results[index].style.fontSize = '64px';
      results[index].style.padding = '32px 0';
     }
  });
});

// carousel

const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('ul');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;


  function updateButton() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (currentIndex == 0) {
      prev.classList.add('hidden');
    }

    if (currentIndex == slides.length - 1) {
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.querySelector('nav').appendChild(button);
    }

    dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  updateButton();
  setupDots();

  next.addEventListener('click', () => {
    currentIndex++;
    updateButton();
    updateDots();
    moveSlides();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButton();
    updateDots();
    moveSlides();
  });

  window.addEventListener('resize', () => {
    moveSlides();
  });

}


