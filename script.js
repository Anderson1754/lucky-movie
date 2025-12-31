const blocksContainer = document.querySelector(".blocks");
const subtitle = document.getElementById("subtitle");
const movies = [
{
title: "🎬 Tune in for Love",
msg: "Un amor que insiste en encontrarse, incluso cuando la vida se interpone.",
secret: ""
},
{
title: "🎬 Whisper of the Heart",
msg: "Sueños, primeros amores y esa magia suave que solo se siente en compañía.",
secret: ""
},
{
title: "🎬 Past Lives",
msg: "Una historia delicada sobre el amor que fue, el que es y el que pudo ser.",
secret: "Esta película deja silencios que solo se entienden cuando se ven abrazados."
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
function shuffleBlocks() {
  subtitle.textContent = "🔄 El destino se está mezclando...";
  blocksContainer.classList.add("shuffle");

  setTimeout(() => {
    blocksContainer.classList.remove("shuffle");
    subtitle.textContent = "🎲 Ahora elige un bloque";
  }, 2000);
}
window.onload = shuffleBlocks;
subtitle.textContent = "✨ No hay vuelta atrás...";

