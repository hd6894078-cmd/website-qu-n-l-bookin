document.addEventListener("DOMContentLoaded", () => {
  setupMenu();

  if (document.getElementById("featuredBooks")) {
    renderFeaturedBooks();
  }

  if (document.getElementById("bookList")) {
    setupBookPage();
  }

  if (document.getElementById("bookDetail")) {
    renderBookDetail();
  }
});

function setupMenu() {
  const button = document.getElementById("menuToggle");
  const menu = document.getElementById("mainMenu");

  if (button && menu) {
    button.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }
}

function createBookCard(book) {
  return `
    <article class="book-card">
      <a href="book-detail.html?id=${book.id}">
        <div class="cover" style="background:${book.color}">
          <span class="book-emoji">${book.emoji}</span>
          <span class="status ${book.status}">
            ${book.statusText}
          </span>
        </div>
        <div class="card-body">
          <h3>${book.title}</h3>
          <p class="author">${book.author}</p>
          <span class="category">${book.category}</span>
        </div>
      </a>
    </article>
  `;
}

function renderFeaturedBooks() {
  const box = document.getElementById("featuredBooks");
  box.innerHTML = books.slice(0, 4).map(createBookCard).join("");
}

function setupBookPage() {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  const categories = [...new Set(books.map(book => book.category))];

  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

  function filterBooks() {
    const keyword = searchInput.value.trim().toLowerCase();
    const category = categoryFilter.value;

    const result = books.filter(book => {
      const matchKeyword =
        book.title.toLowerCase().includes(keyword) ||
        book.author.toLowerCase().includes(keyword);

      const matchCategory =
        category === "all" || book.category === category;

      return matchKeyword && matchCategory;
    });

    renderBooks(result);
  }

  searchInput.addEventListener("input", filterBooks);
  categoryFilter.addEventListener("change", filterBooks);

  renderBooks(books);
}

function renderBooks(list) {
  const box = document.getElementById("bookList");
  const empty = document.getElementById("emptyState");
  const count = document.getElementById("bookCount");

  count.textContent = `Hiển thị ${list.length} cuốn sách`;

  if (list.length === 0) {
    box.innerHTML = "";
    empty.classList.remove("hidden");
    return;
  }

  empty.classList.add("hidden");
  box.innerHTML = list.map(createBookCard).join("");
}

function renderBookDetail() {
  const box = document.getElementById("bookDetail");
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));

  const book = books.find(item => item.id === id);

  if (!book) {
    box.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📚</div>
        <h2>Không tìm thấy sách</h2>
        <p>Cuốn sách bạn đang tìm không tồn tại.</p>
      </div>
    `;
    return;
  }

  box.innerHTML = `
    <section class="detail">
      <div class="detail-cover" style="background:${book.color}">
        ${book.emoji}
      </div>

      <div class="detail-info">
        <span class="category">${book.category}</span>
        <h1>${book.title}</h1>
        <p class="detail-author">Tác giả: ${book.author}</p>

        <span class="status ${book.status}">
          ${book.statusText}
        </span>

        <p>${book.description}</p>

        <div class="detail-meta">
          <div class="meta-item">
            <strong>THỂ LOẠI</strong>
            <span>${book.category}</span>
          </div>
          <div class="meta-item">
            <strong>NĂM XUẤT BẢN</strong>
            <span>${book.year}</span>
          </div>
          <div class="meta-item">
            <strong>SỐ TRANG</strong>
            <span>${book.pages} trang</span>
          </div>
          <div class="meta-item">
            <strong>TRẠNG THÁI</strong>
            <span>${book.statusText}</span>
          </div>
        </div>
      </div>
    </section>
  `;
}