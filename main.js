'use strict';

{
 const btn1 = document.querySelector('#btn-1');
 const result1 = document.querySelector('#result-1');
 const btn2 = document.querySelector('#btn-2');
 const result2 = document.querySelector('#result-2');
 const btn3 = document.querySelector('#btn-3');
 const result3 = document.querySelector('#result-3');

//  const p = document.querySelectorAll('main section p');

 const tokyoStations = [
  '新宿駅',
  '東京駅',
  '渋谷駅',
  '上野駅',
  '池袋駅',
  '東京ディズニーランド駅',
  '大手町駅',
  '有楽町駅',
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

 btn1.addEventListener('click', () => {
  result1.textContent = tokyoStations[Math.floor(Math.random() * tokyoStations.length)];
  if (result1.textContent.length >= 6) {
    result1.style.fontSize = '32px';
    result1.style.padding = '56px 0';
   } else {
    result1.style.fontSize = '64px';
    result1.style.padding = '32px 0';
   }
 });

 btn2.addEventListener('click', () => {
  result2.textContent = kanagawaStations[Math.floor(Math.random() * kanagawaStations.length)];
  if (result2.textContent.length >= 6) {
    result2.style.fontSize = '32px';
    result2.style.padding = '56px 0';
   } else {
    result2.style.fontSize = '64px';
    result2.style.padding = '32px 0';
   }
 });

 btn3.addEventListener('click', () => {
  result3.textContent = saitamaStations[Math.floor(Math.random() * saitamaStations.length)];
  if (result3.textContent.length >= 6) {
    result3.style.fontSize = '32px';
    result3.style.padding = '56px 0';
   } else {
    result3.style.fontSize = '64px';
    result3.style.padding = '32px 0';
   }
 });

 
}


