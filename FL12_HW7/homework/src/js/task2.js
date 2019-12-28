let min_value = 0;
let max_value = 8;
let next_max_value= 4;
let total_prize = 0;
let attempts;
let x = 2;
let prize_attempt = 100;
let current_prize_attempt;
let random_number;
let user_number;
let three = 3;//Sorry it is Eslint
let game = confirm('Do you want to play a game?');

if(game){
    while(game){
        for(attempts = 0;attempts<three; attempts++){
            random_number = Math.floor(Math.random() *Math.floor(max_value + 1));
            user_number = prompt(`
Choose a roulette pocket number from ${min_value} to ${max_value}
Attempts left ${attempts}
Total prize: ${total_prize}$
Possible prize on current attempt: ${prize_attempt}$`);
            prize_attempt = prize_attempt/x;
            current_prize_attempt = prize_attempt/x;
            if(+user_number === random_number){
        game = confirm('Congratulation, you won!  Your prize is: '+current_prize_attempt+'$. Do you want to continue?');
                    max_value += next_max_value;
                    prize_attempt = prize_attempt*x;
                    total_prize = current_prize_attempt + prize_attempt;
                if(game === false){
                    break;
                }
                   
            }else if(user_number !== random_number){
                alert('Try again! '+ random_number);
            }
        }
        if(attempts === three && user_number !== random_number){
        game = confirm('Thank you for your participation. Your prize is: '+ total_prize +' $ Do you want to continue?');
            if(game === false){
                break;
            }
        }
    }   
}else{
    alert('You did not become a billionaire, but can.');
}

