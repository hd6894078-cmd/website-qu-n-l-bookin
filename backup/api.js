/* Shared JSON Server client for the Bookin admin pages. */
const API_BASE_URL = window.BOOKIN_API_BASE_URL || "http://localhost:3000";

class BookinApiError extends Error {
  constructor(message, { status = 0, endpoint = "", cause } = {}) {
    super(message, { cause });
    this.name = "BookinApiError";
    this.status = status;
    this.endpoint = endpoint;
  }
}

const bookinApi = {
  baseUrl: API_BASE_URL.replace(/\/$/, ""),
  activeRequests: 0,
  get isLoading() { return this.activeRequests > 0; },

  async request(endpoint, { method = "GET", body, headers = {}, ...options } = {}) {
    this.activeRequests += 1;
    window.dispatchEvent(new CustomEvent("bookin:api-loading", { detail: { loading: true } }));
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        method,
        headers: {
          Accept: "application/json",
          ...(body === undefined ? {} : { "Content-Type": "application/json" }),
          ...headers
        },
        ...(body === undefined ? {} : { body: JSON.stringify(body) })
      });
      const text = await response.text();
      let data = null;
      if (text.trim()) {
        try {
          data = JSON.parse(text);
        } catch (cause) {
          throw new BookinApiError(`JSON Server returned invalid JSON for ${endpoint}.`, {
            status: response.status,
            endpoint,
            cause
          });
        }
      }
      if (!response.ok) {
        const detail = typeof data === "string" ? data : data?.message || response.statusText;
        throw new BookinApiError(`API ${method} ${endpoint} failed (${response.status}): ${detail}`, {
          status: response.status,
          endpoint
        });
      }
      return data;
    } catch (error) {
      if (error instanceof BookinApiError) throw error;
      throw new BookinApiError(`Cannot connect to JSON Server at ${this.baseUrl}. Start it with npm run server.`, {
        endpoint,
        cause: error
      });
    } finally {
      this.activeRequests = Math.max(0, this.activeRequests - 1);
      window.dispatchEvent(new CustomEvent("bookin:api-loading", {
        detail: { loading: this.isLoading }
      }));
    }
  },

  async list(endpoint, options) {
    const result = await this.request(endpoint, options);
    if (result == null) return [];
    if (!Array.isArray(result)) throw new BookinApiError(`Expected a list from ${endpoint}.`, { endpoint });
    return result;
  },

  getBooks() { return this.list("/books"); },
  getBook(id) { return this.request(`/books/${encodeURIComponent(id)}`); },
  createBook(data) { return this.request("/books", { method: "POST", body: data }); },
  updateBook(id, data) { return this.request(`/books/${encodeURIComponent(id)}`, { method: "PATCH", body: data }); },
  deleteBook(id) { return this.request(`/books/${encodeURIComponent(id)}`, { method: "DELETE" }); },

  getBorrowers() { return this.list("/borrowers"); },
  getBorrower(id) { return this.request(`/borrowers/${encodeURIComponent(id)}`); },
  createBorrower(data) { return this.request("/borrowers", { method: "POST", body: data }); },
  updateBorrower(id, data) { return this.request(`/borrowers/${encodeURIComponent(id)}`, { method: "PATCH", body: data }); },
  deleteBorrower(id) { return this.request(`/borrowers/${encodeURIComponent(id)}`, { method: "DELETE" }); },

  getBorrowings() { return this.list("/borrowings"); },
  createBorrowing(data) { return this.request("/borrowings", { method: "POST", body: data }); },
  updateBorrowing(id, data) { return this.request(`/borrowings/${encodeURIComponent(id)}`, { method: "PATCH", body: data }); },
  deleteBorrowing(id) { return this.request(`/borrowings/${encodeURIComponent(id)}`, { method: "DELETE" }); },

  getHistory() { return this.list("/history"); },
  addHistory(data) { return this.request("/history", { method: "POST", body: { ...data, date: data.date || new Date().toISOString() } }); },
  getAdmin() { return this.list("/admin").then(admins => admins[0] || null); }
};

window.bookinApi = bookinApi;
