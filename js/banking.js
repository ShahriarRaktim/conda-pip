document.getElementById('deposit-btn').addEventListener('click', function () {
    const inputDeposit = document.getElementById('deposit-input');
    const inputDepositAmount = inputDeposit.value;
    const deposit = document.getElementById('deposit');
    const depositAmount = deposit.innerText;
    const totalDepositAmount = parseFloat(depositAmount) + parseFloat(inputDepositAmount);
    deposit.innerText = totalDepositAmount;
    
    const balance = document.getElementById('balance');
    const balanceAmount = balance.innerText;
    const totalBalance = parseFloat(balanceAmount) + parseFloat(inputDepositAmount);
    balance.innerText = totalBalance;

    inputDeposit.value = '';
})


// handle withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputAmount = withdrawInput.value;

    // set withdraw total
    const withdraw = document.getElementById('withdraw');
    const withdrawAmount = withdraw.innerText;
   

    const withdrawTotal = parseFloat(withdrawAmount) + parseFloat(withdrawInputAmount);
    withdraw.innerText = withdrawTotal;

    // update balance
    const balance= document.getElementById('balance');
    const balanceAmount = balance.innerText;
    
    const balanceTotal = parseFloat(balanceAmount) - parseFloat(withdrawInputAmount);

    balance.innerText = balanceTotal;

    // clear withdraw input
    withdrawInput.value = '';

    if(withdrawInputAmount > 0){
        document.getElementById('shoping-go').style.display = "block";
    }
    
})


document.getElementById('shoping').addEventListener('click', function () {
    window.location.href = 'shop/shoping.html';
})