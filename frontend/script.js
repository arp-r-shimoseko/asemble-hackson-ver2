const frequentWords = [
  {
    word: "Git hub",
    count: 13,
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    image: `
      <svg viewBox="0 0 640 280" role="img" aria-label="Git hub のイメージ">
        <rect width="640" height="280" fill="#cfcfcf" />
      </svg>
    `,
  },
  {
    word: "Git hub",
    count: 11,
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    image: `
      <svg viewBox="0 0 640 280" role="img" aria-label="Git hub のイメージ">
        <rect width="640" height="280" fill="#cfcfcf" />
      </svg>
    `,
  },
  {
    word: "Git hub",
    count: 9,
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    image: `
      <svg viewBox="0 0 640 280" role="img" aria-label="Git hub のイメージ">
        <rect width="640" height="280" fill="#cfcfcf" />
      </svg>
    `,
  },
  {
    word: "Git hub",
    count: 7,
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    image: `
      <svg viewBox="0 0 640 280" role="img" aria-label="Git hub のイメージ">
        <rect width="640" height="280" fill="#cfcfcf" />
      </svg>
    `,
  },
  {
    word: "Git hub",
    count: 6,
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    image: `
      <svg viewBox="0 0 640 280" role="img" aria-label="Git hub のイメージ">
        <rect width="640" height="280" fill="#cfcfcf" />
      </svg>
    `,
  },
  {
    word: "Git hub",
    count: 5,
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    image: `
      <svg viewBox="0 0 640 280" role="img" aria-label="Git hub のイメージ">
        <rect width="640" height="280" fill="#cfcfcf" />
      </svg>
    `,
  },
  {
    word: "Git hub",
    count: 4,
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    image: `
      <svg viewBox="0 0 640 280" role="img" aria-label="Git hub のイメージ">
        <rect width="640" height="280" fill="#cfcfcf" />
      </svg>
    `,
  },
  {
    word: "Git hub",
    count: 3,
    description: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    image: `
      <svg viewBox="0 0 640 280" role="img" aria-label="Git hub のイメージ">
        <rect width="640" height="280" fill="#cfcfcf" />
      </svg>
    `,
  },
];

const wordHistoryList = document.getElementById("word-history-list");
const rankingList = document.getElementById("ranking-list");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("word-search");

if (wordHistoryList) {
  const sortedWords = [...frequentWords].sort((left, right) => right.count - left.count);
  const ribbonColors = ["#ff5c5c", "#69ff00", "#ffd84d"];

  const cardsMarkup = sortedWords
    .slice(0, 3)
    .map(({ word, count, description, image }, index) => {
      const flagColor = ribbonColors[index] ?? "#d7d0c4";
      return `
        <article class="word-card" style="--flag-color: ${flagColor}">
          <button class="word-card__toggle" type="button" aria-expanded="false">
            <div class="word-card__header">
              <h3 class="word-card__name">${word}</h3>
              <span class="word-card__badge">${count}回</span>
            </div>
            <p class="word-card__meta">${description}</p>
            <div class="word-card__hint" aria-hidden="true">
              <span class="word-card__hint-icon">⌄</span>
            </div>
          </button>
          <div class="word-card__detail" aria-hidden="true">
            <div class="word-card__detail-inner">
              <div class="word-card__image">${image}</div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  wordHistoryList.innerHTML = cardsMarkup;

  const toggleButtons = wordHistoryList.querySelectorAll(".word-card__toggle");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".word-card");
      const detail = card?.querySelector(".word-card__detail");

      if (!card || !detail) {
        return;
      }

      const isOpen = card.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
      detail.setAttribute("aria-hidden", String(!isOpen));
    });
  });
}

if (rankingList) {
  const rankingMarkup = [...frequentWords]
    .sort((left, right) => right.count - left.count)
    .slice(0, 8)
    .map(({ word, count }) => {
      return `
        <article class="ranking-item">
          <span class="ranking-item__word">${word}</span>
          <span class="ranking-item__count">${count}回</span>
        </article>
      `;
    })
    .join("");

  rankingList.innerHTML = rankingMarkup;
}

if (searchForm && searchInput) {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    searchInput.blur();
  });
}
