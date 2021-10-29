varifyCheck = function () {
  verifyEmail();
  verifyPW();
};

verifyEmail = function () {
  // 이메일 검증 스크립트
  var emailVal = $("#email").val();
  var regExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  // 검증에 사용할 정규식 변수 regExp에 저장
  if (emailVal.match(regExp) != null) {
    // swal("Good job!", "You clicked the button!", "success");
    // alert('관리자 권한 요청 완료\n 관리자 권한이 승인되면 작성하신 메일('+emailVal+')로 안내 메시지가 전송됩니다.');
    console.log("이메일통과");
  } else {
    console.log("이메일실패");

    alert("Error");
  }
};

verifyPW = function () {
  // 비밀번호 검증 스크립트
  var pwVal = $("#pw").val();
  console.log("pw:" + pwVal);
  if (isAblePW(pwVal)) {
    alert("비밀번호: " + pwVal);
    console.log("비번 성공");
  } else {
    console.log("비번 실패");
  }
};

function isAblePW(pw) {
  if (pw == undefined) {
    pw = "error";
  }
  var num = pw.search(/[0-9]/g);
  var eng = pw.search(/[a-z]/gi);
  var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  if (pw.length < 8 || pw.length > 20) {
    alert("8자리 ~ 20자리 이내로 입력해주세요.");
    console.log("비번 길이 안내");
    return false;
  } else if (pw.search(/\s/) != -1) {
    alert("비밀번호는 공백 없이 입력해주세요.");
    return false;
  } else if (num < 0 || eng < 0 || spe < 0) {
    alert("영문,숫자, 특수문자를 혼합하여 입력해주세요.");
    return false;
  } else {
    return true;
  }
}
