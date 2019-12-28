let min_number = 0;
let max_number1 = 8;
let total_prize = 0;
let attempts;
let prize_attempt = 100;
let random_number;
let user_number;
let three = 3;//Sorry it is Eslint

if (confirm('Do you want to play a game?')){
    for(attempts = 0;attempts<three; attempts++){
        random_number = Math.floor(Math.random() *Math.floor(max_number1 + 1));
        user_number = prompt(`
Choose a roulette pocket number from ${min_number} to ${max_number1}
Attempts left ${attempts}
Total prize: ${total_prize}$
Possible prize on current attempt: ${prize_attempt}$`);
        if(+user_number === random_number){
            alert('Congratulation, you won!   Your prize is: '+prize_attempt+'$. Do you want to continue?');
            break;
        }else if(user_number !== random_number){
            alert('Try again! '+ random_number);
        }
    }
    if(attempts === three && user_number !== random_number){
        confirm('Thank you for your participation. Your prize is: '+ total_prize +' $ Do you want to continue?');
    }
}else{
    alert('You did not become a billionaire, but can.');
}
