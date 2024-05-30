
const formulario = document.querySelector("#formulario");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword")

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail =
  /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const alertName = document.querySelector("#alertName");
const alertEmail = document.querySelector("#alertEmail");
const alertPassword = document.querySelector("#alertPassword")

const title = document.querySelector("#title");
const registro = document.querySelector("#registro");
const ingreso = document.querySelector("#ingreso");
const email = document.querySelector("#email");

let isRegistro = true; 

ingreso.addEventListener("click", () => {
  userName.classList.remove("is-invalid")
  userName.classList.remove("is-valid")
  userName.value=""
  userPassword.classList.remove("is-invalid")
  userPassword.classList.remove("is-valid")
  userPassword.value = ""
  alertName.classList.add("ocultar");
  alertEmail.classList.add("ocultar");
  alertPassword.classList.add("ocultar")
  title.textContent = "Ingreso";
  email.classList.add("ocultar");
  ingreso.classList.add("color");
  registro.classList.remove("color");
  isRegistro = false; 
});

registro.addEventListener("click", () => {
  title.textContent = "Registro";
  userName.classList.remove("is-invalid")
  userName.classList.remove("is-valid")
  userName.value=""
  userPassword.classList.remove("is-invalid")
  userPassword.classList.remove("is-valid")
  userPassword.value = ""
  alertPassword.classList.add("ocultar")
  userEmail.classList.remove("is-invalid")
  userEmail.classList.remove("is-valid")
  userEmail.value = ""
  email.classList.remove("ocultar");
  ingreso.classList.remove("color");
  registro.classList.add("color");
  alertName.classList.add("ocultar");
  isRegistro = true; 
});

const PintarMensajeError = (errores) => {
  errores.forEach((item) => {
    item.tipo.classList.remove("ocultar");
    item.tipo.textContent = item.msg;
  });
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const errores = [];

  if (!userName.value.trim()) {
    console.log("formato invalido nombre");
    userName.classList.add("is-invalid");
    errores.push({
      tipo: alertName,
      msg: "* Formato inválido",
    });
  } else {
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
    alertName.classList.add("ocultar");
  }

  if (!userPassword.value.trim()) {
    console.log("formato invalido nombre");
    userPassword.classList.add("is-invalid");
    errores.push({
      tipo: alertPassword,
      msg: "* Campo obligatorio",
    });
  } else {
    userPassword.classList.remove("is-invalid");
    userPassword.classList.add("is-valid");
    alertPassword.classList.add("ocultar");
  }

  if (isRegistro) {
    if (!userEmail.value.trim()) {
      console.log("correo electrónico vacío");
      userEmail.classList.add("is-invalid");
      errores.push({
        tipo: alertEmail,
        msg: "* Campo obligatorio",
      });
    } else if (!regUserEmail.test(userEmail.value)) {
      console.log("formato inválido correo electrónico");
      userEmail.classList.add("is-invalid");
      errores.push({
        tipo: alertEmail,
        msg: "* Escriba un correo válido",
      });
    } else {
      userEmail.classList.remove("is-invalid");
      userEmail.classList.add("is-valid");
      alertEmail.classList.add("ocultar");
    }
  }

  if (errores.length !== 0) {
    PintarMensajeError(errores);
    return;
  }
  console.log("enviado");

  window.location.href = '../pages/personajes.html';
});