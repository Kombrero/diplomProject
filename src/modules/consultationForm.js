'use strict';

let inputValue;

const consultationForm = () => {

    const directorForm = document.querySelector('.director-form'),
    inputDirForm = directorForm.querySelector('input');

    inputDirForm.addEventListener('change', () => {
    
        const valInp = inputDirForm.value.replace(/[^а-я ]/gi, '');           
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Ошибка в этом поле';
        errorDiv.style.cssText = 'color: red;';
        errorDiv.classList.add('validator-error');
        if (inputDirForm.value === valInp) {
            if (inputDirForm.nextElementSibling.classList.contains('validator-error')) {
                inputDirForm.nextElementSibling.remove('validator-error');
                inputValue = inputDirForm.value;
                console.log(inputValue);
            }
        } else {
            if (inputDirForm.nextElementSibling.classList.contains('validator-error')) {
                inputDirForm.nextElementSibling.remove('validator-error');
                inputDirForm.insertAdjacentElement('afterend', errorDiv);
                
            } else {
                inputDirForm.insertAdjacentElement('afterend', errorDiv);
                
            }

        }
    })
}


export {inputValue, consultationForm};