//Задача №1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {

        this.state = this.state * 1.5;
        return this.state;
    }
    set state(num) {
        if (num < 0) {
            this._state = 0;
        } else if (num > 100) {
            this._state = 100;
        } else {
            this._state = num;
        }
    }
    get state() {
        return this._state;
    }


}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//Задача №2

class Library {
    constructor(name) {
        this.name = name;
        this.books = new Array;
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] == value) {
                return this.books[i];
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                let arr = this.books.splice([i], 1);
                return arr[0];
            }
        }
        return null;
    }
}

//Задача №3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.reportCard = {};
    }
    getName() {
        return this.name;
    }
    addGrade(grade, subject) {
        if (grade > 0 && grade < 6) {
            if (this.reportCard.hasOwnProperty(subject)) {
                this.reportCard[subject].push(grade);
            } else {
                let x = [];
                x.push(grade);
                this.reportCard[subject] = x;
            }
        } else {
            console.log(`Вы пытались поставить оценку \"${grade}\" по предмету \"${subject}\". Допускаются только числа от 1 до 5`)
        }

    }
    getAverageBySubject(subject) {
        if (this.reportCard.hasOwnProperty(subject)) {
            let sum = 0;
            let count = 0;
            this.reportCard[subject].forEach(entry => {
                sum += entry;
                ++count;
            });
            return sum / count;
        } else {
            return 0;
        }
    }
    getTotalAverage() {
        let grades = [];
        let gradesSum = 0;
        let gradesCount = 0;
        for (let prop in this.reportCard) {
            this.reportCard[prop].forEach(entry => {
                grades.push(entry);
            });
        }
        console.log(grades);
        grades.forEach(entry => {
            gradesSum += entry;
            ++gradesCount;
        });
        return gradesSum / gradesCount;
    }
}