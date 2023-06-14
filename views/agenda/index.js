// regex validation
const NAME_REGEX = /^[a-zA-ZÀ-ÿ\s]{1,16}$/; // Letras y espacios, pueden llevar acentos.
const NUMBER_REGEX = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;

// selectores
const countries = document.querySelector('#countries');
const nameInput = document.querySelector('#name');
const phoneCode = document.querySelector('#phone-code');
const phoneInput = document.querySelector('#phone');
const formBtn = document.querySelector('#form-btn');
const form = document.querySelector('#form');
const list = document.querySelector('#list');
const inputName = document.querySelector('#contacto-nombre');
const spinner = document.querySelector('#spinner-container');
const button = document.getElementById('button-text');

// Validaciones
let nameValidation = false;
let phoneValidation = false;
let countriesValidation = false;

// funcion

function spinnerShow() {
  button.innerHTML = '';
  spinner.style.display = 'flex';
}

function spinnerHidden() {
  spinner.style.display = 'none';
  button.innerHTML = 'Crear contacto';
}

const toggleListVisibility = () => {
  if (list.childElementCount === 0) {
    list.classList.add('hidden');
  } else {
    list.classList.remove('hidden');
  }
};


const validation = (e, validation, element) => {
    const information = e.target.parentElement.children[1];
    formBtn.disabled = !nameValidation || !phoneValidation || !countriesValidation ?  true : false;
    // console.log(`las validaciones dan ${formBtn.disabled}`)
    if (validation) {
        element.classList.add('correct');
        element.classList.remove('incorrect');
        information.classList.remove('show-information');
    } else {
        element.classList.add('incorrect');
        element.classList.remove('correct');
        information.classList.add('show-information');
    } 
}

[...countries].forEach(option=>{
option.innerHTML = option.innerHTML.split('(')[0]; 
});

nameInput.addEventListener('input', e => {
    nameValidation = NAME_REGEX.test (e.target.value);
    // console.log(`los nombres dan ${nameValidation}`)
    validation(e, nameValidation, nameInput);
});

countries.addEventListener('input', e => {
    const optionSelected = [...e.target.children].find(option => option.selected);
    phoneCode.innerHTML = `+${optionSelected.value}`;
    countriesValidation = optionSelected.value !== '' ? true : false;
    // console.log(`el pais da ${countriesValidation}`)
    countries.classList.add('correct');
    phoneCode.classList.add('correct');
    validation(e, null, null);
});

phoneInput.addEventListener('input', e => {
    phoneValidation = NUMBER_REGEX.test(e.target.value);
    validation(e, phoneValidation, phoneInput)
    // console.log(`los numeros dan ${phoneValidation}`)
    const information = e.target.parentElement.parentElement.children[1];
    if (phoneValidation) {
        phoneInput.classList.add('correct');
        phoneInput.classList.remove('incorrect');
        information.classList.remove('show-information');
    } else {
        phoneInput.classList.add('incorrect');
        phoneInput.classList.remove('correct');
        information.classList.add('show-information');
    }
});

form.addEventListener('submit', async e => {
  spinnerShow();
    e.preventDefault();
    const contacto = {
    name: nameInput.value,
    phone: `${phoneCode.innerHTML} ${phoneInput.value}`,
    }
    // console.log(nameInput.value);
    
    const { data } = await axios.post('/api/contacts', {
        name: nameInput.value,
        phoneNumber: phoneInput.value,
      });
    //   console.log(data);

    form.reset();
    nameInput.classList.remove('correct');
    countries.classList.remove('correct');
    phoneCode.classList.remove('correct');
    phoneInput.classList.remove('correct');
    phoneCode.innerHTML=`+##`

const listItem = document.createElement('li');
    listItem.id = data.id;
    listItem.innerHTML = `
    <div class="contacto-div">
        <button class="delete-btn">
        <div id="spinner-container-delete">
                  <div class="spinner"></div>
        </div>
        <span>❌</span>
        </button>
        <input id="contacto-nombre" type="text" value="${data.name}"readonly>
        <input id="contacto-numero" type="text" value="${data.phoneNumber}"readonly>
        <button class="edit-btn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-btn">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
      </button>
        </div>
        `;
    list.append(listItem);
    localStorage.setItem('yoquiera', list.innerHTML);

    formBtn.disabled = true
    spinnerHidden();
    toggleListVisibility();
});

list.addEventListener('click', async e => {

    if (e.target.classList.contains('delete-btn')) {
      const buttondelete = e.target;
    const spinnerDelete = buttondelete.querySelector('#spinner-container-delete');

    spinnerDelete.style.display = 'flex';
    buttondelete.querySelector('span').textContent = '';

    const li = e.target.closest('li');

    toggleListVisibility();

    await axios.delete(`/api/contacts/${li.id}`);
    li.remove();

    spinnerDelete.style.display = 'none';
    buttondelete.querySelector('span').textContent = '❌';
    }

    if (e.target.classList.contains('edit-btn')) {
        const [inputName, phoneInput] = e.target.parentElement.querySelectorAll(':scope > input[type="text"]');
      
        if (inputName.hasAttribute('readonly')) {
          inputName.focus();
          inputName.removeAttribute('readonly');
          phoneInput.removeAttribute('readonly');
        } else {
          const listItem = e.target.closest('li');
          const name = inputName.value;
          const phoneNumber = phoneInput.value;
      
          await axios.patch(`/api/contacts/${listItem.id}`, { name, phoneNumber });
      
          inputName.setAttribute('value', inputName.value);
          inputName.setAttribute('readonly', true);
          phoneInput.setAttribute('readonly', true);
          localStorage.setItem('yoquiera', list.innerHTML);
        }
      }
      toggleListVisibility();
});

(async() => {
  spinnerShow();
    try {
      const { data } = await axios.get('/api/contacts', {
        withCredentials: true
      });
      data.forEach(contact => {
        const listItem = document.createElement('li');
            listItem.id = contact.id;
            listItem.innerHTML = `
            <div class="contacto-div">
                <button class="delete-btn">
                  <div div id="spinner-container-delete">
                      <div class="spinner"></div>
                  </div>
                 <span>❌</span>
                </button>
                <input id="contacto-nombre" type="text" value="${contact.name}"readonly>
                <input id="contacto-numero" type="text" value="${contact.phoneNumber}"readonly>
                <button class="edit-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-btn">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            </button>
                </div>
                `;
            list.append(listItem);
      });
      spinnerHidden();
      toggleListVisibility();
      
    } catch (error) {
      window.location.pathname = '/login'
    }
  })();