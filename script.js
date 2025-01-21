const textareaEl = document.querySelector(".textarea");
const charactersNumberEl = document.querySelector(".stat__number--characters");
const wordsNumberEl = document.querySelector(".stat__number--words");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const twitterTitleEl = document.querySelector(".stat__title--twitter");
const discordNumberEl = document.querySelector(".stat__number--discord");
const discordTitleEl = document.querySelector(".stat__title--discord");

const updateStats = () => {
  if (textareaEl.value.includes("<script>")) {
    textareaEl.value = textareaEl.value.replace("<script>", "Gojo is Gay");
    alert("NO SCRIPTS ALLOWED!!! REMOVE IT!!!");
  }

  let numberOfWords = textareaEl.value.split(" ").length;
  if (textareaEl.value.length === 0) {
    numberOfWords = 0;
  }
  const numberOfCharacters = textareaEl.value.length;
  const twitterCharactersLeft = 4000 - numberOfCharacters;
  const discordCharactersLeft = 2000 - numberOfCharacters;

  // discord char limit alert
  if (discordCharactersLeft < 0) {
    discordTitleEl.classList.add("stat__title--alert");
    discordNumberEl.classList.add("stat__number--alert");
  } else {
    discordTitleEl.classList.remove("stat__title--alert");
    discordNumberEl.classList.remove("stat__number--alert");
  }

  // twitter char limit alert
  if (twitterCharactersLeft < 0) {
    twitterTitleEl.classList.add("stat__title--alert");
    twitterNumberEl.classList.add("stat__number--alert");
  } else {
    twitterTitleEl.classList.remove("stat__title--alert");
    twitterNumberEl.classList.remove("stat__number--alert");
  }

  wordsNumberEl.textContent = numberOfWords;
  charactersNumberEl.textContent = numberOfCharacters;
  twitterNumberEl.textContent = twitterCharactersLeft;
  discordNumberEl.textContent = discordCharactersLeft;
};

textareaEl.addEventListener("input", updateStats);
