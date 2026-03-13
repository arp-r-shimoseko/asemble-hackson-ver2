const frequentWords = [
  { word: "git branch", count: 3 },
  { word: "Promise", count: 5 },
  { word: "closure", count: 2 },
  { word: "callback", count: 4 },
];

const getLevelClassName = (count) => {
  if (count >= 4) {
    return "word-card--level-high";
  }

  if (count >= 2) {
    return "word-card--level-mid";
  }

  return "word-card--level-low";
};

const wordHistoryList = document.getElementById("word-history-list");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("word-search");

if (wordHistoryList) {
  const cardsMarkup = frequentWords
    .map(({ word, count }) => {
      const levelClassName = getLevelClassName(count);

      return `
        <article class="word-card ${levelClassName}">
          <div class="word-card__header">
            <h3 class="word-card__name">${word}</h3>
            <span class="word-card__badge">${count}回</span>
          </div>
          <p class="word-card__meta">検索履歴のダミーデータです。あとから保存機能や詳細表示を追加できます。</p>
        </article>
      `;
    })
    .join("");

  wordHistoryList.innerHTML = cardsMarkup;
}

if (searchForm && searchInput) {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    searchInput.blur();
  });
}
