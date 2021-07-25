class Date {
    day;
    month;
    year;
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    getDay() {
        return this.day;
    }

    getMonth() {
        return this.month;
    }

    getYear() {
        return this.year;
    }

    setDay(day) {
        this.day = day;
    }

    setMonth(month) {
        this.month = month;
    }

    setYear(year) {
        this.year = year;
    }
    setDate(day,month,year){
        this.day=day;
        this.month=month;
        this.year=year;
    }
    toString(){
        return this.day + '/' + this.month + '/' + this.year;
    }
}

let date = new Date(2, 2, 2021);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
alert(day + '/' + month + '/' + year);
date.setDay(10);
date.setMonth(10);
date.setYear(2019);
alert(date.getDay() + '/' + date.getMonth() + '/' + date.getYear());
date.setDate(1,1,111)
alert(date.getDay() + '/' + date.getMonth() + '/' + date.getYear());