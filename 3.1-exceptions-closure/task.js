//Задача №1

function parseCount(value) {
    let a = Number.parseInt(value, 10);
    if (isNaN(a)) {
        throw new Error('Невалидное значение');
    }
    return a;
}
function validateCount(value) {
    try {
        return parseCount(value);
    } catch (err) {
        return err;
    }
}

//Задача №2

class Triangle {
    constructor(a, b, c) {
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;

        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }
    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        return Math.round(Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)) * 1000) / 1000;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        const triangle = {
            getArea() {
                return 'Ошибка! Треугольник не существует';
            },
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        }
        return triangle;
    }
}