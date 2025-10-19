// 1. Planning (Lập kế hoạch)
// Mục tiêu: Xây dựng hệ thống điểm danh sinh viên bằng mã QR để thay thế hình thức điểm danh thủ công.
// Phạm vi:
// Giảng viên có thể tạo buổi học, sinh mã QR, và quét mã của sinh viên.
// Sinh viên dùng ứng dụng để quét mã và điểm danh.
// Phòng đào tạo có thể xem, thống kê, và xuất báo cáo điểm danh.
// Nguồn lực:
// Nhóm phát triển: 1 quản lý dự án, 2 lập trình viên backend, 2 frontend/mobile, 1 tester.
// Công nghệ: Node.js, React hoặc Flutter, MySQL, API REST, máy chủ cloud.
// Kế hoạch thời gian:
// 1 tháng thu thập yêu cầu, 2 tháng phát triển, 1 tháng kiểm thử & triển khai.
// Rủi ro:
// Vấn đề kết nối Internet khi điểm danh, độ chính xác khi quét mã, và bảo mật thông tin người dùng.

// 2. Requirement Analysis (Phân tích yêu cầu)
// Đối tượng người dùng:
// Giảng viên: Tạo lớp học, tạo buổi học, sinh mã QR, theo dõi sinh viên điểm danh.
// Sinh viên: Quét mã QR để điểm danh, xem lịch sử điểm danh.
// Phòng đào tạo: Quản lý giảng viên – sinh viên, theo dõi báo cáo thống kê điểm danh theo lớp, theo môn.
// Các yêu cầu chức năng chính:
// Giảng viên đăng nhập → tạo buổi học → hệ thống sinh mã QR duy nhất cho buổi đó.
// Sinh viên đăng nhập → quét mã QR → hệ thống ghi nhận thời gian điểm danh.
// Phòng đào tạo xem báo cáo tỉ lệ điểm danh theo lớp, môn học, thời gian.
// Yêu cầu phi chức năng:
// Hệ thống bảo mật thông tin đăng nhập.
// Thời gian quét mã nhanh, hoạt động ổn định.
// Giao diện thân thiện trên cả web và mobile.

// 3. System Design (Thiết kế hệ thống)
// Kiến trúc hệ thống:
// Frontend: Ứng dụng web/mobile cho giảng viên và sinh viên.
// Backend: API xử lý đăng nhập, tạo mã QR, lưu điểm danh, thống kê.
// Database: Các bảng chính như Student, Teacher, Class, Session, AttendanceRecord.
// Thiết kế chức năng (Use Case):
// Giảng viên: Đăng nhập → Tạo buổi học → Sinh mã QR → Xem danh sách điểm danh.
// Sinh viên: Đăng nhập → Quét mã QR → Xác nhận điểm danh → Xem lịch sử.
// Phòng đào tạo: Đăng nhập → Xem thống kê điểm danh → Xuất báo cáo.
// Thiết kế giao diện:
// Màn hình đăng nhập, giao diện quét mã QR, màn hình tạo buổi học, màn hình thống kê.
// Thiết kế bảo mật:
// Mã QR chứa thông tin buổi học được mã hóa.
// Xác thực bằng tài khoản và quyền truy cập (role-based access).
