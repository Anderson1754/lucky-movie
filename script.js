const movies = [
  {
    title: "🎬 Orgullo y Prejuicio",
    msg: "Perfecta para verla abrazados 💕",
    secret: "💌 Si salió esta… te debo palomitas y una sorpresa 🍿😉"
  },
  {
    title: "🍿 Your Name",
    msg: "Promete lágrimas… y sonrisas 🥹",
    secret: ""
  },
  {
    title: "💖 La La Land",
    msg: "Una noche que no se olvida ✨",
    secret: ""
  }
];


// Mezclar
movies.sort(() => Math.random() - 0.5);

const blocks = document.querySelectorAll(".block");
const reveal = document.getElementById("reveal");
const movie = document.getElementById("movie");
const message = document.getElementById("message");
const subtitle = document.getElementById("subtitle");

blocks.forEach((block, index) => {
  block.addEventListener("click", () => {

    // Vibración en Android 📳
    if (navigator.vibrate) navigator.vibrate(200);

    blocks.forEach(b => b.style.pointerEvents = "none");

    block.classList.add("open");

    setTimeout(() => {
      movie.textContent = movies[index].title;
      message.textContent = movies[index].msg;
      reveal.classList.remove("hidden");
      subtitle.textContent = "✨ El destino habló";
    }, 800);
  });
});
if (movies[index].secret) {
  message.textContent += "\n\n" + movies[index].secret;
}
document.getElementById("nightBtn").addEventListener("click", () => {
  document.body.classList.toggle("night");
});
