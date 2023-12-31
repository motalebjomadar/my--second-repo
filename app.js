document.getElementById('deposit-button').addEventListener('click', function() {
    const depositInput = document.getElementById('amountIn');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    
    const depositTotal = document.getElementById('show-deposit-amount');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    
    depositInput.value = '';
})