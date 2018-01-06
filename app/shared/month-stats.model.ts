export class MonthStats {

    sum: number;
    count: number;
    month: number;
    year: number;

    constructor(sum: number, count: number, month: number, year: number) {

        this.sum = sum;
        this.count = count;
        this.month = month;
        this.year = year;
    }
}