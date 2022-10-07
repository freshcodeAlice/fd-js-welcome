/*
Напишіть клас Student який має властивості - 
ім'я
прізвище
рік вступу до університету (число! 2017)

метод getCourse, який вираховує, на якому курсі вчиться студент (поточний рік отримайте від Date)
*/


class Student{
    constructor(firstName, lastName, yearOfGrad) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfGrad = yearOfGrad; 
    }

    getCourse() {
        return new Date().getFullYear - this.yearOfGrad;
    }
}





/*
Написати функцію, яка повертає рядок з назвою поточної пори року.
'зима' - якщо на дворі з грудня по січень,
'осінь' - з вересня по листопад
'літо' - з червня по серпень
'весна' - з березня по травень

*/

function getSeason(){
    const month = new Date().getMonth();
    // if(month <=1 || month === 11) {
    //     return 'winter'
    // } else if(month >= 2 && month <=4) {
    //     return 'spring'
    // } else if(month >= 5 && month <= 7) {
    //     return 'summer'
    // } else {
    //     return 'fall'
    // }

    switch(month){
        case 0:
        case 1:
        case 11:
            return 'winter';
        case 2:
        case 3:
        case 4:
            return 'spring';
        case 5: 
        case 6:
        case 7:
            return 'summer';
        case 8:
        case 9:
        case 10:
            return 'fall';
        default: 
            return null;
    }
}



/*
Вивести на екран поточну дату у форматі:
"день-місяць-рік"
(7-10-2022)



*/

const date = new Date();
console.log(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`);