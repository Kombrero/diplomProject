'use strict';

import '@babel/polyfill'
import './modules/append-polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';

import moduleWindow from './modules/firstModuleWindow';
import sendForm from './modules/sendForm';
import getAccordion from './modules/accordion';
import loadDiv from './modules/loadDiv';
import secondModuleWindow from './modules/secondModuleWindow';
import thirdModuleWindow from './modules/thirdModuleWindow';
//import fourthModuleWindow from './modules/fourthModuleWindow';
import seventhForm from './modules/seventhForm';
import * as calcs from './modules/calc';

elementClosest(window);
moduleWindow();
loadDiv();
secondModuleWindow();
thirdModuleWindow();

calcs.calc();




const form1 = document.querySelector('.capture-form'),
    form3 = document.querySelector('.second-form'),
    form4 = document.querySelector('.main-form'),
    divForm5 = document.querySelector('.popup-discount'),
    form5 = divForm5.querySelector('.capture-form'),
    divForm6 = document.querySelector('.popup-check'),
    form6 = divForm6.querySelector('.capture-form'),
    divForm7 = document.querySelector('.popup-consultation'),
    form7 = divForm7.querySelector('.capture-form');

sendForm(form1);
sendForm(form3);
sendForm(form4);
sendForm(form5);
sendForm(form6);
seventhForm(form7);

const accordion = document.querySelector('#accordion'),
    accordionTwo = document.querySelector('#accordion-two');
    

getAccordion(accordion);
getAccordion(accordionTwo);
