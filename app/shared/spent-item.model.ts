import * as moment from 'moment';

export class SpentItem {
    id: number;
    title: string;
    date: Date;
    sum: number;
    excludeFromSum: boolean;

    constructor(id: number, title: string, sum: number, date: Date, excludeFromSum: boolean) {
        this.id = id;
        this.title = title;
        this.date = !!date ? moment(date).toDate(): new Date();
        this.sum = sum;
        this.excludeFromSum = excludeFromSum;
    }
}