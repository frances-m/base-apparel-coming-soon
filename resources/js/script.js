const form = document.querySelector('form');
const email= document.querySelector('input');

form.noValidate = true;
form.addEventListener('submit', function (event) {
  if(!email.validity.valid) {
    form.classList.add('invalid');
    event.preventDefault();
  }
});

email.addEventListener('keydown', function (event) {
  form.classList.remove('invalid');
});
