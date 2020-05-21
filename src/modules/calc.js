'use strict';

 let objc = {};

const calc = () => {

    const accord = document.getElementById('accordion'),
        blocks = accord.querySelectorAll('.panel-default'),
        //btn = blocks.querySelectorAll('collapsed'),
        tabs = document.querySelectorAll('panel-heading'),
        inp = document.getElementById('myonoffswitch'),
        price = document.getElementById('calc-result'),
        inp2 = document.getElementById('myonoffswitch-two'),
        div2 = document.getElementById('collapseTwo'),
        selectBox2 = document.querySelector('.select-box2'),
        expand = div2.querySelectorAll('.expand'); 
        
        
        let cellPrice,
        partSum1,
        partSum2,
        partSum3,
        partSum4,
        bottomPrice,
        sum;
        
    const changed = () => {
         
        

        if(inp.checked){
            cellPrice = 10000;
            selectBox2.style.display = 'none';
        } else {
            cellPrice = 15000;
            selectBox2.style.display = 'inline-block'
        }

        for (let i = 0; i < expand.length; i++){
            partSum1 = expand[0].options[expand[0].selectedIndex].value;
            partSum2 = expand[1].options[expand[1].selectedIndex].value;
            partSum3 = expand[2].options[expand[2].selectedIndex].value;
            partSum4 = expand[3].options[expand[3].selectedIndex].value;    
        };

        if(!inp2.checked){
            bottomPrice = 1000;    
        } else {
            bottomPrice = 2000;
        }

        if (selectBox2.style.display === 'none'){
            sum = cellPrice * +partSum1 * +partSum2  +bottomPrice;
        } else {
            sum = cellPrice * +partSum1 * +partSum2 * +partSum3 * +partSum4 +bottomPrice;
        }
        
        price.placeholder = sum;

        return cellPrice,
        partSum1,
        partSum2,
        partSum3,
        partSum4,
        bottomPrice,
        sum

        
       
    }
    
    
    blocks.forEach(elem => {
        const a = elem.querySelectorAll('a');

        for ( let i = 0; i<a.length; i++){
            a[i].addEventListener('click', () => {
                changed();
                objc = {
                    cellPrice,
                    partSum1,
                    partSum2,
                    partSum3,
                    partSum4,
                    bottomPrice,
                    sum};

                    
            } )
        }
    });
          
}



export {calc, objc};
