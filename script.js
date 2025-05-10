const text = "Coding with pixels, powered by curiosity and creativity.";
const speed = 25;
let i = 0;

function typeWriter() {
  const animated = document.getElementById("animated-text");
  if (i < text.length) {
    animated.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
