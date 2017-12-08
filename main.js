var checkID="";
// VALUE. signin.html. 아이디 중복확인할 때 아이디 저장할 변수.
var sameCheckBool=false;
// VALUE. signin.html. 아이디 중복확인 변수.
/*VALUE.
------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------*/
// COMMON. main.html으로 이동.
function gotomainhtml()
{
  location.href="main.html";
}
// COMMON. signun으로 이동.
function gotosigninhtml()
{
  location.href="signin.html";
}
/*COMMON.
------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------*/
// main.html. 링크 노출을 숨기기 위해 init 함수로 이미지 출력.
function init()
{
  var mainlogo = document.getElementById('mainlogo');
  mainlogo.src="http://photovil.hani.co.kr/files/attach/images/83/858/147/%EC%82%AC%EC%A7%84%20101-129.jpg";

  var tmpimglogintree = document.getElementById('tmpimglogintree');
  tmpimglogintree.src="http://cafefiles.naver.net/20101218_191/vice1210_1292643986876TwNLz_jpg/21_vice1210.jpg";
}
// main.html. 시작화면 클릭시 시작화면 사라지고, 시간이 보이도록 작동.
function hidestartviewimg()
{
  var startviewimg = document.getElementById('startviewimg');
  startviewimg.src="";
  startviewimg.alt="";
  var realtimeview = document.getElementById('realtimeview');
  setInterval(function(){
    realtimeview.innerHTML = realtime()
  }, 1000);
}
// main.html. 1번째 메뉴의 기능으로 시작화면을 보여줌.
function showstartview()
{
  var startviewanchor = document.getElementById('startviewanchor');
  startviewanchor.href = "startview.html";
}
// main.html. 2번째 메뉴의 기능으로 게임 사이트의 목록을 보여줌.
function showgamesitelistview()
{
  var gamesitelistanchor = document.getElementById('gamesitelistanchor');
  gamesitelistanchor.href = "gamesitelist.html";
}
// main.html. 3번째 메뉴의 기능으로 코딩 사이트의 목록을 보여줌.
function showpssitelistview()
{
  var pssitelistanchor = document.getElementById('pssitelistanchor');
  pssitelistanchor.href = "pssitelist.html";
}
// main.html. 4번째 메뉴의 기능으로 구글 이미지 검색, 태그의 id값이 겹쳐서 get id에서 null 반환되는 문제 있었음.
function searchinput()
{
  var searchtext=prompt('What is your text for search image? This open new windows');
  if(searchtext==null || searchtext=="")
  {
    return false;
  }
  var getidsearchanchor = document.getElementById('searchimageanchor');
  getidsearchanchor.href="https://www.google.co.kr/search?q="+searchtext+"&dcr=0&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiIxN6FrvPXAhWIErwKHYe3DdUQ_AUICigB&biw=1366&bih=637";
}
// main.html. 5번째 메뉴의 기능으로 내 블로그를 보여줌.
function showmyblogview()
{
  var mybloganchor = document.getElementById('mybloganchor');
  mybloganchor.href = "https://blog.naver.com/qkrquddyd94";
}
// main.html의 로그인 버튼 아래 이미지에 마우스 올릴 때 이미지 변경.
function changetmpimg()
{
  var tmpimglogintree = document.getElementById('tmpimglogintree');
  tmpimglogintree.src="https://cdn.pixabay.com/photo/2017/10/28/12/57/winter-2896970_960_720.jpg";
}
// main.html. onmouseover로 변환된 이미지에서 onmouseout할 때 다시 원래 이미지로 복구 되는 메소드.
function returntmpimg()
{
  var tmpimglogintree = document.getElementById('tmpimglogintree');
  tmpimglogintree.src="http://cafefiles.naver.net/20101218_191/vice1210_1292643986876TwNLz_jpg/21_vice1210.jpg";
}
// main.html 로그인 버튼의 기능.
function signinbutton()
{
  location.href="signin.html";
}
// main.html. 시작화면을 클릭했을 때 실제 시간을 보여주기 위한 메소드.
function realtime()
{
  var realtime = new Date();
  var hours = realtime.getHours();
  var minutes = realtime.getMinutes();
  var seconds = realtime.getSeconds();
  var writetime = hours+"시 "+minutes+"분 "+seconds+"초";
  return writetime;
}
/*main.html
------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------*/
// signin.html. 로그인할 때 아이디와 비밀번호 입력했는지 확인 후 값 전송.
function signincheck()
{
  if(document.signin.idmain.value=="")
  {
    alert("input ID");
    document.signin.idmain.focus();
    return false;
  }
  else if(document.signin.pwmain.value=="")
  {
    alert("input PW");
    document.signin.pwmain.focus();
    return false;
  }
  else
  {
    alert("Success");
    window.href="main.html";
  }
}
// signin.html. 사용 못하는 기능 : find ID/PW.
function cantUse()
{
  alert("Sorry. You can not use now.")
}
// signin.html. 회원가입 버튼의 기능.
function signupbutton()
{
  location.href="signup.html";
}
/*signin.html
------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------*/
// signup.html. 회원가입 확인.
function signupcheck()
{
  if(document.signup.idinput.value=="")
  {
    alert("input ID");
    document.signup.idinput.focus();
    return false;
  }
  else if(!sameCheckBool || checkID=="" || checkID != document.signup.idinput.value)
  {
    alert("click samecheck button");
    return false;
  }
  else if(document.signup.pwinput.value=="")
  {
    alert("input PW");
    document.signup.pwinput.focus();
    return false;
  }
  else if(document.signup.pw2input.value=="")
  {
    alert("input PW config");
    document.signup.pw2input.focus();
    return false;
  }
  else if(document.signup.pwinput.value != document.signup.pw2input.value)
  {
    alert("check PW config");
    document.signup.pw2input.focus();
    return false;
  }
  else if(document.signup.nameinput.value=="")
  {
    alert("input name");
    document.signup.nameinput.focus();
    return false;
  }
  else if(document.signup.phoneinput.value=="")
  {
    alert("input phone number");
    document.signup.phoneinput.focus();
    return false;
  }
  else if(document.signup.selectgenderinput.value=="none")
  {
    alert("select your gender");
    document.signup.selectgenderinput.focus();
    return false;
  }
  else if(document.signup.dateinput.value=="")
  {
    alert("input date");
    document.signup.dateinput.focus();
    return false;
  }
  else if(document.signup.selectageinput.value=="none")
  {
    alert("select your age");
    document.signup.selectageinput.focus();
    return false;
  }

  if(!document.signup.favoriteinput.checked)
  {
    var favorinput = document.signup.favoriteinput;
    var i=0;
    for(i=0; i<eval(document.signup.favoriteinput.length); i++)
    {
      if(favorinput[i].checked == true) break;
    }

    if(i >= favorinput.length)
    {
      alert("check your favorite section");
      return false;
    }
  }

  if(document.signup.introinput.value=="")
  {
    alert("input intro");
    document.signup.introinput.focus();
    return false;
  }

  alert("Success");
  window.href="signin.html";
  sameCheckBool = false;
}
// signup.html. 회원가입할 때, 아이디 중복 확인.
function clicksamecheck()
{
  if(document.signup.idinput.value!="")
  {
    checkID = document.signup.idinput.value;
    sameCheckBool = true;
    alert("You can use this ID");
  }
  else
  {
    alert("input ID");
    document.signup.idinput.focus();
    return false;
  }
}
/*signup.html
------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------*/
