# Bookin – Website quản lý thư viện dành cho Admin

Bookin hỗ trợ chủ thư viện quản lý sách, người mượn, phiếu mượn/trả, lịch sử và thống kê. Người mượn không đăng nhập hoặc tự thao tác trên website.

## Yêu cầu

- Node.js 22.12 trở lên và npm.
- Dependency đã khai báo trong `package.json`: Vite 8.3.x, JSON Server 1.0.0-beta.15.
- Chạy các lệnh tại thư mục gốc, nơi có `package.json` và `db.json`. Frontend Bookin nằm trong `backup/`.

## Cài đặt và khởi chạy

Cài dependency một lần:

```bash
npm install
```

Mở hai terminal tại thư mục gốc dự án.

Terminal 1 – REST API dữ liệu mẫu:

```bash
npm run server
```

Terminal 2 – frontend Bookin:

```bash
npm run dev:bookin
```

Mở URL mà Vite in ra, thường là <http://localhost:5173/>. Trang đăng nhập là <http://localhost:5173/login.html>.

## JSON Server và dữ liệu mẫu

JSON Server đọc/ghi `db.json` ở thư mục gốc và cung cấp REST API tại <http://localhost:3000>:

- `GET /books` – sách và số lượng bản.
- `GET /borrowers` – hồ sơ người mượn.
- `GET /borrowings` – phiếu mượn/trả.
- `GET /history` – lịch sử giao dịch.
- `GET /admin` – tài khoản Admin demo.

Ví dụ: <http://localhost:3000/books>. JSON Server phục vụ dữ liệu mẫu cho MVP, không cung cấp xác thực hoặc phân quyền an toàn.

## Tài khoản Admin demo

- Email: `admin@bookin.vn`
- Mật khẩu: `Bookin@123`

Tài khoản nằm trong `db.json`, chỉ dùng khi demo local. Đăng nhập hiện tại là mô phỏng phía frontend; không dùng mật khẩu này cho môi trường thật.

## Kịch bản demo 3–5 phút

Dữ liệu mẫu hiện có sách `Đắc Nhân Tâm` (mã `1`, còn 10 bản) và người mượn `Nguyễn Minh Anh` (mã `USR-001`). Không cần tạo hồ sơ trước khi demo.

1. Đăng nhập bằng tài khoản Admin demo.
2. Mở **Tổng quan** và xem các chỉ số được tải từ API.
3. Mở **Quản lý sách**, tìm `Đắc Nhân Tâm` và xác nhận còn 10 bản.
4. Mở **Mượn/Trả**, tạo phiếu cho `Nguyễn Minh Anh`, chọn `Đắc Nhân Tâm`, mượn 1 bản. Ngày mượn và hạn trả được điền sẵn; lưu phiếu.
5. Quay lại **Quản lý sách** hoặc **Tổng quan**, kiểm tra tồn còn 9 bản.
6. Trong **Mượn/Trả**, xác nhận trả phiếu vừa tạo; kiểm tra tồn tăng lại 10 bản.
7. Mở **Lịch sử** để xem giao dịch mượn và trả.

Các thay đổi được lưu vào `db.json`; hoàn tất bước trả để tồn kho trở lại trạng thái ban đầu.

## Trạng thái kiểm tra và giới hạn

- Đã kiểm tra lệnh `npm run dev:bookin`: frontend trả HTTP 200.
- Đã kiểm tra API mẫu đang hoạt động và dữ liệu có sách/người mượn để chạy kịch bản trên.
- Cần chạy thử thao tác mượn/trả trên trình duyệt ở máy thuyết trình trước buổi bảo vệ.
- Cơ chế đăng nhập là mô phỏng frontend. JSON Server không phải backend bảo mật; không dùng dữ liệu/tài khoản demo cho hệ thống thật.
