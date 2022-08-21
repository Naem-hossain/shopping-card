
function inputNumber (elementId, isTrue){
    const numberFild = document.getElementById(elementId);
   const numberString = numberFild.value;
   const newCaseNumber = parseInt(numberString);
   let newNumber;
   if(isTrue === true){
       newNumber =  newCaseNumber + 1 ;
   }
   else{
      newNumber =  newCaseNumber - 1 ;

   }
   numberFild.value =  newNumber;
   return newNumber;
}
function priceUpdate (elementId, number){
    const totalPrice = document.getElementById(elementId);
    if(elementId === 'case-price'){
        totalPrice.innerText = number * 59;
    }
    else{
        totalPrice.innerText = number * 1219;
    }
    
}

function calculateSubTotal (caseId,phoneId){
    let subTotal = document.getElementById('sub-total');
    const casePrice = document.getElementById(caseId);
    const casePriceString = casePrice.innerText;
    const casePriceNumber = parseInt(casePriceString);
    const  phonePrice = document.getElementById(phoneId);
    const phonePriceString = phonePrice.innerText;
    const phonePriceNumber = parseInt(phonePriceString);
     const total = phonePriceNumber  + casePriceNumber;
     subTotal.innerText = total ;
     return total;
}

function taxCalculater(){
    let subTotal = document.getElementById('sub-total');
    const subTotalValue = subTotal.innerText;
    const subTotalString = parseInt(subTotalValue);
    const tax = (subTotalString * 0.01).toFixed(2)
    const taxPay =  document.getElementById('tax-price').innerText = tax;
    const taxPayString = parseFloat(taxPay)
    const totalPay = subTotalString + taxPayString;
    document.getElementById('total-amount-pay').innerText = totalPay;
}
document.getElementById('case-btn-plus').addEventListener('click', function(){
   const caseNumber =  inputNumber('case-number', true);
   const updatePrice = priceUpdate( 'case-price',caseNumber);
     calculateSubTotal('case-price','phone-price');
     taxCalculater()
})

document.getElementById('case-number-minus').addEventListener('click',function(){
    const caseNumber =   inputNumber('case-number',false);
   priceUpdate( 'case-price',caseNumber)

   calculateSubTotal('case-price','phone-price');
   taxCalculater()
})







// function inputFieldNumberIncres(elementId,isIncres){
    //     let inputNumberBefor = document.getElementById('case-number');elementId
    //     const inputString = inputNumberBefor.value;
    //     const inputNumber = parseFloat(inputString);
    //     // const inputFieldNumber = inputNumber('case-number');
    //     let afterIncres;
    //    if( isIncres == true){
    //       afterIncres =  inputNumber + 1;
    //    }
    //    else{
    //     afterIncres = inputNumber - 1;
    //    }
    //        inputNumberBefor.value = afterIncres;
    //        return afterIncres;
    // }


// function priceUpdate (number, elementId){
//     if(number = )
//     const newCasePrice = caseNumber * 59;
//     const casePrice = document.getElementById('case-price'); 
//     casePrice.innerText = newCasePrice; 
// }

// document.getElementById('case-btn-plus').addEventListener('click', function(){
//     const newNumber = inputNumber('case-number', true)
//     priceUpdate(newNumber)
// })
//     const caseNumber = inputNumber('case-number', true);
//     const newCasePrice = caseNumber * 59;
//     const casePrice = document.getElementById('case-price'); 
//     casePrice.innerText = newCasePrice; 
//     priceUpdate(caseNumber)
// })

// document.getElementById('case-number-minus').addEventListener('click', function(){
//     const caseNumber = inputNumber('case-number', false);
//     const newCasePrice = caseNumber * 59;
//     const casePrice = document.getElementById('case-price');
//     casePrice.innerText = newCasePrice; 
//     priceUpdate(caseNumber)
// })