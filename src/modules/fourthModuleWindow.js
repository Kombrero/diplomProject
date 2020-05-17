'use strict';

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

export default fourthModuleWindow;