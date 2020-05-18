'use strict'

const accordion = (form) => {

    const panelDefault = form.querySelectorAll('.panel-default');
    const panelHeading = form.querySelectorAll('.panel-heading');
    const panelCollapse = form.querySelectorAll('.collapse');
    const panelCollapseTwo = form.querySelectorAll('.panel-collapse');
    const collapsed = form.querySelectorAll('.construct-btn');

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

    const toggleTabBtn = index => {
        for (let i = 0; i < panelDefault.length; i++) {
            let p = i + 1;
            if (index === i && index !== panelDefault.length - 1) {
                panelCollapse[i].classList.remove('in');
                panelCollapse[i+1].classList.add('in');
            } 
        }
    };

    if(collapsed){
        collapsed.forEach((elem, i) => {
            elem.addEventListener('click', () => {
                
                toggleTabBtn(i);
            });
        });
        
        
    }

}

export default accordion;