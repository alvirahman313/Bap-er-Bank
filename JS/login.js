document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    if (email === 'alvisun@.com' && pass === 'op bolte'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Vul jaigai chole asso tmi. Ata tomar bap er bank nah choto');
    }
})