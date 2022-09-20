/* if - else if */

const userAge = Number(prompt('How old are you?'));

if(userAge > 40) {
    console.log('Your age is bigger than 40')
} else if (userAge > 20 && userAge < 40) {
    console.log('Your are in 20 to 40');
} else {
    console.log('else')
}