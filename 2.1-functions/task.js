//Задача №1

function getSolutions(a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;

    if (D < 0) {
        return { D: D, roots: [] };
    } else if (D === 0) {
        let x1 = - b / 2 * a;
        return { D: D, roots: [x1] };
    } else if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / 2 * a;
        let x2 = (-b - Math.sqrt(D)) / 2 * a;
        return { D: D, roots: [x1, x2] };
    }
}

function showSolutionMessage(a, b, c) {
    let result = getSolutions(a, b, c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.roots.length === -1) {
        console.log('Уравнение не имеет вещественных корней');
    } else if (result.roots.length === 1) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else if (result.roots.length > 1) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

//Задача №2

let marksAvg;
let marks;
let grades = [];

function getAverageScore(data) {
    let dataAvg = {};
    let gradesAvgSum = 0;
    let itemSum = 0;

    for (let prop in data) {
        itemSum++;
        marks = data[prop];

        getAverageMark(marks);
        dataAvg[prop] = marksAvg;
        gradesAvgSum += marksAvg;
    }

    //console.log(gradesAvgSum);
    //console.log(itemSum);
    if (Object.keys(data).length === 0) {
        dataAvg.average = 0;
    } else {
        dataAvg.average = gradesAvgSum / itemSum;
    }

    //console.log(grades);
    //console.log(dataAvg);
    return dataAvg;
}

function getAverageMark(marks) {
    if (marks.length == 0) {
        marksAvg = 0;
    } else {
        let sum = 0;
        for (i = 0; i < marks.length; i++) {
            sum += marks[i];
            grades.push(marks[i]);
        }
        marksAvg = sum / marks.length;
    }
    return marksAvg;
}