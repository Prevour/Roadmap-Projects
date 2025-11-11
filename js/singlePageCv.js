let hid1 = document.querySelector('#hideMe1');
let hid2 = document.querySelector('#hideMe2');
let hide1 = document.querySelector('#somethingHidden1');
let hide2 = document.querySelector('#somethingHidden2');

hid1.style.display = 'none';
hid2.style.display = 'none';

function displayMe1 () {
  if(hid1.style.display === 'none') {
    hid1.style.display = 'block'
  }
  else {hid1.style.display = 'none'}
}

function displayMe2 () {
  if(hid2.style.display === 'none') {
    hid2.style.display = 'block'
  }
  else {hid2.style.display = 'none'}
}

hide1.addEventListener('click', displayMe1)
hide2.addEventListener('click', displayMe2)
