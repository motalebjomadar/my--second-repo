document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('amountIn');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    const depositTotal = document.getElementById('show-deposit-amount');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // clear deposit input field
    depositInput.value = '';

// update balance
    const totalBalance = document.getElementById('total-amount');
    const balanceTotalText = totalBalance.innerText;
    const convertBalanceTotal = parseFloat(balanceTotalText);
    const newTotalBalance = convertBalanceTotal + newDepositAmount;
    totalBalance.innerText = newTotalBalance;
})

// withdraw
document.getElementById('withdraw-button').addEventListener('click', function() {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const convertWithdrawInputAmount = parseFloat(withdrawInputText);



    // set withdraw total
    const totalWithdraw = document.getElementById('withdraw-total');
    const totalWithdrawText = totalWithdraw.innerText;
    const convertTotalWithdrawAmount = parseFloat(totalWithdrawText);
    const newWithdrawTotal = convertWithdrawInputAmount + convertTotalWithdrawAmount;
    totalWithdraw.innerText = newWithdrawTotal;

    // update balance
    const previousTotalBalance = document.getElementById('total-amount');
    const previousTotalBalanceText = previousTotalBalance.innerText;
    const convertPreviousTotalBalanceAmount = parseFloat(previousTotalBalanceText);
    const newTotalBalance = convertPreviousTotalBalanceAmount - convertWithdrawInputAmount;
    previousTotalBalance.innerText = newTotalBalance;

    // clear withdraw input field
    withdrawInput.value = '';

})


















