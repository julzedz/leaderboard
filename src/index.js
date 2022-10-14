import './style.css';

const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.querySelector('#user').value;
  const score = document.querySelector('#score').value;
  fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6GL6p7oq2YDOWX6vDlM7/scores/", {
    method: "POST",
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  e.target.reset();
});

const display = (array) => {
  const ul = document.querySelector('.scores-box');
  ul.innerHTML = '';
  array.forEach((item) => ul.innerHTML += `<li id="item">${item.user}: ${item.score}</li>`)
}

const gett = async () => {
  const response = await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6GL6p7oq2YDOWX6vDlM7/scores/", {method: "GET"});
  const results = response.json();
  results.then((object) => display(object.result));
};

document.querySelector('.refresh').addEventListener('click', () => {
  gett();
});

window.addEventListener('load', () => {
  gett();
});