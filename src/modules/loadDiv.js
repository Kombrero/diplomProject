'use strict';

const loadDiv = () => {
    const sectionSentence = document.querySelector('.sentence'),
        div = sectionSentence.querySelectorAll('.col-md-4'),
        buttonAdd = sectionSentence.querySelector('.add-sentence-btn');

    buttonAdd.addEventListener('click', () => {
        div.forEach(elem => {
            if (elem.classList.contains('visible-sm-block')){
                elem.classList.remove('visible-sm-block');
            } else if (elem.classList.contains('hidden')){
                elem.classList.remove('hidden');
            }
            buttonAdd.style.display = 'none';
        });
    });   
}

export default loadDiv;