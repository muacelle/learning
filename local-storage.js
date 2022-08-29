const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.btn');

const storedInput = localStorage.getItem('textInput'); // Pega o valor de 'textInput' em Local Storage 

if (storageInput) {
    text.textContent = storedInput;                    // Muda o conteúdo de 'text' para o de storedInput
}

storageInput.addEventListener('input', letter => {     // Muda o conteúdo de 'text' conforme o input digitado (sem salvar)
    text.textContent = letter.target.value;
})

function saveToLocalStorage() {
    localStorage.setItem('textInput', text.textContent);    // Salva o conteúdo de 'text' em Local Storage, com a key 'textInput'
}

button.addEventListener('click', saveToLocalStorage)        // Chama a função de salvar ao clicar no botão