'use strict';

import validPhone from './validPhone';
import fourthModuleWindow from './fourthModuleWindow';

const sendForm = (form => {

        const form2 = document.querySelector('.director-form'),
        formValue = form2.querySelector('input');

        
        
        form2.addEventListener('submit', event => {
            
            event.preventDefault();
            const formData1 = new FormData(form2);
            let obj = {};
    
            formData1.forEach((val, key) => {
                obj[key] = val;
            });

            if (formValue.value.replace(/[а-я]/gi, '') === ''){
                console.log(formValue.value.replace(/[а-я]/gi, ''));
                fourthModuleWindow();  
                 
            } else {
                event.preventDefault();
            }
            
            form.addEventListener('submit', event => {
                event.preventDefault();

                const errorMessage = 'Ошибка',
                loadMessage = 'Идет отправка ...',
                successMessage = 'Отправлено';
                const statusMessagge = document.createElement('div');
                statusMessagge.style.cssText = 'font-size: 2rem; color: blue;';

                form.appendChild(statusMessagge);

                const formData2 = new FormData(form);
                let body = {};

                formData2.forEach((val, key) => {
                    body[key] = val;
                });

                const bodies = Object.assign(obj, body);
                console.log(bodies);

                const postData = (body => fetch('server.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body)
                }));

                statusMessagge.textContent = loadMessage;
                obj.user_quest = '';
                postData(bodies)
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

                
            });


        });

validPhone(form);

});

export default sendForm;