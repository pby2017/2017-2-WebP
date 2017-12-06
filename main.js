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
  }
}

function cantUse()
{
  alert("Sorry. You can not use now.")
}

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

function changetmpimg()
{
  var tmpimglogintree = document.getElementById('tmpimglogintree');
  tmpimglogintree.src="https://cdn.pixabay.com/photo/2017/10/28/12/57/winter-2896970_960_720.jpg";
}

function returntmpimg()
{
  var tmpimglogintree = document.getElementById('tmpimglogintree');
  tmpimglogintree.src="http://cafefiles.naver.net/20101218_191/vice1210_1292643986876TwNLz_jpg/21_vice1210.jpg";
}

function signinbutton()
{
  location.href="signin.html";
}

function signupbutton()
{
  location.href="signup.html";
}

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
  sameCheckBool = false;
}

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

function gotomainhtml()
{
  location.href="main.html";
}
