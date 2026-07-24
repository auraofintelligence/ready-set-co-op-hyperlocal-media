const scenarios = {
  event: {
    sourceTitle: "A Saturday clean-up",
    source:
      "A community group wants to share the time, meeting point, what to bring, weather check and a public contact method for Saturday’s clean-up.",
    tags: ["Event details", "Weather check", "Public contact"],
    toolTitle: "Straddie Noticeboard Network",
    toolNote:
      "Use a simple public-notice builder to prepare a clear phone, web or screen version without adding private group details.",
    toolUrl: "https://auraofintelligence.github.io/straddie-noticeboard-network/",
    checks: {
      facts: "Confirm the date, start and finish time, meeting point and organiser.",
      permission: "Use a public contact method and only share approved photos.",
      care: "State safety, access, weather and what volunteers should bring.",
    },
    phoneTitle: "Saturday clean-up",
    phoneCopy:
      "The short version gives the time, meeting point, what to bring and the checked weather note.",
    screenTitle: "Help for an hour",
    screenCopy:
      "Big type shows the essential details and a simple way to find the full notice.",
    networkTitle: "Why the clean-up matters",
    networkCopy:
      "A follow-up story can thank helpers, show the result and share the next practical need.",
    archiveTitle: "Keep the useful trail",
    archiveCopy:
      "Save the approved notice, source contact, permission notes, result and any correction.",
    learning:
      "A beginner could learn to check a date, format a clear notice, add alt text to a photo or prepare the large-type screen version. The next event becomes easier because the method did not disappear with the first post.",
  },
  project: {
    sourceTitle: "A club fixes something useful",
    source:
      "A local club has repaired a shared space. It wants to show what changed, thank the helpers and explain the next small thing it needs.",
    tags: ["Before and after", "Helper thanks", "Next need"],
    toolTitle: "Straddie Content Assets Kit",
    toolNote:
      "Use the business, asset and wish-list builders to separate what the club has, what was used and what support is still needed.",
    toolUrl: "https://auraofintelligence.github.io/straddie-content-assets-kit/",
    checks: {
      facts: "Confirm what was repaired, when it happened and who can be credited.",
      permission: "Check image approval and do not reveal private storage or security details.",
      care: "Thank people accurately and describe the next need without pressure or exaggeration.",
    },
    phoneTitle: "One job finished",
    phoneCopy:
      "A short before-and-after post shows the result, thanks approved helpers and links to the next need.",
    screenTitle: "Local hands, useful result",
    screenCopy:
      "A simple slide celebrates the finished job without cramming in the whole project history.",
    networkTitle: "How the fix came together",
    networkCopy:
      "A longer story can explain the need, the work, what people learnt and the next invitation.",
    archiveTitle: "Evidence for the next step",
    archiveCopy:
      "Keep approved photos, costs or in-kind notes, volunteer records and the follow-up task.",
    learning:
      "A beginner could learn to take a consistent before-and-after photo, write a caption, list the gear used or record a short helper quote. That work also makes future grant evidence easier.",
  },
  interview: {
    sourceTitle: "A chat with a local maker",
    source:
      "A local maker agrees to a short interview about what they create, why they do it and what kind of support would genuinely help.",
    tags: ["Five questions", "Clear consent", "Maker’s own words"],
    toolTitle: "Film Club Documentary Builders",
    toolNote:
      "Use the interview, source-trail and subject builders to plan the conversation and keep public notes separate from private research.",
    toolUrl: "https://auraofintelligence.github.io/film-club-documentary-builders/",
    checks: {
      facts: "Confirm names, project details, links and any claims mentioned in the interview.",
      permission: "Agree on recording, editing, images, where it may appear and what stays off the record.",
      care: "Keep the maker’s meaning and natural voice instead of forcing a sales pitch onto them.",
    },
    phoneTitle: "Meet a local maker",
    phoneCopy:
      "A short approved quote and image can introduce the person and point to the full story.",
    screenTitle: "Made here",
    screenCopy:
      "A large, clear card shows the maker, one approved line and where to learn more.",
    networkTitle: "The fuller conversation",
    networkCopy:
      "The interview can become a story, audio piece or short video with the source and permission trail attached.",
    archiveTitle: "Notes that remain useful",
    archiveCopy:
      "Keep the approved transcript, release boundary, source links, final edit and correction contact.",
    learning:
      "A beginner could learn to prepare one good question, monitor sound, write a true caption or check a transcript. The maker gets a useful story and the learner gets real practice.",
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
    tab.setAttribute("tabindex", isActive ? "0" : "-1");
  });

  const scenarioPanel = document.getElementById("scenario-panel");
  const activeTab = Array.from(tabs).find((tab) => tab.dataset.scenario === key);
  if (scenarioPanel && activeTab) {
    scenarioPanel.setAttribute("aria-labelledby", activeTab.id);
  }

  setText("source-title", scenario.sourceTitle);
  setText("source-note", scenario.source);

  const tags = document.getElementById("source-tags");
  if (tags) {
    tags.replaceChildren(
      ...scenario.tags.map((tag) => {
        const item = document.createElement("b");
        item.textContent = tag;
        return item;
      })
    );
  }

  setText("tool-title", scenario.toolTitle);
  setText("tool-note", scenario.toolNote);
  const toolLink = document.getElementById("tool-link");
  if (toolLink) toolLink.href = scenario.toolUrl;

  setText("fact-check", scenario.checks.facts);
  setText("permission-check", scenario.checks.permission);
  setText("care-check", scenario.checks.care);
  setText("phone-title", scenario.phoneTitle);
  setText("phone-copy", scenario.phoneCopy);
  setText("screen-title", scenario.screenTitle);
  setText("screen-copy", scenario.screenCopy);
  setText("network-output-title", scenario.networkTitle);
  setText("network-output-copy", scenario.networkCopy);
  setText("archive-title", scenario.archiveTitle);
  setText("archive-copy", scenario.archiveCopy);
  setText("learning-copy", scenario.learning);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => renderScenario(tab.dataset.scenario));
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    const tabList = Array.from(tabs);
    const currentIndex = tabList.indexOf(tab);
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextTab = tabList[(currentIndex + direction + tabList.length) % tabList.length];
    nextTab.focus();
    renderScenario(nextTab.dataset.scenario);
  });
});
