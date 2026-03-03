//Guess the number


//function for generating random integer between 1 - 100
function generate_random_num(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let random_num = generate_random_num(1, 100);//random value generated
let user_input;
let no_of_guess = [];
let score;

do {
    user_input = parseInt(prompt("\t\t<-- GUESS THE CORRECT NUMBER BETWEEN 1 & 100 -->"));
    no_of_guess.push(user_input);
    if (user_input <= 0 || user_input > 100) {
        alert("Invalid input!");
    }
    else if (user_input > random_num) {
        alert("Sorry, Try smaller one!");
    }
    else if (user_input < random_num) {
        alert("Sorry, Try bigger one!");
    }

} while (user_input != random_num);

score = 100 - no_of_guess.length;
alert(`Congratulations!! Your guess is correct. \n Score : ${score}`);