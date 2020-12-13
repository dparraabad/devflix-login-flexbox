/* Select all the login inputs */
const inputs = document.querySelectorAll(".login-input input");

/* Action when the input is not focus */
inputs.forEach((input) => {
  input.addEventListener("blur", validationInput);
});

/* Action when the value of an input change */
inputs.forEach((input) => {
  input.addEventListener("input", validationInput);
});


/* Validation of Inputs */
function validationInput(e) {

  const state = ["valid", "not-valid"];
  let cssClass;

  /* Actions if content of the input is empty or not*/
  if (e.target.value.length === 0) {
    cssClass = state[1];
  } else {
    cssClass = state[0];
  }

  /* Remove old classes*/
  e.target.classList.remove(...state);
  e.target.nextElementSibling.classList.remove(...state);

  /* Add new classes */
  e.target.classList.add(cssClass);
  e.target.nextElementSibling.classList.add(cssClass);
  
  
  /* Generate text result of validation */
  if (cssClass === "not-valid") {

    if (e.target.parentElement.nextElementSibling.classList[0] !== "alert") {
      
      /*Create error message */
      const errorDiv = document.createElement("div");
      errorDiv.appendChild(
        document.createTextNode("Este campo es obligatorio")
      );
      errorDiv.classList.add("alert");

      //Insert error message
      e.target.parentElement.parentElement.insertBefore(
        errorDiv,
        e.target.parentElement.nextElementSibling
      );
    }
  }
  /* In case if the input has content */
  else {
    
    if (e.target.parentElement.nextElementSibling.classList[0] === "alert") {
      e.target.parentElement.nextElementSibling.remove();
    }

  }
}


/* Show password content */
const showPasswordBtn = document.querySelector('.login-input span');

showPasswordBtn.addEventListener('click', e =>
{
  const passwordInput = document.querySelector('#password');

  if(e.target.classList.contains('show')) {
    e.target.classList.remove('show');
    passwordInput.type = 'text';
    e.target.textContent = 'Ocultar';
  } 
  
  else {
    e.target.classList.add('show');
    passwordInput.type = 'password';
    e.target.textContent = 'Mostrar';
  }

});