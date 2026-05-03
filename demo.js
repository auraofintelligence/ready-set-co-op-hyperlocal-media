const scenarios = {
  comp: {
    source:
      "PLFC shares a competition wrap-up: broad fishing zones, tide timing, photo-measured catch lengths on legal measuring devices, legal food catches where kept, sponsor thanks and a short secretary note.",
    tags: ["Comp recap", "Length photos", "No weigh-to-win"],
    agent: [
      "Separate private member details from public catch records.",
      "Extract species, length class, kept/released note, tide and weather timing.",
      "Create conservation-aware news copy without implying legal food fish are wrong.",
    ],
    checks: {
      facts: "Confirm photo length records, sponsor names and date",
      permission: "Use broad zones and approved catch photos only",
      tone: "Community pride, safety-aware, locally useful",
    },
    phoneTitle: "Comp wrap-up posted",
    phoneCopy: "Length-photo results, release notes and next comp notice are ready. Tide story and sponsor thanks included.",
    tvTitle: "Point Lookout fishing weekend",
    tvCopy: "Good turnout, rising tide window and length-based comp highlights.",
    tvTicker: "Next: members night and junior fishing clinic",
    webTitle: "Fishing club weekend becomes community signal",
    webCopy:
      "The public story connects sport, family participation, local sponsors, safe conditions and the next invitation for residents and visitors.",
    kioskTitle: "Public data point saved",
    kioskCopy:
      "Event type, broad zone, tide phase, weather note, length class, kept/released status and sponsor tags become reusable local context.",
  },
  conditions: {
    source:
      "PLFC shares a public-safe field snapshot: morning tide window, wind watch, UV note, broad Moreton Bay zone and no precise team locations.",
    tags: ["Tide window", "Weather monitor", "No precise GPS"],
    agent: [
      "Convert tide and weather notes into plain timing advice.",
      "Tag the snapshot for seasonal pattern learning and future simulation.",
      "Create public outlet versions without revealing team routes.",
    ],
    checks: {
      facts: "Confirm forecast source and observation time",
      permission: "Keep live location and team identity private",
      tone: "Helpful, non-alarmist, safety-first",
    },
    phoneTitle: "Morning fishing window",
    phoneCopy: "Rising tide and light morning wind look useful. Check official weather before heading out.",
    tvTitle: "Today’s coastal conditions",
    tvCopy: "Rising tide signal, UV high, wind watch after lunch.",
    tvTicker: "Good local timing info; official safety sources still apply",
    webTitle: "Public field snapshot for Point Lookout waters",
    webCopy:
      "The story explains the timing context without exposing crews: tide phase, broad zone, weather signal and what members learned from the day.",
    kioskTitle: "Simulator timing layer",
    kioskCopy:
      "Tide phase, wind category, UV flag, broad zone and activity type become a public-safe pattern for future planning.",
  },
  clinic: {
    source:
      "PLFC shares a junior fishing clinic pack: workshop topic, family attendance range, safe fish handling lesson, sponsor support and approved images.",
    tags: ["Junior clinic", "Family learning", "Sponsor-safe"],
    agent: [
      "Turn the clinic into a family-friendly news item and invite pathway.",
      "Extract learning outcomes for grants and community education reporting.",
      "Prepare phone, venue screen, website and kiosk versions.",
    ],
    checks: {
      facts: "Confirm facilitator, date and support partners",
      permission: "Children's images require explicit approval",
      tone: "Joyful, protective, welcoming to beginners",
    },
    phoneTitle: "Junior clinic recap",
    phoneCopy: "Families learned safe handling, tide basics and club pathways. Next clinic interest list is open.",
    tvTitle: "Kids learning on the coast",
    tvCopy: "Safe fishing skills, family day and local sponsor support.",
    tvTicker: "Join the next beginner-friendly club activity",
    webTitle: "Fishing education becomes community capacity",
    webCopy:
      "The article shows how a club activity builds skills, family participation, volunteer pathways, sponsor value and evidence for future programs.",
    kioskTitle: "Learning archive point",
    kioskCopy:
      "Topic, age range, attendance band, learning outcome and consent-cleared media become reusable education and grant evidence.",
  },
};

const tabs = document.querySelectorAll(".scenario-tab");
const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
};

function renderScenario(key) {
  const scenario = scenarios[key];
  if (!scenario) return;

  tabs.forEach((tab) => {
    const isActive = tab.dataset.scenario === key;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  setText("source-note", scenario.source);
  const tags = document.getElementById("source-tags");
  tags.replaceChildren(
    ...scenario.tags.map((tag) => {
      const item = document.createElement("b");
      item.textContent = tag;
      return item;
    })
  );

  const agentList = document.getElementById("agent-list");
  agentList.replaceChildren(
    ...scenario.agent.map((line) => {
      const item = document.createElement("li");
      item.textContent = line;
      return item;
    })
  );

  setText("fact-check", scenario.checks.facts);
  setText("permission-check", scenario.checks.permission);
  setText("tone-check", scenario.checks.tone);
  setText("phone-title", scenario.phoneTitle);
  setText("phone-copy", scenario.phoneCopy);
  setText("tv-title", scenario.tvTitle);
  setText("tv-copy", scenario.tvCopy);
  setText("tv-ticker", scenario.tvTicker);
  setText("web-title", scenario.webTitle);
  setText("web-copy", scenario.webCopy);
  setText("kiosk-title", scenario.kioskTitle);
  setText("kiosk-copy", scenario.kioskCopy);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => renderScenario(tab.dataset.scenario));
});
