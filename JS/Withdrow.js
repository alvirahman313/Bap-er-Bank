/*
1.add event handler with the withdraw button

2.get the withdraw amount from the withdrw input field

2-5. also make sure to convert the input into a number by using parseFlat

3.Get Ager Withdraw total

4. calculate total withdraw amount

4-5. set total withdraw amount

5.get the Ager belance total

6. calculate new balance total

6-5.set the new balance total

7. clear the input filed
*/
// step-1
document.getElementById('btn-Withdraw').addEventListener('click', function () {
    // step-2
    const withdrawField = document.getElementById('user-Withdraw');
    const newWithdrawAmountString = withdrawField.value;
    const newwithdrawAmount = parseInt(newWithdrawAmountString);
    // step-3
    const withdrawTotalElement = document.getElementById('Withdraw-total');
    const AgerWithdrawTotalString = withdrawTotalElement.innerText;
    const AgerWithdrawAmount = parseInt(AgerWithdrawTotalString);
    // step-4
    const currentWithdrawTotal = AgerWithdrawAmount + newwithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    // step-5
    const belanceTotalElement =document.getElementById('balance-total');
    const AgerbelanceString = belanceTotalElement.innerText;
    const AgerBelanceTotal = parseInt(AgerbelanceString);
    // step-6
    const newBalanceTotal = AgerBelanceTotal - newwithdrawAmount;
    belanceTotalElement.innerText = newBalanceTotal;
    // step-7 
    withdrawField.value= '';


})