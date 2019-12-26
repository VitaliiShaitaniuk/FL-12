let email = 'user@gmail.com';
let email2 = 'admin@gmail.com';
let password1 = 'UserPass';
let password2 = 'AdminPass';
let user_password;
let user_password2;
let replaceable_password;
let new_password;
let new_password_try2;
let authorization;
let user_input_email = prompt('Input your Email');
let five_symbols = 5;
if(user_input_email.length ===0){
    alert('Canceled.');
}else if (user_input_email.length<five_symbols){
    alert("I don't know any emails having name length less than 5 symbols");
}else if(user_input_email !== email && user_input_email !== email2){
    alert('I don’t know you');
}else if(user_input_email === email){
    user_password = prompt('Input password');
    if(user_password.length === 0){
        alert('Canceled.');
    }else if(user_password === password1){
        authorization = true;
        alert('Authorized!');
    }else if(user_password !== password1){
        alert('Wrong password');
    }
}else if(user_input_email === email2){
    user_password2 = prompt('Input password');
    if(user_password2.length === 0){
        alert('Canceled.');
    }else if(user_password2 !== password2){
        alert('Wrong password')
    }else if(user_password2 === password2){
        authorization = true;
        alert('Authorized!');
    }
}
let six = 6;
if(authorization){
    confirm('Do you want to change your password?');
    replaceable_password = prompt('Input old password');
    if(replaceable_password === password1 || replaceable_password === password2){
        new_password = prompt('Input new password');
        if(new_password.length < six){
            alert('It’s too short password. Sorry.');
        }else if(new_password.length === 0){
            alert('Canceled.');
        }
        new_password_try2 = prompt('Input new password Again!');
        if(new_password_try2.length < six){
            alert('It’s too short password. Sorry.');
        }else if(new_password_try2.length === 0){
            alert('Canceled.');
        }
    }
    if(new_password === new_password_try2){
        alert('You have successfully changed your password!');
    }else if(new_password !== new_password_try2){
        alert('You wrote the wrong password.');
    }
}else{
    alert('You have failed the change.');
}
