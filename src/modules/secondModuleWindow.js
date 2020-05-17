'use strict';

import callMe from './callMe';

const secondModuleWindow = () => {
    const sentenceBtn = document.querySelectorAll('.sentence-btn'),
    discount = document.querySelector('.popup-discount');

    callMe(discount, sentenceBtn);
}

export default secondModuleWindow;