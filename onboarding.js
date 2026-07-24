const onboardingRoutes = {
  story: {
    goalLabel: "Share a story or correction",
    action: "Prepare the six facts a newsroom would need.",
    explanation:
      "Keep it simple: what happened, when, where, who the source is, what can be shared and what remains unknown.",
    link: "https://auraofintelligence.github.io/minjerribah-screen-media-network/join/",
    linkLabel: "Open the public conversation ↗",
    secondary: "demo.html",
    secondaryLabel: "See a story example",
    prompts: [
      ["What happened or needs correcting", "[Write one clear sentence]"],
      ["Exact date and time", "[Add what is confirmed]"],
      ["Source", "[Person, document or official link]"],
      ["What can be shared publicly", "[Be specific]"],
      ["What remains unknown", "[Do not guess]"],
    ],
  },
  learn: {
    goalLabel: "Learn a media skill",
    action: "Choose one small newsroom task and practise it on a clear example.",
    explanation:
      "Start with source checking, captions, a clean phone shot, sound, transcription or a short edit. One useful task is enough for a first session.",
    link: "hyperlocal-media.html#roles",
    linkLabel: "See the role pathway",
    secondary: "demo.html",
    secondaryLabel: "Open a practice story",
    prompts: [
      ["Skill I want to try", "[Source check, captions, filming, sound, edit or publishing]"],
      ["What I can already do", "[Keep it honest and short]"],
      ["Device or gear I have", "[A phone is a valid starting kit]"],
      ["Time I can give", "[One hour, one session or a regular rhythm]"],
      ["Support I would need", "[Example, mentor, gear, transport or accessibility]"],
    ],
  },
  make: {
    goalLabel: "Plan a film or interview",
    action: "Start a documentary note before committing to production.",
    explanation:
      "Write the real question, the source trail, who may be involved and the first useful scene or interview.",
    link: "https://auraofintelligence.github.io/film-club-documentary-builders/",
    linkLabel: "Open Documentary Builders ↗",
    secondary: "connections.html#make",
    secondaryLabel: "See other making tools",
    prompts: [
      ["Working title", "[A temporary title is fine]"],
      ["The real question", "[What are you trying to understand?]"],
      ["Possible sources", "[People, documents, places or archives]"],
      ["First useful scene or interview", "[Keep the first move small]"],
      ["What is not yet agreed", "[People, access, locations, dates or release]"],
    ],
  },
  assets: {
    goalLabel: "Map gear or media assets",
    action: "Separate what you have, what can be shared and what is still needed.",
    explanation:
      "A clear asset list can stop duplicate spending and make later training, borrowing, sponsorship or grant planning more realistic.",
    link: "https://auraofintelligence.github.io/straddie-content-assets-kit/",
    linkLabel: "Open the Content Assets Kit ↗",
    secondary: "connections.html#make",
    secondaryLabel: "See the wider toolbox",
    prompts: [
      ["What I want to make", "[Film, interview, podcast, event, notice or other]"],
      ["Gear I already have", "[General list only]"],
      ["Gear that may be shareable", "[Only with the owner’s agreement]"],
      ["What is missing", "[Need, hire, borrow or buy]"],
      ["Details that must stay out of public notes", "[Locations, security or private contacts]"],
    ],
  },
  screen: {
    goalLabel: "Prepare a notice or host a screen",
    action: "Begin with one useful notice and one willing location.",
    explanation:
      "Test the content, readability, update method and responsibility before planning an island-wide screen network.",
    link: "https://auraofintelligence.github.io/straddie-noticeboard-network/",
    linkLabel: "Open the Noticeboard Network ↗",
    secondary: "https://auraofintelligence.github.io/minjerribah-screen-media-network/network/",
    secondaryLabel: "See the wider screen proposal ↗",
    prompts: [
      ["Notice or screen purpose", "[What should people know or do?]"],
      ["Audience", "[Who needs to see it?]"],
      ["Possible willing location", "[Do not assume access]"],
      ["Who would update it", "[Name a role, not an unconfirmed partner]"],
      ["How stale content would be removed", "[Date, expiry or update check]"],
    ],
  },
  coop: {
    goalLabel: "Help shape Ready SET Co-op",
    action: "Start with the trust path and the part you actually care about.",
    explanation:
      "You do not need to support the whole proposal. Bring a question, correction, skill, concern or one piece you would like to explore.",
    link: "https://auraofintelligence.github.io/ready-set-co-op-trust-hub/",
    linkLabel: "Open the Trust Hub ↗",
    secondary: "https://auraofintelligence.github.io/minjerribah-screen-media-network/join/",
    secondaryLabel: "Have your say on the media pitch ↗",
    prompts: [
      ["The part I care about", "[Media, training, jobs, trust, space, gear or another piece]"],
      ["My question or correction", "[Say it plainly]"],
      ["What I could offer", "[Optional: time, skill, gear, place, knowledge or feedback]"],
      ["What would make me cautious", "[A useful boundary or concern]"],
      ["The next conversation", "[Do not promise more than you mean]"],
    ],
  },
};

const profileLabels = {
  resident: "Resident",
  club: "Club or group",
  business: "Business or sole trader",
  creative: "Creative or maker",
  learner: "Learner or future worker",
  visitor: "New or long-stay visitor",
};

const onboardingForm = document.getElementById("onboarding-form");
const resultTitle = document.getElementById("result-title");
const resultAction = document.getElementById("result-action");
const resultExplanation = document.getElementById("result-explanation");
const resultLink = document.getElementById("result-link");
const resultSecondaryLink = document.getElementById("result-secondary-link");
const starterBrief = document.getElementById("starter-brief");
const routeResult = document.getElementById("route-result");
const copyButton = document.getElementById("copy-brief");
const copyStatus = document.getElementById("copy-status");

function selectedValue(name) {
  const selected = onboardingForm.querySelector(`input[name="${name}"]:checked`);
  return selected ? selected.value : "";
}

function buildBrief(profile, route) {
  const lines = [
    "READY SET CO-OP MEDIA — STARTER BRIEF",
    "",
    `I am here as: ${profileLabels[profile]}`,
    `I want to: ${route.goalLabel}`,
    "",
  ];

  route.prompts.forEach(([label, prompt]) => {
    lines.push(`${label}:`, prompt, "");
  });

  return lines.join("\n").trim();
}

function renderRoute(event) {
  if (event) event.preventDefault();
  const profile = selectedValue("profile");
  const goal = selectedValue("goal");
  const route = onboardingRoutes[goal];
  if (!profile || !route) return;

  resultTitle.textContent = `${profileLabels[profile]} + ${route.goalLabel.toLowerCase()}`;
  resultAction.textContent = route.action;
  resultExplanation.textContent = route.explanation;
  resultLink.href = route.link;
  resultLink.textContent = route.linkLabel;
  resultSecondaryLink.href = route.secondary;
  resultSecondaryLink.textContent = route.secondaryLabel;
  starterBrief.textContent = buildBrief(profile, route);
  copyStatus.textContent = "";
  routeResult.scrollIntoView({ behavior: "smooth", block: "start" });
}

onboardingForm.addEventListener("submit", renderRoute);

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(starterBrief.textContent);
    copyStatus.textContent = "Starter brief copied.";
  } catch {
    copyStatus.textContent = "Copy was blocked. Select the brief text and copy it manually.";
  }
});
