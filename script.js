const buttonNo = document.querySelector("#No");
const buttonSi = document.querySelector("#Si");

let fontSize = 2;

let mensaje = [
  "Estas segura?",
  "Piensalo bien",
  "Piensalo muy bien",
  "Estás convencida?",
  "Estás segura de esto?",
  "Segura?",
  "Convencida?",
];

buttonNo.addEventListener("click", () => {
  fontSize = fontSize + 0.5;
  buttonSi.style.fontSize = `${fontSize}rem`;

  const indexRandom = Math.floor(Math.random() * mensaje.length);

  buttonNo.textContent = mensaje[indexRandom];
});

buttonSi.addEventListener('click', () => {
  document.querySelector('#mensaje').style.display = 'flex'
})