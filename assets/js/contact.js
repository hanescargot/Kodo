varifyCheck = function () {
  emailVal = $("input#email").val();
  pw = $("input#pw").val();
  pwCheck = $("#pw-check").val();
  pwDOM = document.querySelector(".contact-form p#pw");
  pwCheckDOM = document.querySelector(".contact-form p#pw-check");

  isAbleEmail();
  isAblePW();
  isMatchPW();

  if (isAbleEmail() && isAblePW() && isMatchPW()) {
    alert(
      "관리자 권한 요청 완료\n 관리자 권한이 승인되면 작성하신 메일(" +
        emailVal +
        ")로 안내 메시지가 전송됩니다."
    );
  }
};

isAbleEmail = function () {
  // 이메일 검증 스크립트
  var regExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  // 검증에 사용할 정규식 변수 regExp에 저장
  if (emailVal.match(regExp) != null) {
    // swal("Good job!", "You clicked the button!", "success");
    document.querySelector(".contact-form p#email").innerHTML = "올바른 이메일";
    document.querySelector(".contact-form p#email").style.color = "#008000";
    return true;
  } else {
    document.querySelector(".contact-form p#email").innerHTML =
      "올바른 이메일을 입력해 주세요";
    return false;
  }
};

function isAblePW() {
  pwDOM.style.color = "#F00";
  if (pw == undefined) {
    alert("error");
  }
  var num = pw.search(/[0-9]/g);
  var eng = pw.search(/[a-z]/gi);
  var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  if (pw.length < 8 || pw.length > 20) {
    pwDOM.innerHTML = "8자리 ~ 20자리 이내로 입력해주세요.";
    // $("#name_dd").text("new");
    return false;
  } else if (pw.search(/\s/) != -1) {
    pwDOM.innerHTML = "비밀번호는 공백 없이 입력해주세요.";
    return false;
  } else if (num < 0 || eng < 0 || spe < 0) {
    pwDOM.innerHTML = "영문, 숫자, 특수문자를 혼합하여 입력해주세요.";
    return false;
  }
  pwDOM.innerHTML = "안전한 비밀번호";
  pwDOM.style.color = "#008000";
  return true;
}

function isMatchPW() {
  if (pw != pwCheck) {
    pwCheckDOM.innerHTML = "비밀번호가 일치하지 않습니다.";
    pwCheckDOM.style.color = "#F00";
    return false;
  }
  pwCheckDOM.innerHTML = "비밀번호 일치";
  pwCheckDOM.style.color = "#008000";
  return true;
}
