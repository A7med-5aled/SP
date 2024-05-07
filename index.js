const show = document.querySelector('#result');
const howMuch = document.querySelector('#inp1');
const kiloIn = document.querySelector('#inp2');
const kiloPriceIn = document.querySelector('#inp3');
let kilo ;
let kiloPrice ;
let n ;
let result ;
console.log((n * kiloPrice)/kilo);

function calculate(){
    show.classList.remove('active');
     n = howMuch.value;
     kiloPrice = kiloPriceIn.value;
     kilo = kiloIn.value;
    if(!((n * kiloPrice)/kilo)){
        show.classList.add('active');
        show.textContent = `ادخل جميع القيم بطريقه صحيحه`
    }
    else{
        show.textContent = `${(n * kiloPrice)/kilo  }  جنيه`;
    }

   


}




