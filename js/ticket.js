// function seat handleing
const selectSeat =document.getElementById('selected-seat');
const totalSeat = document.getElementById('total-seat');
const totalPZ = document.getElementById('total-price');
const cuponField = document.getElementById('cupon-field');
const cuponBtn = document.getElementById('cupon-btn');
const totalGrande = document.getElementById('total-grand-price');
const defaultSeat = document.getElementById('default-seat');
const nextBtn = document.getElementById('next-btn');
const phoneNumber = document.getElementById('phone-number');
let array =[];
let totalPrice = 0;
function handleBySeat(event){
    const value = event.innerText
    if(array.includes(value)){
        return alert('seat already selected');
    }
   else if(array.length < 4){
    event.classList.add('bg-primary');
     event.classList.add('text-white')
     array.push(event.innerText);
     totalSeat.innerText = array.length;
    //  default seat
      defaultSeat.classList.add('hidden');
    //  select seat 
    selectSeat.innerHTML += `<li class="flex justify-between">
    <span>${event.innerText}</span>
    <span>economy</span>
    <span>550</span>
    </li>`;
    // total seat count
    totalPrice += 550;
    totalPZ.innerText = totalPrice;
   }
   else{
    return alert('only 4 seats can be selected');
   }
     

     if(array.length > 3){
        cuponField.removeAttribute('disabled');
        cuponBtn.removeAttribute('disabled');
     }
    
    

}

// Grand total price

document.getElementById('cupon-btn').addEventListener('click', function(){
    const cuponFieldValue =cuponField.value ;
    let grandTotalPrice = 0;
    if(cuponFieldValue !== 'NEW50' && uponFieldValue !== 'NEW10'  ){
        alert('please select a coupon');
        return;
    }
    if(cuponFieldValue === 'NEW50'){
      grandTotalPrice = totalPrice*.15;
    }
    else if(cuponFieldValue === 'NEW10'){
        grandTotalPrice = totalPrice*.05;
    }
    const grandTotalValue = totalPrice - grandTotalPrice
    totalGrande.innerText = grandTotalValue
    // show discount price
    const showCuponPriceEl = document.getElementById('show-cupon-price');
    showCuponPriceEl.innerHTML = `
   
    
  <p>Discount</p>
    
     <p>
         <span>-BDT</span>
         <span>${grandTotalPrice.toLocaleString(2)}</span>
    </p>
 
    `;
    
    });
    // enable
    phoneNumber.addEventListener('input', function(e){
     const phoneValue = e.target.value;
     console.log(phoneValue);
     if(phoneValue.length >= 11){
        nextBtn.removeAttribute('disabled');
     }
    })
    document.getElementById('btn-continue').addEventListener('click',function(){
        window.location.reload();
        
    })