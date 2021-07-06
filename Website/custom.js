var f_name = document.myForm.f_name;
var e_mail = document.myForm.e_mail;
var m_msg = document.myForm.m_msg;

var message = document.getElementById('message');
var msg = document.getElementById('msg');
var more = document.getElementById('more');
var date = document.getElementById('date&time');

function runMe(){
  if (f_name.value.length < 3){
    message.innerHTML = "Please enter your full name";
    message.style.color = "red";
  }
}

function runIt(){
  if (e_mail.value.length < 5){
    msg.innerHTML = "Please enter your full email";
    msg.style.color = "red";
  }
}

function runMsg(){
  if(m_msg.value.length <10){
    more.innerHTML = "Feel free to give your views"
    more.style.color = "green";

  }
}

function videoUrl(play){
    document.getElementById("slider").src=play;
  }


  function displayDate() {
    document.getElementById("date&time").innerHTML = Date();
    Date.style.color = "green";
  }

