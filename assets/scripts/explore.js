// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const button = document.querySelector("button");
  const voiceSelect = document.querySelector("select");
  const inputTxt = document.getElementById("text-to-speak");
  const img = document.querySelector("img");



  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener("click", (event) => {
    event.preventDefault();
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    }
    synth.speak(utterThis);
    img.src = "assets/images/smiling-open.png";
    utterThis.addEventListener("end", (event) => {
      img.src = "assets/images/smiling.png";
    });
    
    inputTxt.blur();
  });

  
}