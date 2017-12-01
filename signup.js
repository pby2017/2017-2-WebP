function signupcheck()
{
  if(document.signup.idinput.value=="")
  {
    alert("input ID");
    document.signup.idinput.focus();
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
  else if(document.signup.selectageinput.value=="")
  {
    alert("select your age");
    document.signup.selectageinput.focus();
    return false;
  }
  else if(document.signup.html.value=="1")
  {
    alert("good");
    document.signup.html.focus();
    return false;
  }
  else {
    alert("Success");
  }
}

function signupcancel()
{
  location.href="main.html";
}
