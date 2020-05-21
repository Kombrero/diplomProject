'use strict';

const validPhone = form => {
    const inputPhone = form.querySelector('.phone-user');
    const inputName = form.querySelector('.name-user');

    if (inputName){
        inputName.addEventListener('change', () => {
            const valInp = inputName.value.replace(/[^а-я ]/gi, '');
           
            const errorDiv = document.createElement('div');
            errorDiv.textContent = 'Ошибка в этом поле';
            errorDiv.style.cssText = 'color: red;';
            errorDiv.classList.add('validator-error');
            if (inputName.value === valInp) {
                if (inputName.nextElementSibling.classList.contains('validator-error')) {
                    inputName.nextElementSibling.remove('validator-error');
                }
            } else {
                if (inputName.nextElementSibling.classList.contains('validator-error')) {
                    inputName.nextElementSibling.remove('validator-error');
                    inputName.insertAdjacentElement('afterend', errorDiv);
                    
                } else {
                    inputName.insertAdjacentElement('afterend', errorDiv);
                    
                }
    
            }
        });
    }

    inputPhone.addEventListener('change', () => {
        const valInp = inputPhone.value.replace(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/gi, '');
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Ошибка в этом поле';
        errorDiv.style.cssText = 'color: red;';
        errorDiv.classList.add('validator-error');
        if (inputPhone.value !== valInp) {
            if (inputPhone.nextElementSibling.classList.contains('validator-error')) {
                inputPhone.nextElementSibling.remove('validator-error');
            }
        } else {
            if (inputPhone.nextElementSibling.classList.contains('validator-error')) {
                inputPhone.nextElementSibling.remove('validator-error');
                inputPhone.insertAdjacentElement('afterend', errorDiv);
                
            } else {
                inputPhone.insertAdjacentElement('afterend', errorDiv);
                
            }

        }
    });

};
export default validPhone;