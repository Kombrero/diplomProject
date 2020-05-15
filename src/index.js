'use strict';

import '@babel/polyfill'
import './modules/append-polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';

import moduleWindow from './modules/firstModuleWindow';
import sendForm from './modules/sendForm';


elementClosest(window);
moduleWindow();

const form1 = document.querySelector('.capture-form'),
    form2 = document.querySelector('.director-form'),
    form3 = document.querySelector('.second-form'),
    form4 = document.querySelector('.main-form');

    console.log(form1);
    console.log(form3);
    console.log(form2);
    console.log(form4);

sendForm(form1);
sendForm(form2);
sendForm(form3);
sendForm(form4);
