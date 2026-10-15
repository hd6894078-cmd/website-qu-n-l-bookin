# Bookin – Quản lý thư viện dành cho Admin

Bookin là website quản lý hoạt động thư viện tại quầy. Admin quản lý kho sách, người mượn, phiếu mượn/trả, lịch sử và thống kê. Người mượn không đăng nhập hoặc tự thao tác trên website.

## Yêu cầu môi trường

- Node.js **22.12 trở lên** và npm.
- Các phiên bản dependency hiện có trong dự án: Vite 8.3.0 và JSON Server 1.0.0-beta.15.
- Mở terminal tại thư mục gốc dự án (thư mục có `package.json` và `db.json`). Giao diện chính nằm trong `backup/`.

## Cài đặt và chạy

Cài dependency một lần:

```bash
npm install
```

Mở **hai terminal** tại thư mục gốc dự án.

Terminal 1 – JSON Server:

```bash
npm run server
```

Terminal 2 – giao diện Bookin:

```bash
npm run dev:bookin
```

Mở URL frontend Vite in ra trong terminal, thường là <http://localhost:5173/>. Trang đăng nhập Admin là <http://localhost:5173/login.html>.

## Dữ liệu mẫu và API

`db.json` ở thư mục gốc là dữ liệu mẫu. JSON Server cung cấp dữ liệu đó qua REST API tại <http://localhost:3000>:

- `/books` – sách và tổng số bản/số bản còn.
- `/borrowers` – hồ sơ người mượn do Admin quản lý.
- `/borrowings` – phiếu mượn/trả.
- `/history` – lịch sử giao dịch.
- `/admin` – tài khoản Admin demo.

Có thể mở trực tiếp <http://localhost:3000/books>, <http://localhost:3000/borrowers> và <http://localhost:3000/borrowings> để xem JSON mẫu. JSON Server chỉ phục vụ API/dữ liệu mẫu; đây không phải backend xác thực an toàn.

## Tài khoản Admin demo

- Email: `admin@bookin.vn`
- Mật khẩu: `Bookin@123`

Đây là tài khoản mẫu lưu trong `db.json`, chỉ dùng để thuyết trình trên máy local. Đăng nhập hiện tại là mô phỏng phía frontend; không dùng tài khoản hoặc mật khẩu này cho hệ thống thật.

## Kịch bản demo 3–5 phút

Dữ liệu hiện có đủ để demo mà không cần nhập thêm hồ sơ: sách `Đắc Nhân Tâm` (mã `1`) đang có 10 bản; người mượn `Nguyễn Minh Anh` (mã `USR-001`) đã có trong dữ liệu.

1. **Đăng nhập** tại `/login.html` bằng tài khoản Admin demo.
2. **Xem Tổng quan** và giới thiệu số liệu được tính từ API: đầu sách, tổng bản, bản còn, bản đang mượn và phiếu quá hạn.
3. Vào **Quản lý sách**, tìm `Đắc Nhân Tâm` và chỉ ra số bản còn ban đầu là 10.
4. Vào **Mượn/Trả**, tạo phiếu cho `Nguyễn Minh Anh`, chọn `Đắc Nhân Tâm`, số lượng 1. Ngày mượn và hạn trả được điền sẵn; kiểm tra hạn trả không trước ngày mượn rồi lưu phiếu.
5. Trở lại **Quản lý sách** hoặc **Tổng quan** để xác nhận số bản còn giảm còn 9.
6. Trong **Mượn/Trả**, xác nhận trả phiếu vừa tạo. Kiểm tra số bản còn tăng lại 10.
7. Mở **Lịch sử** để xem giao dịch mượn và trả.

JSON Server lưu các thay đổi vào `db.json`. Hoàn tất bước trả trong lúc demo để số tồn của sách trở về như ban đầu.

## Lệnh và kiểm tra đã đối chiếu

- `npm run dev:bookin` chạy Vite với thư mục gốc frontend là `backup/`.
- `npm run server` chạy JSON Server với `db.json` tại cổng 3000.
- Dữ liệu hiện tại có 30 đầu sách, 5 hồ sơ người mượn, 5 phiếu và 4 bản ghi lịch sử; các phiếu mẫu tham chiếu đến sách/người mượn có thật. Số liệu sẽ đổi khi thực hiện demo.

## Giới hạn cần trình bày rõ

- Đăng nhập Admin là mô phỏng frontend; JSON Server không xác thực hay phân quyền an toàn.
- Các thao tác được thiết kế để dùng qua giao diện quản trị. Không công khai API hoặc mật khẩu demo như dịch vụ thật.
- Kịch bản trên là hướng dẫn demo; hãy chạy thử luồng mượn/trả trên máy trình bày trước buổi bảo vệ.
