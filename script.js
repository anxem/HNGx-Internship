const slackUserName = document.querySelector('[data-testid="slackUserName"]');
slackUserName.textContent = "Chibuzor Anselm Obilor";

const slackDisplayImage = document.querySelector(
  '[data-testid="slackDisplayImage"]'
);
slackDisplayImage.src =
  "./images/filtered-63F8ECE1-D421-40B9-B6FC-75C8AD14F086_000.png";
slackDisplayImage.alt = "iAnxem";

const currentDayOfTheWeek = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
currentDayOfTheWeek.textContent = new Date().toLocaleDateString("en-US", {
  weekday: "long",
});

const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
currentUTCTime.textContent = Date.now();

const myTrack = document.querySelector('[data-testid="myTrack"]');
myTrack.textContent = "Frontend";

const githubURL = document.querySelector('[data-testid="githubURL"]');
githubURL.href = "https://github.com/anxem/your-repository";
