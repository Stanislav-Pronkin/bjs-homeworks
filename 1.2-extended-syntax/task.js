function getResult(a, b, c) {
    // код для задачи №1 писать здесь
    'use strict';
    let D; //Дискриминант
    D = Math.pow(b, 2) - 4 * a * c;

    let x = [];
    let value;

    if (D > 0) {
        value = (-b + Math.sqrt(D)) / 2 * a;
        x.push(value);
        value = (-b - Math.sqrt(D)) / 2 * a;
        x.push(value);
    } else if (D === 0) {
        value = (-b + Math.sqrt(D)) / 2 * a;
        x.push(value);
    }
    

    return x;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    // return result;
}