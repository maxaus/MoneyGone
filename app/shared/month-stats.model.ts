/**
 * Model of monthly expense item
 */
export class MonthStats {

    /**
     * Sum of all monthly regular expenses (items with 'excludeFromSum==true' are not counted)
     */
    sum: number;

    /**
     * Number of items in a month
     */
    count: number;

    /**
     * Month as a number
     */
    month: number;

    /**
     * Year as a number
     */
    year: number;

    /**
     * Constructor of monthly item
     * @param {number} sum
     * @param {number} count
     * @param {number} month
     * @param {number} year
     */
    constructor(sum: number, count: number, month: number, year: number) {

        this.sum = sum;
        this.count = count;
        this.month = month;
        this.year = year;
    }
}