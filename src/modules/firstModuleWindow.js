'use strict';
const moduleWindow = () => {
    const callMe = document.querySelector('.popup-call'),
    callMeBtn = document.querySelectorAll('.call-btn');

    const callMeOp = () => {
        if (screen.width > 768) {
            let count = 0;
            const opInterval = setInterval(() => {
                callMe.style.display = 'block';
                callMe.style.opacity = count;
                count += 0.01;

                if (count >= 1) {
                    clearInterval(opInterval);
                }
            }, 5);

        } else {
            callMe.style.display = 'block';
        }
    };

    callMeBtn.forEach(elem => {
       elem.addEventListener('click', callMeOp); 
    });
    

    callMe.addEventListener('click', event => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
            callMe.style.display = 'none';
        } else {
            target = target.closest('.popup-content');

            if (!target) {
                callMe.style.display = 'none';
            }
        }
    });
};


export default moduleWindow;