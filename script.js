const articles = [
  {
    slug: "notes-passed-across-a-table",
    title: "Notes Passed Across a Table",
    theme: "Sharing",
    minutes: 5,
    dek:
      "A thought changes texture when it leaves the private room of the mind and becomes held between people.",
    excerpt: "On the quiet courage of letting another person hold a piece of what you noticed.",
    body: [
      "The first act of sharing is rarely the speech itself. It is the small private decision to let the thought become visible. Before a sentence reaches another person, it has already crossed a difficult threshold: from protected weather into common air.",
      "A note passed across a table is not grand, but it asks for trust. It says, here is one version of what I saw. It makes room for revision without pretending the original seeing did not matter.",
      "What arrives back is often more useful than agreement. A pause, a question, a different memory, a hand turning the page. Shared experience does not erase solitude. It gives solitude a shoreline.",
      "Maybe this is why the best conversations feel less like performance and more like repair. Something in us gets put back into proportion. The world, which had narrowed around a single interpretation, opens again."
    ]
  },
  {
    slug: "the-shape-of-a-good-question",
    title: "The Shape of a Good Question",
    theme: "Thinking",
    minutes: 4,
    dek:
      "Questions are not only tools for answers. They are rooms we build for attention.",
    excerpt: "A good question does not corner the mind. It gives it somewhere precise to stand.",
    body: [
      "A question can be a door, a mirror, a lantern, or a fence. Some questions widen the field immediately. Others make the same small circle feel more official.",
      "The good ones tend to have a patient shape. They do not demand that life become simpler than it is. They point toward a place where something can be examined without being reduced.",
      "When I am stuck, I often discover that the problem is not a lack of effort but a poorly made question. I have asked, why am I like this, when I needed to ask, what condition keeps producing this response. One question blames. The other begins to notice.",
      "Thinking becomes kinder when its questions become more exact. Exactness is not coldness. It is a form of care."
    ]
  },
  {
    slug: "ordinary-pilgrimages",
    title: "Ordinary Pilgrimages",
    theme: "Life",
    minutes: 6,
    dek:
      "Some journeys are measured in miles. Others happen in the distance between reaction and response.",
    excerpt: "On the small recurring routes that teach us who we are becoming.",
    body: [
      "Every life contains routes that look too ordinary to name. The walk to the mailbox. The drive home after a hard conversation. The sink full of dishes after people leave.",
      "These are not dramatic passages, but they are passages. We cross them often enough that they begin to shape our gait. We learn what we reach for when the room goes quiet.",
      "The ordinary pilgrimage does not promise arrival. It offers repetition with a slight difference. One day you notice the tree that has been there for years. One day you apologize faster. One day the silence after disappointment feels less like punishment and more like space.",
      "A life is not only built by turning points. It is built by returns."
    ]
  },
  {
    slug: "borrowed-courage",
    title: "Borrowed Courage",
    theme: "Sharing",
    minutes: 5,
    dek:
      "Sometimes bravery is not manufactured alone. Sometimes it is lent, carried, and returned with interest.",
    excerpt: "How other people's steadiness can help us cross our own difficult rooms.",
    body: [
      "There are forms of courage that do not originate inside us. They arrive through proximity. Someone sits beside us without rushing the story. Someone says the true thing gently enough that we can bear to hear it.",
      "Borrowed courage is not dependency. It is the social life of resilience. It recognizes that people are often braver in the presence of a witness who does not require them to become impressive.",
      "The strange thing is that borrowed courage rarely remains borrowed. Once used, it becomes evidence. We remember that we did the hard thing, even if we did it with another person's steadiness nearby.",
      "The gift returns to the world changed. We become, in some later room, the person whose calm makes another person's next sentence possible."
    ]
  },
  {
    slug: "thinking-at-human-speed",
    title: "Thinking at Human Speed",
    theme: "Thinking",
    minutes: 4,
    dek:
      "The mind is not always more honest when it is faster. Sometimes clarity needs a slower instrument.",
    excerpt: "A defense of pacing, drafts, and the quiet interval before certainty.",
    body: [
      "Speed is useful until it starts impersonating truth. The first answer often has the confidence of a reflex. It may be right. It may also be merely familiar.",
      "Human-speed thinking leaves time for the second sensation. It lets a sentence cool. It gives the body a vote. It notices when certainty is arriving too cleanly, without the drag of contact with reality.",
      "This slowness is not avoidance. Avoidance has a cloudy center. Deliberation has edges. It gathers, compares, waits, and then moves.",
      "The reward is not perfect judgment. The reward is a mind less easily colonized by urgency."
    ]
  },
  {
    slug: "a-practice-of-returning",
    title: "A Practice of Returning",
    theme: "Life",
    minutes: 5,
    dek:
      "We do not become ourselves once. We return, forget, return again, and learn to recognize the path.",
    excerpt: "On attention as a practice of coming back without theatrical self-reproach.",
    body: [
      "Most practices are built on returning. The breath wanders, the hand loses rhythm, the day becomes cluttered, the promise to oneself grows faint.",
      "The important moment is not the wandering. It is the return. Not a dramatic return, not a shamed return, but the plain movement back toward what matters.",
      "There is mercy in this structure. A practice does not require continuous purity. It expects interruption. It gives interruption a place in the pattern.",
      "To return is to say that the path still exists, even after forgetting. That may be one of the most practical forms of hope."
    ]
  },
  {
    slug: "the-kindness-of-being-specific",
    title: "The Kindness of Being Specific",
    theme: "Sharing",
    minutes: 4,
    dek:
      "Specificity can be a way of saying: I was here with you, and I paid attention.",
    excerpt: "Why the smallest true detail can make care feel real.",
    body: [
      "General kindness is good. Specific kindness is often the kind that reaches us. It names the exact burden, the exact effort, the exact beauty someone thought no one saw.",
      "Specificity does not need ornament. It needs contact. I noticed how carefully you chose your words. I saw you stay when leaving would have been easier. That sentence helped me breathe.",
      "When care becomes specific, it becomes less like a mood and more like evidence. The other person can touch it. They can keep it.",
      "Perhaps this is one reason sharing matters: it lets attention become portable."
    ]
  }
];

