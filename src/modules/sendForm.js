'use strict';

import validPhone from './validPhone'

const sendForm = (form => {
    validPhone(form);
    const errorMessage = 'Ошибка',
        loadMessage = 'Идет отправка ...',
        successMessage = 'Отправлено',
        phoneInput = form.querySelector('.phone-user');

    let nameInput = form.querySelector('.name-user');


    const send = form => {
        event.preventDefault();
        form.appendChild(statusMessagge);

        const formData = new FormData(form);
        const body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });

        statusMessagge.textContent = loadMessage;

        postData(body)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessagge.textContent = successMessage;
                if (statusMessagge.textContent === successMessage) {
                    setTimeout(() => statusMessagge.remove(), 5000);
                }
            })
            .catch(error => {
                statusMessagge.textContent = errorMessage;
                console.error(error);
            });

        const input = form.querySelectorAll('input');
        input.forEach(elem => {
            elem.value = '';
        });
    };

    const statusMessagge = document.createElement('div');
    statusMessagge.style.cssText = 'font-size: 2rem; color: blue;';
    const postData = (body => fetch('server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    }));


    form.addEventListener('submit', event => {
        if (!nameInput && phoneInput.value.replace(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/gi, '') !== '') {
            event.preventDefault();
        } else if (nameInput && phoneInput.value.replace(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/gi, '') === '' && nameInput.value.replace(/[а-я]/gi, '') === '') {

            nameInput.value.replace(/[а-я]/gi, '');
            send(form);
        } else if (!nameInput && phoneInput.value.replace(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/gi, '') === '') {
            
            send(form);
        } else {

            event.preventDefault();
        }
    });



});

export default sendForm;