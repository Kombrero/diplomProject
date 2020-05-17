'use strict';
import callMe from './callMe';

const moduleWindow = () => {
    const callM = document.querySelector('.popup-call'),
    callMeBtn = document.querySelectorAll('.call-btn');

    callMe(callM, callMeBtn);
    
};


export default moduleWindow;