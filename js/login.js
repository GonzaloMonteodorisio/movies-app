

// const formulario = document.querySelector("#formulario");
// const userName = document.querySelector("#userName");
// const userEmail = document.querySelector("#userEmail");

// const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
// const regUserEmail =
//   /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

// const alertName = document.querySelector("#alertName");
// const alertEmail = document.querySelector("#alertEmail");

const title = document.querySelector("#title");
const registro = document.querySelector("#registro");
const ingreso = document.querySelector("#ingreso");
const email = document.querySelector("#email");

ingreso.addEventListener("click", () => {
  title.textContent = "Ingreso";
  email.classList.add("ocultar");
  ingreso.classList.add("color")
  registro.classList.remove("color")
  email.classList.remove("required")
});

registro.addEventListener("click", () => {
  title.textContent = "Registro";
  email.classList.remove("ocultar");
  ingreso.classList.remove("color")
  registro.classList.add("color")
  email.classList.add("required")
});

// const PintarMensajeError = (errores) => {
//   errores.forEach(item => {
//     item.tipo.classList.remove("ocultar")
//     item.tipo.textContent = item.msg
//   });
// }

// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const errores = []

//   if (!userName.value.trim()) {
//     console.log("formato invalido nombre");
//     errores.push({
//       tipo: alertName,
//       msg: "Formato invalido, solo letras",
//     })
//   }else {
//     alertName.classList.add("ocultar")
//   }

//   if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
//     console.log("formato invalido email");
//     errores.push({
//       tipo: alertEmail,
//       msg: "Escriba un correo valido"
//     })
//   }else {
//     alertEmail.classList.add("ocultar")

//   }

//   if (errores.length !== 0) {
//     PintarMensajeError(errores)
//     return
//   }
//   console.log("enviado")
// });
