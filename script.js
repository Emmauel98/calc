const light_mode = document.querySelector('#toggle-on');
const dark_mode = document.querySelector('#toggle-off');
console.log(light_mode);

light_mode.addEventListener('click',function(){
    document.body.classList.toggle('dark-mode');
    light_mode.style.display = 'none';
    dark_mode.style.display = 'block';
})

dark_mode.addEventListener('click',function(){
    document.body.classList.toggle('dark-mode');
    dark_mode.style.display = 'none';
    light_mode.style.display = 'block';
})


const Amount = document.querySelector('.bill_amount')
const Guest = document.querySelector('.no_guest')
const Quality = document.querySelector('.quality')

// const calc = (45 * 0.3)/ 5;
// console.log(calc);

const trigger = document.querySelector('.calc');
const Tip_amount = document.querySelector('.tip_amount');

console.log(Tip_amount);
trigger.addEventListener('click',function(){
    const calc = ((Amount.value * Quality.value) / Guest.value ).toFixed(2);
    console.log(calc);
    console.log(Tip_amount);
    Amount.value = '';
    Quality.value = '';
    Guest.value = '';

    if(calc === 'NaN'){
        Tip_amount.innerHTML = "Tip $0 each";
        Tip_amount.style.display = 'block';
        Tip_amount.innerHTML = calc;
        Tip_amount.style.padding = '15px';
        Tip_amount.style.color = 'black';
    }else{
        Tip_amount.style.display = 'block';
        Tip_amount.innerHTML = calc;
        Tip_amount.style.padding = '15px';
        Tip_amount.style.color = 'black';
    }
})



// const showTipAmount = () =>{
//     const x = Tip_amount;
//     x.className = 'show';
//     console.log(x);
//     setTimeout(function(){ x.className = x.className.replace('show','');}, 3000)
// }
// showTipAmount()