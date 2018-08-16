let logIn = prompt('Please, log in!');
if (!logIn) {
    alert('Canceled');
} else if (logIn.length < 4) {
    alert('I don\'t know any users having name length less than 4 symbols');
} else if (logIn === 'User') {
    let password = prompt('Please, enter your password');
    if (!password) {
        alert('Cancelled');
    } else {
        switch (password) {
            case 'SuperUser':
                alert(new Date().getHours() < 20 ? 'Good day!' : 'Good night!');
                break;
            default:
                alert('Wrong password!');
        }
    }
} else {
    alert('I don\'t know you!');
}