

document.getElementById('check-out-btn').addEventListener('click', function(){
   const div =  document.getElementById('section').style.display = 'block';

     setTimeout(hideElement, 100) //milliseconds until timeout//
    function hideElement() {
        div.style.display = 'none';
    // location.href = "checkout.html";
    // console.log('click')
}})

document.getElementById('phone-btn-plus').addEventListener('click', function(){
    const caseNumber =   inputNumber('phone-number', true);
    priceUpdate( 'phone-price',caseNumber);
     calculateSubTotal('case-price','phone-price');
     taxCalculater()
 })
document.getElementById('phone-btn-minus').addEventListener('click', function(){
    const caseNumber =   inputNumber('phone-number', false);
    priceUpdate( 'phone-price',caseNumber);
    calculateSubTotal('case-price','phone-price');
    taxCalculater()
 })











// function priceUpdate (phoneNumber){
//     const newCasePrice = phoneNumber * 1219;
//     const casePrice = document.getElementById('phone-price'); 
//     casePrice.innerText = newCasePrice; 
// }

// document.getElementById('phone-btn-plus').addEventListener('click',function(){
//     const newNumber = inputNumber('phone-number', true)
//     priceUpdate(newNumber)
// })
// document.getElementById('phone-btn-minus').addEventListener('click',function(){
//     const newNumber = inputNumber('phone-number', false)
//     priceUpdate(newNumber)
// })