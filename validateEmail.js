const alertSpan = document.querySelector(".alert-invalid");
const alertSpanValid = document.querySelector(".alert-valid");
const inputEmail = document.querySelector(".email-invalid");

const regexGmail = /@gmail\.com$/;
const regexHotmail = /@hotmail\.com$/;
const regexOutlook = /@outlook\.com$/;
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validaEmail(event) {
  const verificaEmailValido = regexEmail.test(
    String(event.target.value).toLowerCase()
  );
  if (verificaEmailValido == false) {
    alertSpanValid.classList.remove("alert-valid-active");
    inputEmail.classList.remove("email-valid-active");
    alertSpan.classList.add("alert-invalid-active");
    inputEmail.classList.add("email-invalid-active");
  } else {
    alertSpan.classList.remove("alert-invalid-active");
    inputEmail.classList.remove("email-invalid-active");

    alertSpanValid.classList.add("alert-valid-active");
    inputEmail.classList.add("email-valid-active");
  }

  if (event.target.value.length === 0) {
    alertSpanValid.classList.remove("alert-valid-active");
    inputEmail.classList.remove("email-valid-active");
    alertSpan.classList.add("alert-invalid-active");
    inputEmail.classList.add("email-invalid-active");
  } else {
    alertSpan.classList.remove("alert-invalid-active");
    inputEmail.classList.remove("email-invalid-active");
    alertSpanValid.classList.add("alert-valid-active");
    inputEmail.classList.add("email-invalid-active");
  }

  const gmail = regexGmail.test(event.target.value);
  const hotmail = regexHotmail.test(event.target.value);
  const outlook = regexOutlook.test(event.target.value);

  if (gmail == false && hotmail == false && outlook == false) {
    alertSpanValid.classList.remove("alert-valid-active");
    inputEmail.classList.remove("email-valid-active");
    alertSpan.classList.add("alert-invalid-active");
    inputEmail.classList.add("email-invalid-active");
  } else {
    alertSpan.classList.remove("alert-invalid-active");
    inputEmail.classList.remove("email-invalid-active");
    alertSpanValid.classList.add("alert-valid-active");
    inputEmail.classList.add("email-valid-active");
  }
}
