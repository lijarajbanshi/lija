// const form= document.getElementById("registrationForm");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     const username=document.getElementById("username").value.trim();
//     const email=document.getElementById("email").value.trim();
//     const password=document.getElementById("password").value.trim();
//     if (username ===""){
//         message.innerText = "please enter name";
//         message.style.color = "red";

//     }
// if(email ===""){
//     message.innerText = " enter email";
//     message.style.color = "blue";
// }
// if (password===""){
//     message.innerText ="enter password";
//     message.style.color = "red";
// }
// });

const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (username === "") {
    message.innerText = "please enter Username";
    message.style.color = "red";
  }

  else if (email === "") {
    message.innerText = "please enter Email";
    message.style.color = "red";
  }
  else if (password === "") 
  {
    message.innerText = "please enter Password";
    message.style.color = "red";
  }
});