const articleList = document.querySelector("#article-list");
const searchInput = document.querySelector("#article-search");
const filterButtons = document.querySelectorAll(".theme-tab");
const readerTheme = document.querySelector("#reader-theme");
const readerTime = document.querySelector("#reader-time");
const readerTitle = document.querySelector("#reader-title");
const readerDek = document.querySelector("#reader-dek");
const readerBody = document.querySelector("#reader-body");

let activeFilter = "All";
let activeSlug = articles[0].slug;

function matchesArticle(article, query) {
  const haystack = [article.title, article.theme, article.dek, article.excerpt]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query.trim().toLowerCase());
}

function filteredArticles() {
  const query = searchInput.value;
  return articles.filter((article) => {
    const themeMatch = activeFilter === "All" || article.theme === activeFilter;
    return themeMatch && matchesArticle(article, query);
  });
}

function renderList() {
  const visibleArticles = filteredArticles();
  articleList.replaceChildren();

  if (!visibleArticles.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No essays match this search.";
    articleList.append(empty);
    return;
  }

  if (!visibleArticles.some((article) => article.slug === activeSlug)) {
    activeSlug = visibleArticles[0].slug;
    renderReader(activeSlug);
  }

  visibleArticles.forEach((article) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "article-card";
    card.dataset.theme = article.theme;
    card.dataset.slug = article.slug;
    card.setAttribute("aria-pressed", article.slug === activeSlug ? "true" : "false");

    if (article.slug === activeSlug) {
      card.classList.add("is-active");
    }

    const top = document.createElement("div");
    top.className = "article-card-top";

    const theme = document.createElement("span");
    theme.textContent = article.theme;

    const dot = document.createElement("span");
    dot.className = "theme-dot";
    dot.setAttribute("aria-hidden", "true");

    top.append(theme, dot);

    const title = document.createElement("h3");
    title.textContent = article.title;

    const excerpt = document.createElement("p");
    excerpt.textContent = article.excerpt;

    card.append(top, title, excerpt);
    card.addEventListener("click", () => {
      activeSlug = article.slug;
      history.replaceState(null, "", `#${article.slug}`);
      renderReader(article.slug);
      renderList();
    });

    articleList.append(card);
  });
}

function renderReader(slug) {
  const article = articles.find((item) => item.slug === slug) || articles[0];
  activeSlug = article.slug;
  readerTheme.textContent = article.theme;
  readerTime.textContent = `${article.minutes} min read`;
  readerTitle.textContent = article.title;
  readerDek.textContent = article.dek;

  readerBody.replaceChildren();
  article.body.forEach((paragraphText) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = paragraphText;
    readerBody.append(paragraph);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    renderList();
  });
});

searchInput.addEventListener("input", renderList);

const initialSlug = window.location.hash.replace("#", "");
if (articles.some((article) => article.slug === initialSlug)) {
  activeSlug = initialSlug;
}

renderReader(activeSlug);
renderList();
