/**
 * Bookin LMS - API Client
 * Giao tiếp RESTful với JSON Server tại http://localhost:3000
 */
const API_BASE = "http://localhost:3000";

const api = {
  baseUrl: API_BASE,

  // Helper request
  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const defaultHeaders = {
      "Content-Type": "application/json",
      "Accept": "application/json"
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...defaultHeaders,
          ...options.headers
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error [${response.status}] ${response.statusText}: ${errorText}`);
      }

      // Xử lý response rỗng (ví dụ DELETE)
      const text = await response.text();
      return text ? JSON.parse(text) : {};
    } catch (err) {
      console.error(`[API Fetch Error] ${options.method || "GET"} ${url}:`, err);
      throw err;
    }
  },

  // === 1. QUẢN LÝ SÁCH (BOOKS) ===
  async getBooks(params = {}) {
    let query = "";
    const searchParams = new URLSearchParams();
    if (params.category && params.category !== "all") {
      searchParams.append("category", params.category);
    }
    if (params.q) {
      searchParams.append("q", params.q);
    }
    const qs = searchParams.toString();
    if (qs) query = `?${qs}`;
    return await this.request(`/books${query}`);
  },

  async getBook(id) {
    return await this.request(`/books/${id}`);
  },

  async createBook(bookData) {
    return await this.request("/books", {
      method: "POST",
      body: JSON.stringify(bookData)
    });
  },

  async updateBook(id, bookData) {
    return await this.request(`/books/${id}`, {
      method: "PATCH",
      body: JSON.stringify(bookData)
    });
  },

  async deleteBook(id) {
    return await this.request(`/books/${id}`, {
      method: "DELETE"
    });
  },

  // === 2. QUẢN LÝ NGƯỜI MƯỢN (BORROWERS) ===
  async getBorrowers() {
    return await this.request("/borrowers");
  },

  async getBorrower(id) {
    return await this.request(`/borrowers/${id}`);
  },

  async createBorrower(borrowerData) {
    return await this.request("/borrowers", {
      method: "POST",
      body: JSON.stringify(borrowerData)
    });
  },

  async updateBorrower(id, borrowerData) {
    return await this.request(`/borrowers/${id}`, {
      method: "PATCH",
      body: JSON.stringify(borrowerData)
    });
  },

  // === 3. QUẢN LÝ MƯỢN / TRẢ (BORROWINGS / LOANS) ===
  async getBorrowings() {
    return await this.request("/borrowings");
  },

  async createBorrowing(borrowingData) {
    return await this.request("/borrowings", {
      method: "POST",
      body: JSON.stringify(borrowingData)
    });
  },

  async updateBorrowing(id, borrowingData) {
    return await this.request(`/borrowings/${id}`, {
      method: "PATCH",
      body: JSON.stringify(borrowingData)
    });
  },

  // === 4. LỊCH SỬ HỆ THỐNG (HISTORY) ===
  async getHistory() {
    return await this.request("/history");
  },

  async addHistory(eventData) {
    return await this.request("/history", {
      method: "POST",
      body: JSON.stringify({
        ...eventData,
        date: eventData.date || new Date().toISOString()
      })
    });
  },

  // === 5. ADMIN PROFILE ===
  async getAdmin() {
    const list = await this.request("/admin");
    return Array.isArray(list) ? list[0] : list;
  }
};

window.bookinApi = api;
