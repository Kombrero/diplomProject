'use strict';

const thirdModuleWindow = () => {

    const popupCheck = document.querySelector('.popup-check'),
        gauginBtn = document.querySelector('.gauging-button');

        const callMeOp = () => {
            if (screen.width > 768) {
                let count = 0;
                const opInterval = setInterval(() => {
                    popupCheck.style.display = 'block';
                    popupCheck.style.opacity = count;
                    count += 0.01;
    
                    if (count >= 1) {
                        clearInterval(opInterval);
                    }
                }, 5);
    
            } else {
                popupCheck.style.display = 'block';
            }
        };
    
        
        gauginBtn.addEventListener('click', callMeOp); 
        
    
        popupCheck.addEventListener('click', event => {
            let target = event.target;
    
            if (target.classList.contains('popup-close')) {
                popupCheck.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
    
                if (!target) {
                    popupCheck.style.display = 'none';
                }
            }
        });
}

export default thirdModuleWindow;