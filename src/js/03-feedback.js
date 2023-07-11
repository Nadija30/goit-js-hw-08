import throttle from "lodash.throttle";
const STORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const form = document.querySelector('.feedback-form')
form.addEventListener('submit', onForm)
form.addEventListener('input', throttle(onInput), 500)

populateTextarea()

function onForm(evt) {
   evt.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
    evt.currentTarget.reset();
    const { email, message } = evt.currentTarget.elements;
console.log({ email: email.value, message: message.value });
}


function onInput(evt) {   
formData[evt.target.name] = evt.target.value.trim();
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function populateTextarea() {
if (formData) {
 let { email, message } = form.elements;
email.value = formData.email || "";
message.value = formData.message || "";
   }
}