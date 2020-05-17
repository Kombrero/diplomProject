'use strict';

const callMe = (content, btn) => {

    const callMeOp = () => {
        if (screen.width > 768) {
            let count = 0;
            const opInterval = setInterval(() => {
                content.style.display = 'block';
                content.style.opacity = count;
                count += 0.01;

                if (count >= 1) {
                    clearInterval(opInterval);
                }
            }, 5);

        } else {
            content.style.display = 'block';
        }
    };

    btn.forEach(elem => {
       elem.addEventListener('click', callMeOp); 
    });
    

    content.addEventListener('click', event => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
            content.style.display = 'none';
        } else {
            target = target.closest('.popup-content');

            if (!target) {
                content.style.display = 'none';
            }
        }
    });
}

export default callMe;