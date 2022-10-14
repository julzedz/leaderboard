import './style.css';
import getData from './modules/getdata.js';

const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.querySelector('#user').value;
  const score = document.querySelector('#score').value;
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6GL6p7oq2YDOWX6vDlM7/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  e.target.reset();
});

document.querySelector('.refresh').addEventListener('click', () => {
  getData();
});

window.addEventListener('load', () => {
  getData();
});
