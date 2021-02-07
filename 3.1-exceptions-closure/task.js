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
    } catch(err) {
        return err;
    }
}

//Задача №2

let perimeter;
let area;
class Triangle {
    constructor(a, b, c) {
        perimeter = this.getPerimeter();
        area = this.getArea();
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;
        this.perimeter = this.getPerimeter();
        this.area = this.getArea();
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }
    getPerimeter() {
        try {
        perimeter = this.sideA + this.sideB + this.sideC;
        return perimeter;
        } catch(e) {
            return 'Ошибка! Треугольник не существует';
        }
    }
    getArea() {
        this.getPerimeter();
        try {
        let p = perimeter / 2;
        area = Math.round(Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)) * 1000) / 1000;
        return area
        } catch(e) {
            area = 'Ошибка! Треугольник не существует'
            return area;
        }
    }
    //perimeter = getPerimeter();
    //area = getArea();
}


function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
        //return triangle;
    } catch(e) {
        
        
        
        console.log("Error");
        return "Че за херня?!?!?!"
    }
}