const dialogueEl = document.getElementById("dialogue");
const characterEl = document.getElementById("character");
const bgEl = document.getElementById("bg");
const choicesEl = document.getElementById("choices");

const scenes = {
  intro: {
    text: "Frieren: Fern, apa kamu pernah kepikiran untuk belajar koding? Aku penasaran banget sama dunia itu.",
    character: "images/frieren.png",
    bg: "images/yaya (11).png",
    choices: [
      { text: "Fern: Aku juga penasaran! Kita coba sama-sama yuk!", next: "choosePath" }
    ]
  },
  choosePath: {
    text: "Fern: Kita bisa pilih bahasa yang cocok. Tapi masing-masing punya cerita dan tantangannya sendiri.",
    character: "images/fern.jpg",
    bg: "images/yaya (11).png",
    choices: [
      { text: "Belajar Java", next: "javaPath" },
      { text: "Belajar Python", next: "pythonPath" },
      { text: "Belajar C++", next: "cppPath" }
    ]
  },
  javaPath: {
    text: "Frieren: Java? Kayaknya keren. Tapi aku takut gak bisa ikutin ritmenya yang cepat.",
    character: "images/frieren.png",
    bg: "images/yaya (11).png",
    choices: [
      { text: "Fern: Kita pelan-pelan, mulai dari OOP dulu.", next: "endScene" }
    ]
  },
  pythonPath: {
    text: "Fern: Python tuh seperti menggambar dengan kode. Simple, tapi powerful.",
    character: "images/fern.jpg",
    bg: "images/yaya (11).png",
    choices: [
      { text: "Frieren: Wah, aku suka yang ekspresif!", next: "endScene" }
    ]
  },
  cppPath: {
    text: "Fern: C++ kayak medan perang... pointer, memory leak, segfault...",
    character: "images/fern.jpg",
    bg: "images/yaya (11).png",
    choices: [
      { text: "Frieren: Tapi aku suka tantangan! Yuk, kita gas!", next: "endScene" }
    ]
  },
  endScene: {
    text: "Mereka tersenyum. Ini baru awal dari perjalanan besar mereka di dunia pemrograman.",
    character: "images/frieren.png",
    bg: "images/yaya (11).png",
    choices: [
      { text: "Main lagi dari awal", next: "intro" }
    ]
  }
};

function renderScene(sceneName) {
  const scene = scenes[sceneName];
  typeDialogue(scene.text);
  characterEl.src = scene.character;
  bgEl.src = scene.bg;

  characterEl.classList.add("fade");
  dialogueEl.classList.add("typewriter");

  choicesEl.innerHTML = "";
  setTimeout(() => {
    scene.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.textContent = choice.text;
      btn.onclick = () => {
        dialogueEl.classList.remove("typewriter");
        renderScene(choice.next);
      };
      choicesEl.appendChild(btn);
    });
  }, 2200); // setelah typing selesai
}

function typeDialogue(text) {
  dialogueEl.innerHTML = "";
  let i = 0;
  const typingSpeed = 40;
  function type() {
    if (i < text.length) {
      dialogueEl.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, typingSpeed);
    }
  }
  type();
}

window.onload = () => {
  renderScene("intro");
};
