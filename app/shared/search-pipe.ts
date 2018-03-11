import {Pipe, PipeTransform} from '@angular/core';

/**
 * Custom Angular pipe to search among array items by input string
 */
@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    /**
     * Filter list by search string
     * @param value
     * @param {string} keys
     * @param {string} term
     * @returns {any}
     */
    public transform(value, keys: string, term: string) {

        if (!term) return value;
        return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));

    }
}