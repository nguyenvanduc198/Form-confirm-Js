console.log(document);
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("infoForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Lấy thông tin từ form
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;

      // Hiển thị thông tin trên trang xác nhận
      document.getElementById("confirmName").innerText = "Họ và tên: " + name;
      document.getElementById("confirmEmail").innerText = "Email: " + email;
      document.getElementById("confirmPhone").innerText =
        "Số điện thoại: " + phone;

      // Ẩn form và hiện trang xác nhận
      document.getElementById("infoForm").style.display = "none";
      document.getElementById("confirmation").style.display = "block";
    });

  //   function goBack() {
  //     // Hiển thị lại form để chỉnh sửa
  //     document.getElementById("confirmation").style.display = "none";
  //     document.getElementById("infoForm").style.display = "block";
  //   }
  //   window.goBack = function () {
  //     window.history.back();
  //   };
});

document.addEventListener("DOMContentLoaded", function () {
  window.goBack = function () {
    // window.history.back();
    window.location.href = "index.html";
  };
});
