document.addEventListener("DOMContentLoaded", () => {

  const blocksContainer = document.querySelector(".blocks");
  const blocks = document.querySelectorAll(".block");
  const subtitle = document.getElementById("subtitle");
  const reveal = document.getElementById("reveal");
  const movie = document.getElementById("movie");
  const message = document.getElementById("message");

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
      secret: "💌 Esta película deja silencios que solo se entienden cuando se ven abrazados."
    }
  ];

  // Mezclar películas
  movies.sort(() => Math.random() - 0.5);

  // Animación de mezcla
  function shuffleBlocks() {
    subtitle.textContent = "🔄 El destino se está mezclando...";
    blocksContainer.classList.add("shuffle");

    setTimeout(() => {
      blocksContainer.classList.remove("shuffle");
      subtitle.textContent = "🎲 Ahora elige un bloque";
    }, 2000);
  }

  shuffleBlocks();

  blocks.forEach((block, index) => {
    block.addEventListener("click", () => {

      // Vibración Android
      if (navigator.vibrate) navigator.vibrate(200);

      // Bloquear los otros
      blocks.forEach(b => b.style.pointerEvents = "none");

      block.classList.add("open");
      subtitle.textContent = "✨ No hay vuelta atrás...";

      setTimeout(() => {
        movie.textContent = movies[index].title;
        message.textContent = movies[index].msg;

        if (movies[index].secret) {
          message.textContent += "\n\n" + movies[index].secret;
        }

        reveal.classList.remove("hidden");
        subtitle.textContent = "✨ El destino habló";
      }, 800);

    });
  });

});
