console.log('form');

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

function clearLocalStorageAndForm() {
  localStorage.removeItem(localStorageKey);
  form.reset();
}

const formDataString = localStorage.getItem(localStorageKey); //ця функція підствляє значення з обєкту в localStorage якщо юзер ввів данні і перезапустилась сторінка
if (formDataString) {
  const formData = JSON.parse(formDataString);
  for (const fieldName in formData) {
    const field = form.elements[fieldName];
    if (field) {
      field.value = formData[fieldName];
    }
  }
}

const formData = {}; //ця функція зберігає в localstorage данні з об'єктом в я кому значення полів
form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;
  const userDataString = JSON.stringify(formData);
  localStorage.setItem(localStorageKey, userDataString);
});

// виводить у консоль об'єкт з полями email, message та їхніми поточними значеннями.
form.addEventListener('submit', evt => {
  evt.preventDefault();
  const formDataString = localStorage.getItem(localStorageKey);
  if (formDataString) {
    const formData = JSON.parse(formDataString);
    for (const fieldName in formData) {
      const field = form.elements[fieldName];
      if (field) {
        field.value = formData[fieldName];
      }
    }
  }
  console.log(formData);
  clearLocalStorageAndForm(); //Під час сабміту форми очищай сховище і поля форми
});
