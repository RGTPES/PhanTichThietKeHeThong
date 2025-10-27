// 1. Planning (Lập kế hoạch)
// Mục tiêu: Xây dựng hệ thống giúp người dân đăng ký tiêm chủng trực tuyến, giảm tải cho trung tâm y tế, quản lý lịch tiêm hiệu quả.
// Phạm vi:
// Người dân có thể đăng ký, chọn loại vắc-xin, xem lịch hẹn.
// Trung tâm xác nhận, sắp xếp lịch tiêm và theo dõi danh sách người đã/ chưa tiêm.
// Nguồn lực:
// Nhóm phát triển gồm: Quản lý dự án, lập trình viên backend, frontend, tester, chuyên viên phân tích.
// Công nghệ dự kiến: Web (React, Node.js), cơ sở dữ liệu MySQL, API, hệ thống thông báo (email/SMS).
// Kế hoạch thời gian: 1 tháng phân tích & thiết kế, 2 tháng phát triển, 1 tháng kiểm thử & triển khai.
// Rủi ro: Quá tải đăng ký, sai lệch dữ liệu lịch tiêm, bảo mật thông tin cá nhân.

// 2. Requirement Analysis (Phân tích yêu cầu)
// Xác định người dùng hệ thống:
// Người dân: Đăng ký tiêm, chọn vắc-xin, xem lịch và kết quả tiêm.
// Trung tâm y tế: Duyệt đăng ký, xếp lịch tiêm, đánh dấu người đã tiêm, thống kê số lượng.
// Quản trị viên: Quản lý tài khoản, cấu hình hệ thống, báo cáo tổng hợp.
// Yêu cầu chức năng chính:
// Người dân đăng ký và nhận xác nhận qua email/SMS.
// Trung tâm xem danh sách đăng ký và sắp lịch tiêm phù hợp.
// Ghi nhận kết quả tiêm và xuất báo cáo người đã/ chưa tiêm.
// Yêu cầu phi chức năng:
// Bảo mật cao (thông tin cá nhân, dữ liệu y tế).
// Hệ thống hoạt động ổn định, dễ mở rộng.
// Giao diện đơn giản, dễ sử dụng cho mọi đối tượng.

// 3. System Design (Thiết kế hệ thống)
// Thiết kế kiến trúc:
// Ứng dụng web cho người dân và nhân viên trung tâm.
// API backend xử lý đăng ký, xác nhận, quản lý lịch tiêm.
// Cơ sở dữ liệu gồm các bảng: NguoiDan, DangKyTiem, LichTiem, TrungTam, TrangThaiTiem.
// Thiết kế chức năng (Use Case):
// Người dân: Đăng ký → Xem lịch → Nhận thông báo.
// Trung tâm: Duyệt đăng ký → Xếp lịch → Ghi nhận kết quả tiêm.
// Quản trị: Quản lý tài khoản, thống kê dữ liệu.
// Thiết kế giao diện: Màn hình đăng ký, xem lịch tiêm, quản lý danh sách, báo cáo.
// Thiết kế bảo mật: Mã hóa dữ liệu nhạy cảm, xác thực tài khoản, phân quyền người dùng.

// 4. Implementation (Lập trình / Triển khai)
// Phân chia công việc cho từng lập trình viên (frontend, backend, database).
// Xây dựng API: đăng ký, duyệt lịch, xác nhận tiêm, thống kê.
// Phát triển giao diện web:
// Người dân: form đăng ký, xem lịch.
// Trung tâm: bảng quản lý lịch tiêm, cập nhật trạng thái.
// Tích hợp gửi thông báo qua email hoặc SMS khi lịch được xác nhận.

// 5. Testing (Kiểm thử)
// Kiểm thử chức năng: Đăng ký, xác nhận, sắp lịch, thống kê, xuất báo cáo.
// Kiểm thử giao diện: Tính thân thiện, khả năng phản hồi trên thiết bị di động.
// Kiểm thử bảo mật: Đăng nhập, phân quyền, mã hóa dữ liệu.
// Kiểm thử hiệu năng: Đảm bảo hệ thống hoạt động tốt khi có nhiều người truy cập đồng thời.
// Sửa lỗi (debug) trước khi triển khai chính thức.

// 6. Deployment & Maintenance (Triển khai & Bảo trì)
// Triển khai: Cài đặt hệ thống lên máy chủ của trung tâm y tế, hướng dẫn người dùng sử dụng.
// Giám sát: Theo dõi hoạt động, ghi nhận lỗi và phản hồi từ người dùng.
// Bảo trì: Cập nhật dữ liệu vắc-xin mới, cải thiện hiệu năng, sửa lỗi phát sinh.
// Nâng cấp: Bổ sung tính năng mới như đặt lịch tiêm nhắc lại, tích hợp với hệ thống y tế quốc gia.