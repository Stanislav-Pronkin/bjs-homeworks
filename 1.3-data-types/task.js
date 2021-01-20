function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    'use strict';
    let totalAmount;

    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);

    if (isNaN(percent)) {
        totalAmount = `Параметр \"Процентная ставка\" содержит неправильное значение ${percent}.`;
        return totalAmount;
    } else if (isNaN(contribution)) {
        totalAmount = `Параметр \"Начальный взнос\" содержит неправильное значение ${contribution}.`;
        return totalAmount;
    } else if (isNaN(amount)) {
        totalAmount = `Параметр \"Общая стоимость\" содержит неправильное значение ${amount}.`;
        return totalAmount;
    }

    let creditSum = amount - contribution;
    let today = new Date();
    let months = ((date.getFullYear() - today.getFullYear()) * 12) + (date.getMonth() - today.getMonth());
    let rate = (percent / 100) / 12; 
    let payment = creditSum * (rate + rate / (Math.pow((1 + rate), months) - 1));
    console.log(payment);
    totalAmount = payment * months;
    console.log(totalAmount.toFixed(2));

    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    parseFloat(name);
    if (name == undefined || name == false) {
        name = "Аноним";
    }
    let greeting = `Привет, мир! Меня зовут ${name}.`
    console.log(greeting);
    
    return greeting;
}