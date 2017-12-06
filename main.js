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
