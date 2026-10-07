const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Xóa lỗi cũ
    document.querySelectorAll("small").forEach(item => {
        item.textContent = "";
    });

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const agree = document.getElementById("agree").checked;

    let valid = true;

    if (fullname === "") {
        document.getElementById("fullnameError").textContent =
            "Vui lòng nhập họ và tên";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent =
            "Vui lòng nhập email";
        valid = false;
    }

    if (phone === "") {
        document.getElementById("phoneError").textContent =
            "Vui lòng nhập số điện thoại";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").textContent =
            "Mật khẩu phải có ít nhất 6 ký tự";
        valid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmError").textContent =
            "Mật khẩu nhập lại không khớp";
        valid = false;
    }

    if (!agree) {
        alert("Bạn cần đồng ý với điều khoản sử dụng!");
        valid = false;
    }

    if (!valid) {
        return;
    }

    // Lưu tài khoản vào LocalStorage
    const user = {
        fullname: fullname,
        email: email,
        phone: phone,
        password: password
    };

    localStorage.setItem("bookinUser", JSON.stringify(user));

    alert("Đăng ký tài khoản thành công!");

    // Chuyển sang trang đăng nhập
    window.location.href = "login.html";
});


// Hiện / ẩn mật khẩu
function togglePassword(inputId, icon) {

    const input = document.getElementById(inputId);

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}