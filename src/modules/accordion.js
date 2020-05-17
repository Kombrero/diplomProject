'use strict'

const accordion = (form) => {

    const panelDefault = form.querySelectorAll('.panel-default');
    const panelHeading = form.querySelectorAll('.panel-heading');
    const panelCollapse = form.querySelectorAll('.collapse');

    const toggleTabContent = index => {
        for (let i = 0; i < panelDefault.length; i++) {
            if (index === i) {
                panelHeading[i].classList.remove('in');
                panelCollapse[i].classList.add('in');
            } else {
                panelHeading[i].classList.add('in');
                panelCollapse[i].classList.remove('in');
            }
        }
    };


    form.addEventListener('click', event => {
        let target = event.target;
        target = target.closest('.panel-heading');
        if (target) {
            panelHeading.forEach((item, i) => {
                if (item === target) {
                    toggleTabContent(i);
                }
            });
        }
    });

}

export default accordion;