'use strict';
function getResult(a, b, c) {
    // код для задачи №1 писать здесь

    let D; //Дискриминант
    D = Math.pow(b, 2) - 4 * a * c;

    let x = [];

    if (D > 0) {
        x.push((-b + Math.sqrt(D)) / 2 * a);
        x.push((-b - Math.sqrt(D)) / 2 * a);
    } else if (D === 0) {
        x.push(-b / 2 * a);
    }
    
    return x;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    
    let arrAverage = [];

    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log(marks.length);
        arrAverage = marks.slice(0, 5);
        console.log(marks.slice(0, 5));
    } else {
        arrAverage = marks;
    }

    let sum = 0;
    for(let i = 0; i < arrAverage.length; i++) {
        sum += arrAverage[i];
    }

    return sum / arrAverage.length;
}

function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    let today = new Date();
    let result;

    if ((today.getFullYear() - dateOfBirthday.getFullYear()) < 18) {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    } else {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    }
    return result;
}