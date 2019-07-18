$(function (){
  $('#name').on('input', function() {
    if (/[^A-Za-z0-9_@\.]|@{2,}|\.{5,}/.test($('#name').val())){
      $("#name_err").html(" &#10004 Tên vậy được rồi");
      $("#name_err").css("color", "green");
      $('#name').removeClass("invalid").addClass("valid");

    }
    else {
      $('#name_err').html(' &#9888 Tên của bạn phải viết có dấu');
      $('#name_err').css("color", "red");
      $('#name').removeClass("valid").addClass("invalid");
    }
  });

  $('#mail').on('input', function() {
    if (!/^.+@[^/.].*\.[a-z]{2,}$/.test($('#mail').val())){
      $('#mail_err').html(' &#9888 Email sai định dạng');
      $('#mail_err').css("color", "red");
      $('#mail').removeClass("valid").addClass("invalid");
    }
    else {
      $("#mail_err").html(" &#10004 Email chuẩn rồi");
      $("#mail_err").css("color", "green");
      $('#mail').removeClass("invalid").addClass("valid");
    }
  });

  $('#pass').on('input', function() {
    if ($('#pass').val().length < 6){
      $('#pass_err').html(' &#9888 Password phải dài hơn 6 ký tự');
      $('#pass_err').css("color", "red");
      $('#pass').removeClass("valid").addClass("invalid");
    } else {
      $("#pass_err").html(" &#10004 Password được đấy");
      $("#pass_err").css("color", "green");
      $('#pass').removeClass("invalid").addClass("valid");
    }
  });

  $('form').on('submit', function(event) {
    if($('#name').val() == '')  {
      $('#name').addClass("invalid");
      $('#name_err').html(' &#9888 Vui lòng nhập tên');
      $('#name_err').css("color", "red");
      event.preventDefault();
    } else {
      $("#name_err").html(" &#10004 Tên vậy được rồi");
      $("#name_err").css("color", "green");
      $('#name').removeClass("invalid").addClass("valid");
    }
    if($('#mail').val() == ''){
      $('#mail').addClass("invalid");
      $('#mail_err').html(' &#9888 Vui lòng nhập email');
      $('#mail_err').css("color", "red");
      event.preventDefault();
    } else {
      $("#mail_err").html(" &#10004 Email chuẩn rồi");
      $("#mail_err").css("color", "green");
      $('#mail').removeClass("invalid").addClass("valid");
    }
    if($('#pass').val() == ''){
      $('#pass').addClass("invalid");
      $('#pass_err').html(' &#9888 Vui lòng nhập password');
      $('#pass_err').css("color", "red");
      event.preventDefault();
    } else {
      $("#pass_err").html(" &#10004 Password được đấy");
      $("#pass_err").css("color", "green");
      $('#pass').removeClass("invalid").addClass("valid");
    }
    if($('#pass').val() == '' || $('#mail').val() == '' || $('#name').val() == '' ){
      event.preventDefault();
    }
    else {

      alert('Chúc mừng! Bạn đã đăng kí thành công!');
    }

  });
})
