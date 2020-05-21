'use strict';

import validPhone from './validPhone';
import thirdForm from './thirdForm';
//import fourthModuleWindow from './fourthModuleWindow';

const sendForm = (form => {

        const form2 = document.querySelector('.director-form'),
        formValue = form2.querySelector('input');

        const fourthModuleWindow = () => {
            const consultationBtn = document.querySelector('.consultation-btn'),
                consultation = document.querySelector('.popup-consultation');
        
                const callMeOp = () => {
                    if (screen.width > 768) {
                        let count = 0;
                        const opInterval = setInterval(() => {
                            consultation.style.display = 'block';
                            consultation.style.opacity = count;
                            count += 0.01;
            
                            if (count >= 1) {
                                clearInterval(opInterval);
                            }
                        }, 5);
            
                    } else {
                        consultation.style.display = 'block';
                    }
                };
            
                
                consultationBtn.addEventListener('click', callMeOp); 
                
            
                consultation.addEventListener('click', event => {
                    let target = event.target;
            
                    if (target.classList.contains('popup-close')) {
                        consultation.style.display = 'none';
                    } else {
                        target = target.closest('.popup-content');
            
                        if (!target) {
                            consultation.style.display = 'none';
                        }
                    }
                });
        
        }

        // formValue.addEventListener('change', () => {
        //     const valInp = formValue.value.replace(/[^а-я ]/gi, '');
        //     const errorDiv = document.createElement('div');
        //     errorDiv.textContent = 'Ошибка в этом поле';
        //     errorDiv.style.cssText = 'color: red;';
        //     errorDiv.classList.add('validator-error');
        //     if (formValue.value === valInp) {
        //         if (formValue.nextElementSibling.classList.contains('validator-error')) {
        //             formValue.nextElementSibling.remove('validator-error');
        //         }
        //     } else {
        //         if (formValue.nextElementSibling.classList.contains('validator-error')) {
        //             formValue.nextElementSibling.remove('validator-error');
        //             formValue.insertAdjacentElement('afterend', errorDiv);
                    
        //         } else {
        //             formValue.insertAdjacentElement('afterend', errorDiv);
                    
        //         }
    
        //     }
        // });
        
        form2.addEventListener('submit', event => {
            const formV = formValue.value.replace(/[а-я ]/gi, '');
           if (formV !== '' && formValue.value !== ''){
            console.log(formValue.value.replace(/[а-я ]/gi, ''));
            event.preventDefault();
            fourthModuleWindow();
            const formData1 = new FormData(form2);
            const obj = {};
    
            formData1.forEach((val, key) => {
                obj[key] = val;
            });
            
            
                

            form.addEventListener('submit', event => {
                event.preventDefault();

                const errorMessage = 'Ошибка',
                loadMessage = 'Идет отправка ...',
                successMessage = 'Отправлено';
                const statusMessagge = document.createElement('div');
                statusMessagge.style.cssText = 'font-size: 2rem; color: blue;';

                form.appendChild(statusMessagge);

                const formData2 = new FormData(form);
                const body = {};

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
            
            //delete obj.user_quest;
              
           } 
        //    else if (formValue.value.replace(/[а-я ]/gi, '') !== '') {
        //     console.log(1234);
        //     return event.preventDefault();
        //    }   
        });

validPhone(form);

});

export default sendForm;