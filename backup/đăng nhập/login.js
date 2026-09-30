const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    // Xóa lỗi cũ
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    let valid = true;


    // Kiểm tra email
    if (email === "") {

        document.getElementById("emailError").textContent =
            "Vui lòng nhập email";

        valid = false;
    }


    // Kiểm tra mật khẩu
    if (password === "") {

        document.getElementById("passwordError").textContent =
            "Vui lòng nhập mật khẩu";

        valid = false;
    }


    if (!valid) {
        return;
    }


    // Lấy tài khoản đã đăng ký
    const savedUser = localStorage.getItem("bookinUser");


    if (!savedUser) {

        alert("Chưa có tài khoản. Vui lòng đăng ký trước!");

        return;
    }


    const user = JSON.parse(savedUser);


    // Kiểm tra tài khoản
    if (
        email === user.email &&
        password === user.password
    ) {

        // Lưu trạng thái đăng nhập
        localStorage.setItem(
            "bookinLoggedIn",
            "true"
        );

        localStorage.setItem(
            "bookinUserName",
            user.fullname
        );

        alert("Đăng nhập thành công!");

        // Về trang chủ
        window.location.href = "index.html";

    } else {

        alert("Email hoặc mật khẩu không đúng!");
    }

});


// Hiện / ẩn mật khẩu

function togglePassword() {

    const password =
        document.getElementById("password");

    const icon =
        document.querySelector(".toggle-password");


    if (password.type === "password") {

        password.type = "text";

        icon.classList.remove("fa-eye");

        icon.classList.add("fa-eye-slash");

    } else {

        password.type = "password";

        icon.classList.remove("fa-eye-slash");

        icon.classList.add("fa-eye");
    }
}


// Quên mật khẩu

function forgotPassword(event) {

    event.preventDefault();

    alert(
        "Chức năng quên mật khẩu sẽ được phát triển sau."
    );
}