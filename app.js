function updateInputNumber(isIncreasing) {
    const inputNumber = document.getElementById('input-field');
    const inputValue = inputNumber.value ;
    if(isIncreasing == true ){
        inputNumber.value = parseInt(inputValue) + 1 ;
    }
    else if(inputValue > 0 ){
        inputNumber.value = parseInt(inputValue) - 1 ;
    }

    const totalAmount = document.getElementById('total-price');
    totalAmount.innerText = inputNumber.value * 60 ;
}

document.getElementById('plus-button').addEventListener('click',function(){
    updateInputNumber(true);
})

document.getElementById('minus-button').addEventListener('click',function(){
    
    
    updateInputNumber(false);