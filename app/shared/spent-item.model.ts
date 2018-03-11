import * as moment from 'moment';

/**
 * Model of the individual expense item
 */
export class SpentItem {

    /**
     * Automatically generated unique DB identifier
     */
    id: number;

    /**
     * Expense title
     */
    title: string;

    /**
     * Date money were spent
     */
    date: Date;

    /**
     * Expense sum
     */
    sum: number;

    /**
     * True if it was non-regular expense (that won't typically occur more times in future)
     */
    excludeFromSum: boolean;

    /**
     * Spent item constructor
     * @param {number} id
     * @param {string} title
     * @param {number} sum
     * @param {Date} date
     * @param excludeFromSum
     */
    constructor(id: number, title: string, sum: number, date: Date, excludeFromSum: any) {
        this.id = id;
        this.title = title;
        this.date = !!date ? moment(date).toDate(): new Date();
        this.sum = sum;
        this.excludeFromSum = excludeFromSum == "true";
    }
}