'use strict';
const thirdForm = () => {
    const form2 = document.querySelector('.director-form'),
    formValue = form2.querySelector('input');
    const obj = {};

    form2.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(form2);
        
        formData.forEach((val, key) => {
            obj[key] = val;
        });
        return obj;
    });
    
   
}

export default thirdForm;
