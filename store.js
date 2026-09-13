const ranks = {
  celestial: {
    name: "Celestial",
    price: "€4.99",
    icon: "✦",
    description: "Unlock exclusive perks and stand out on LushMC."
  },

  royal: {
    name: "Royal",
    price: "€9.99",
    icon: "♛",
    description: "Powerful perks and exclusive features for your journey."
  },

  mythic: {
    name: "Mythic",
    price: "€14.99",
    icon: "✧",
    description: "The ultimate LushMC rank with the best exclusive perks."
  }
};

const params = new URLSearchParams(window.location.search);

const selectedRank = (
  params.get("rank") || "celestial"
).toLowerCase();

const rank = ranks[selectedRank] || ranks.celestial;

document.getElementById("rankName").textContent = rank.name;
document.getElementById("rankPrice").textContent = rank.price;
document.getElementById("rankIcon").textContent = rank.icon;
document.getElementById("rankDescription").textContent = rank.description;

document.title = `${rank.name} — LushMC Store`;


/* USERNAME VALIDATION */

const form = document.getElementById("purchaseForm");
const usernameInput = document.getElementById("username");
const errorMessage = document.getElementById("errorMessage");
const counter = document.getElementById("usernameCounter");

function updateCounter() {
  counter.textContent = `${usernameInput.value.length} / 20`;
}

function validateUsername() {

  const username = usernameInput.value.trim();

  if (username.length === 0) {
    errorMessage.textContent = "Please enter your Minecraft username.";
    return false;
  }

  if (username.length < 3) {
    errorMessage.textContent =
      "Username must be at least 3 characters.";
    return false;
  }

  if (username.length > 20) {
    errorMessage.textContent =
      "Username must be 20 characters or less.";
    return false;
  }

  /*
   * Minecraft usernames normally use letters,
   * numbers and underscores.
   */

  if (!/^[A-Za-z0-9_]+$/.test(username)) {
    errorMessage.textContent =
      "Username can only contain letters, numbers and underscores.";
    return false;
  }

  errorMessage.textContent = "";

  return true;
}

usernameInput.addEventListener("input", () => {
  updateCounter();

  if (usernameInput.value.length > 0) {
    validateUsername();
  } else {
    errorMessage.textContent = "";
  }
});

form.addEventListener("submit", (event) => {

  event.preventDefault();

  if (!validateUsername()) {
    usernameInput.focus();
    return;
  }

  const username = usernameInput.value.trim();

  /*
   * Visual/demo checkout only.
   */

  alert(
    `Demo checkout\n\n` +
    `Rank: ${rank.name}\n` +
    `Minecraft Username: ${username}\n` +
    `Price: ${rank.price}\n\n` +
    `No payment has been processed.`
  );

});
