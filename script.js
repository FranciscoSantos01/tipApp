const btn = document.querySelectorAll('.btn');
let inputBill = document.getElementById('input-bill');
let inputNumb = document.getElementById('numberP');
let dollar = document.getElementById('dollar');
let dollar1 = document.getElementById('dollar1');
let reset = document.getElementById('reset');
let btnCustom = document.getElementById('btn-custom');


btn.forEach(buton =>{
    buton.addEventListener('click', (e)=>{
        let value = e.currentTarget.value;
        console.log(e.target.innerText);
        let resultado = Math.round(inputBill.value * (value / 100));
        let totalTip= parseInt(inputBill.value) + parseInt(resultado);
        let totalAmount = totalTip / inputNumb.value;
        if(inputNumb.value > 0){
          dollar.innerText = resultado;
          dollar1.innerText = Math.round(totalAmount);
      } else{
        alert('Fill the number input please');
      }
      
      
    })
})

btnCustom.addEventListener('click', (e)=>{
        let target = e.target.innerText;
        if(target !== 'Custom'){
        let resultado = Math.round(inputBill.value * (parseInt(target) / 100));
        let totalTip= parseInt(inputBill.value) + parseInt(resultado);
        let totalAmount = totalTip / inputNumb.value;
        if(inputNumb.value > 0){
          dollar.innerText = resultado;
          dollar1.innerText = Math.round(totalAmount);
      } else{
        alert('Fill the number input please');
      }
      } else{
        alert('Error custom is not a number');
      }
    })




reset.addEventListener('click', ()=>{
  inputBill.value = '';
  inputNumb.value = '';
  let img = document.createElement('img');
  img.src ='./images/icon-dollar.svg'
  dollar.innerText=0.00;
  dollar1.innerText= 0.00;
  btnCustom.innerText = "Custom";
})