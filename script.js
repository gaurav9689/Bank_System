let totalDeposit = 0;
let totalWithdraw = 0;
let totalBalance = 0;

function updateDashboard() {
    document.getElementById('totalDeposit').textContent = totalDeposit.toFixed(2);
    document.getElementById('totalWithdraw').textContent = totalWithdraw.toFixed(2);
    document.getElementById('totalBalance').textContent = totalBalance.toFixed(2);
}

function deposit() {
    const depositAmount = parseFloat(document.getElementById('depositAmount').value);
    if (depositAmount > 0) {
        totalDeposit += depositAmount;
        totalBalance += depositAmount;
        updateDashboard();
        alert('Deposit successful!');
        document.getElementById('depositAmount').value = '';
    } else {
        alert('Please enter a valid deposit amount.');
    }
}

function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
    if (withdrawAmount > 0 && withdrawAmount <= totalBalance) {
        totalWithdraw += withdrawAmount;
        totalBalance -= withdrawAmount;
        updateDashboard();
        alert('Withdrawal successful!');
        document.getElementById('withdrawAmount').value = '';
    } else if (withdrawAmount > totalBalance) {
        alert('Insufficient funds.');
    } else {
        alert('Please enter a valid withdrawal amount.');
    }
}
