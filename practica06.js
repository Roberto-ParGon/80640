const formul = document.getElementById("btnSub");
formul.addEventListener("click", (evento) => {
  evento.preventDefault();
  let u = document.getElementById("user").value;
  let p = document.getElementById("password").value;
  alert(u + p);
});
