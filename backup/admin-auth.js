document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("adminLoginForm");
  if (!form) return;

  const emailInput = document.getElementById("adminLoginEmail");
  const passwordInput = document.getElementById("adminLoginPassword");
  const message = document.getElementById("adminLoginMessage");
  const submit = document.getElementById("adminLoginSubmit");
  const existingSession = readAdminSession();
  if (existingSession) {
    location.replace("index.html");
    return;
  }

  document.getElementById("adminPasswordToggle")?.addEventListener("click", event => {
    const button = event.currentTarget;
    const showPassword = passwordInput.type === "password";
    passwordInput.type = showPassword ? "text" : "password";
    button.setAttribute("aria-label", showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu");
    button.innerHTML = showPassword
      ? '<i class="fa-regular fa-eye-slash" aria-hidden="true"></i>'
      : '<i class="fa-regular fa-eye" aria-hidden="true"></i>';
  });

  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    message.textContent = "Đang kiểm tra thông tin đăng nhập…";
    message.className = "admin-login-message is-loading";
    submit.disabled = true;
    try {
      const admin = await window.bookinApi.getAdmin();
      const email = emailInput.value.trim().toLowerCase();
      if (!admin || admin.status !== "active" || admin.role !== "admin" ||
          email !== String(admin.email || "").trim().toLowerCase() ||
          passwordInput.value !== String(admin.password || "")) {
        message.textContent = "Email hoặc mật khẩu quản trị chưa chính xác.";
        message.className = "admin-login-message is-error";
        return;
      }

      sessionStorage.setItem("bookin-admin-session", JSON.stringify({
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }));
      const requestedPage = sessionStorage.getItem("bookin-admin-return-to");
      sessionStorage.removeItem("bookin-admin-return-to");
      const destination = requestedPage && /^index\.html(?:#[a-z]+)?$/.test(requestedPage)
        ? requestedPage
        : "index.html";
      location.replace(destination);
    } catch (error) {
      message.textContent = error.message || "Không thể kết nối máy chủ dữ liệu. Hãy chạy npm run server.";
      message.className = "admin-login-message is-error";
    } finally {
      submit.disabled = false;
    }
  });
});

function readAdminSession() {
  try {
    const session = JSON.parse(sessionStorage.getItem("bookin-admin-session") || "null");
    return session?.role === "admin" ? session : null;
  } catch {
    sessionStorage.removeItem("bookin-admin-session");
    return null;
  }
}
