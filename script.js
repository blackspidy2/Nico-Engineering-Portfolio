// When the button is clicked, change the background color randomly
const button = document.getElementById("colorButton");

button.addEventListener("click", () => {
  const randomColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
  document.body.style.backgroundColor = randomColor;
});
