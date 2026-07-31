const typingText = document.querySelector(".typing-text");

const words = [
  "MERN Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Enthusiast",
  "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!isDeleting) {

    typingText.textContent = currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

  } else {

    typingText.textContent = currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex++;

      if (wordIndex === words.length) {
        wordIndex = 0;
      }
    }

  }

  const speed = isDeleting ? 60 : 120;

  setTimeout(typeEffect, speed);

}

typeEffect();