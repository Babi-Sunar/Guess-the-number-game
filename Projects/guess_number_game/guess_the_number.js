//Guess the number


//function for generating random integer between 1 - 100
function generate_random_num(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let random_num = generate_random_num(1, 100);//random value generated
console.log(random_num);
let user_input;
let no_of_guess = [];
let score;

do {
    user_input = parseInt(prompt("\t\t<-- GUESS THE CORRECT NUMBER BETWEEN 1 & 100-->"));
    no_of_guess.push(user_input);
    if(random_num <= 0 || random_num > 100){
        alert("Invalid input!);
    }
    else if(random_num > user_input){
        alert("Sorry, Try bigger one!");
    }
    else if(random_num < user_input){
        alert("Sorry, Try smaller one!");
    }
} while (user_input != random_num);

score = 100 - (no_of_guess.length);
alert(`Congratulations!! Your guess is correct. \n Score : ${score}`);
