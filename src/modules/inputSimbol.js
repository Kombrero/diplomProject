'use strict';
const inputSimbol = (form) => {
    const inputName = form.querySelectorAll('.form-name'),
        inputFooterName = form.getElementById('form2-name'),
        inputMess = form.querySelector('.mess');

    inputName.forEach(elem => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^а-я ]/gi, '');
        });
    });

    inputFooterName.addEventListener('input', () => inputFooterName.value = inputFooterName.value.replace(/[^а-я ]/gi, ''));

    inputMess.addEventListener('input', () => {
        inputMess.value = inputMess.value.replace(/[^а-я.,-? ]/gi, '');
    });

};

export default inputSimbol;