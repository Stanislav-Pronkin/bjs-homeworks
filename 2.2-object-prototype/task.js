//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function () {
    let str = this.toLowerCase().split(' ').join('');
    let text = str.split('');

    return text.join('') === text.reverse().join('');
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let sum = 0;
    let count = 0;

    marks.forEach(function(item) {
        sum += item;
        ++count;
    })
    
    average = sum / count;
    roundedAverage = (sum === 0) ? 0 : Math.round(average);
    
    return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    let now = +new Date();
    let date = new Date(birthday);
    birthday = +date;
    let diff = now - birthday;
    age = diff / 86400000 / 365.25;
    verdict = (age >= 18) ? true : false;
    return verdict
}