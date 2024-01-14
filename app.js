function updateInputNumber(isIncreasing){
    const inputField = document.getElementById('input-field');
    let inputNumber = inputField.value ;
    if(isIncreasing==true){
        inputNumber = parseInt(inputNumber) + 1 ;
    }
    else if(inputNumber > 0 ){
        inputNumber = parseInt(inputNumber) - 1 ;
    }
    inputField.value = inputNumber ;
    // update total
    const totalPrice = document.getElementById('product-price');
    totalPrice.innerText = inputNumber * 60 ;
}

document.getElementById('plus-button').addEventListener('click', function() {
    updateInputNumber(true);
})
document.getElementById('minus-button').addEventListener('click',function() {
    updateInputNumber();
})



