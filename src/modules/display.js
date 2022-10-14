const display = (array) => {
  const ul = document.querySelector('.scores-box');
  ul.innerHTML = '';
  array.forEach((item) => ul.innerHTML += `<li id="item">${item.user}: ${item.score}</li>`,
  );
};

export default display;
