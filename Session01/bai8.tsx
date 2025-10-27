// 1. Xác định các tác nhân chính và chức năng tương ứng:
// Học viên: Đăng ký tài khoản, đăng ký khóa học, học bài, làm bài kiểm tra, xem điểm.
// Giảng viên: Quản lý khóa học, đăng bài học, chấm điểm, theo dõi tiến độ học viên.
// Admin: Quản lý người dùng, quản lý khóa học, xem báo cáo và thống kê hệ thống, phân quyền.

// 2. Phân loại hệ thống thông tin phù hợp:
// TPS (Transaction Processing System): Quản lý giao dịch đăng ký khóa học, điểm danh, làm bài, chấm điểm.
// MIS (Management Information System): Hỗ trợ quản trị theo dõi tiến độ học viên, thống kê báo cáo học tập.
// EIS (Executive Information System): Dành cho ban quản lý trung tâm theo dõi hiệu suất chung và báo cáo tổng hợp.

// 3. Đề xuất mô hình phát triển phần mềm:
// → Mô hình Agile là phù hợp nhất.
// Lý do:
// Nhu cầu của trung tâm và người dùng có thể thay đổi thường xuyên.
// Cần cập nhật, mở rộng nhanh các tính năng (thêm khóa học, cách dạy mới...).
// Agile cho phép phát triển linh hoạt, phản hồi liên tục từ người dùng để cải thiện hệ thống.

// 4. Ba sơ đồ UML sẽ sử dụng khi thiết kế hệ thống:
// Use Case Diagram: Mô tả các chức năng và tác nhân tương tác với hệ thống.
// Class Diagram: Mô tả các lớp như HọcViên, GiảngViên, KhóaHọc, BàiHọc và mối quan hệ giữa chúng.
// Sequence Diagram: Mô tả luồng tương tác giữa các đối tượng trong quá trình học viên đăng ký, học và nộp bài.