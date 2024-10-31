# Form-confirm-Js

Trong HTML DOM (Document Object Model), attribute (thuộc tính) là các thuộc tính của phần tử HTML, được sử dụng để bổ sung thông tin hoặc điều chỉnh cách thức hoạt động của phần tử đó. Các thuộc tính này bao gồm giá trị của các thuộc tính mặc định (như id, class, src, href, alt), hoặc các thuộc tính tùy chỉnh do người dùng định nghĩa bằng cách thêm data- (như data-id, data-name). Thuộc tính giúp trình duyệt và JavaScript hiểu cách phần tử sẽ được hiển thị hoặc xử lý trong giao diện người dùng.

1. Các thuộc tính phổ biến
id: Xác định duy nhất một phần tử trong trang, giúp truy xuất dễ dàng bằng JavaScript.
class: Định nghĩa các lớp CSS để tạo kiểu hoặc có thể dùng để chọn nhiều phần tử có cùng lớp.
href: Được sử dụng trong thẻ <a> để chỉ định URL của trang đích.
src: Được dùng trong <img>, <script>, hoặc <iframe> để chỉ ra nguồn của hình ảnh, tệp hoặc trang nhúng.
data-: Cho phép thêm các thuộc tính tùy chỉnh để chứa dữ liệu mà không ảnh hưởng đến cách trình duyệt hiển thị, dễ dàng truy xuất và thao tác với JavaScript.
2. Truy xuất và thao tác với thuộc tính trong JavaScript
Để truy xuất và thay đổi các thuộc tính HTML bằng JavaScript, bạn có thể sử dụng các phương thức của DOM như:

getAttribute(name): Lấy giá trị của một thuộc tính.
setAttribute(name, value): Thiết lập hoặc thay đổi giá trị của một thuộc tính.
removeAttribute(name): Xóa một thuộc tính khỏi phần tử.
Ví dụ:

Giả sử bạn có một phần tử HTML như sau:

<img id="myImage" src="image1.jpg" alt="Image description">
Và muốn thay đổi giá trị thuộc tính src bằng JavaScript:

let image = document.getElementById("myImage");
image.setAttribute("src", "image2.jpg");
Khi bạn thực hiện đoạn mã trên, ảnh sẽ thay đổi từ image1.jpg thành image2.jpg.
