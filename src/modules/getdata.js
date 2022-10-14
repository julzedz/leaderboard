import display from "./display.js";

const getData = async () => {
  const response = await fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6GL6p7oq2YDOWX6vDlM7/scores/",
    { method: "GET" }
  );
  const results = response.json();
  results.then((object) => display(object.result));
};

export default getData;
