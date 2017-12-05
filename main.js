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
