document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositFied = document.getElementById('user-deposit');
    const NewdepositAmountString = depositFied.value;
    const NewdepositAmount = parseInt(NewdepositAmountString);

    const depositTotalElement = document.getElementById('deposit-total');

    const AgerDepositTotalString = depositTotalElement.innerText;

    const AgerDepositTotal = parseInt(AgerDepositTotalString);

    const currentDepositTotal = AgerDepositTotal + NewdepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');

    const AgerBalanceTotalString = balanceTotalElement.innerText;

    const AgerBalanceTotal = parseInt(AgerBalanceTotalString);

    const currentBalanceTotal = AgerBalanceTotal + NewdepositAmount;
    
    balanceTotalElement.innerText = currentBalanceTotal;

    depositFied.value = '';

})