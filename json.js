const uri = "https://jsonplaceholder.typicode.com/todos/";
const jsonContainer = document.getElementById("json-container");

let jsonn = [];



async function fetchData() {
  const response = await fetch(uri);
  const data = await response.json();
  if (data.length > 0) {
    jsonn = [...data];
    renderCards(jsonn);
  }
}
fetchData();
function renderCards(data = []) {
  
  let cards = [];
  for (let i = 0; i < data.length; i++) {
    cards.push(createCard(data[i]));
  }
  
  jsonContainer.innerHTML = "";
  
  jsonContainer.append(...cards);
}

function createCard(data = {}) {
  let card = document.createElement("div");
  let userid = document.createElement("h2");
  let idd = document.createElement("h3");
  let titlee = document.createElement("p");

  card.setAttribute("class", "card");

  
  const { userId= "", id = "" ,title=""} = data;
  userid.innerText =userId;
  idd.innerText = id;
  titlee.innerText=title;
  
  card.append(userid,idd,titlee);

  return card;
}