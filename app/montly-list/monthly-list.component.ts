import {Component, OnInit} from "@angular/core";
import {SpentItemService} from "../shared/spent-item.service";
import {PageRoute, RouterExtensions} from "nativescript-angular";
import {ListViewEventData} from "nativescript-pro-ui/listview";
import {action, confirm} from "ui/dialogs";
import * as Utils from "utils/utils";
import * as moment from 'moment';

/**
 * Component for the list of monthly expenses.
 */
@Component({
    selector: "app-monthly-list",
    moduleId: module.id,
    templateUrl: "./monthly-list.component.html",
    styleUrls: ["./monthly-list.component.css"],
})
export class MonthlyListComponent implements OnInit {

    /**
     * List of monthly expenses
     * @type {any[]}
     */
    public items = [];

    /**
     * Name of selected month
     */
    public monthLabel: string;

    /**
     * If "next month" button should be available (user can't select dates after current moment)
     */
    public displayNextMonth: boolean;

    /**
     * Index of selected item in the list
     */
    private selectedItemIndex: number;

    /**
     * Start of the month
     */
    private startDate: Date;

    /**
     * End of the month
     */
    private endDate: Date;

    /**
     * Sorting column
     * @type {string}
     */
    private sortCol = 'dateAdded';

    /**
     * Sorting direction
     * @type {string}
     */
    private sortDir = 'DESC';

    /**
     * Current date
     * @type {Date}
     */
    private currentDate = new Date();

    /**
     * Sum of regular expenses
     * @type {number}
     */
    public totalSum = 0;

    /**
     * Sum of excluded (i.e. non-regular) expenses
     * @type {number}
     */
    public excludedSum = 0;

    /**
     * Data of item delete confirmation dialog
     * @type {Object}
     */
    private deleteConfirmOptions = {
        title: "Confirm Delete",
        message: "Do you really want to remove this item?",
        okButtonText: "Yes",
        cancelButtonText: "No"
    };

    /**
     * List of available sorting options
     * @type {Object}
     */
    private sortOptions = {
        title: "Sort By",
        message: "Choose sort direction",
        cancelButtonText: "Cancel",
        actions: ["Recent first", "Old first", "Expensive first", "Cheap first"]
    };

    /**
     * Component constructor
     */
    constructor(private spentItemService: SpentItemService, private routerExtensions: RouterExtensions, private pageRoute: PageRoute) {
        this.pageRoute.activatedRoute
            .switchMap(activatedRoute => activatedRoute.params)
            .forEach((params) => {
                let year = +params["year"];
                let month = +params["month"];

                this.startDate = moment(year + '-' + month + '-01').startOf('month').toDate();
                this.endDate = moment(year + '-' + month + '-01').endOf('month').toDate();
                this._setDisplayNextMonth();
            });
    }

    /**
     * Init event handler
     */
    ngOnInit(): void {
        this._loadItems();
    }

    /**
     * Load list of expenses for selected month
     * @private
     */
    _loadItems() {
        this.monthLabel = moment(this.startDate).format('MMM, YYYY');
        this.spentItemService.getByDateRange(this.startDate, this.endDate, this.sortCol, this.sortDir)
            .then((items) => {
                this.items = items;
                this.totalSum = (!!items && items.length) ? items.map((item) => item.excludeFromSum ? 0 : item.sum).reduce((sum, x) => sum + x) : 0;
                this.excludedSum = (!!items && items.length) ? items.map((item) => item.excludeFromSum ? item.sum : 0).reduce((sum, x) => sum + x) : 0;
            })
    }

    /**
     * Update date range and load items for previous month.
     */
    showPrevMonth() {
        this.startDate = moment(this.startDate).subtract(1, 'month').startOf('month').toDate();
        this.endDate = moment(this.endDate).subtract(1, 'month').endOf('month').toDate();
        this._setDisplayNextMonth();
        this._loadItems();
    }

    /**
     * Update date range and load items for next month.
     */
    showNextMonth() {
        this.startDate = moment(this.startDate).add(1, 'month').startOf('month').toDate();
        this.endDate = moment(this.endDate).add(1, 'month').endOf('month').toDate();
        this._setDisplayNextMonth();
        this._loadItems();
    }

    /**
     * Go to selected item edit form
     * @param {ListViewEventData} args
     */
    editItem(args: ListViewEventData) {
        let id = this.items[args.index].id;
        console.log('Open edit form for item with ID:' + id);
        this.routerExtensions.navigate(["/expense-form", id], {});
    }

    /**
     * Delete selected item
     */
    deleteItem() {
        let id = this.items[this.selectedItemIndex].id;
        confirm(this.deleteConfirmOptions).then((result: boolean) => {
            if (result) {
                this.spentItemService.delete(id)
                    .then(() => {
                        this._loadItems();
                    });
            }
        });
    }

    /**
     * Calculate boolean flag if next month should be available for selection or not;
     */
    private _setDisplayNextMonth() {
        let currentMoment = moment(this.startDate);
        this.displayNextMonth = currentMoment.year() < this.currentDate.getFullYear() ||
            (this.currentDate.getFullYear() == currentMoment.year() && currentMoment.month() < this.currentDate.getMonth());
    }

    /**
     * Get expression for DB query to sort items
     * @param option
     * @returns {string[]}
     * @private
     */
    private _getSortExp(option) {
        switch (option) {
            case 'New first':
                return ['dateAdded', 'DESC'];
            case 'Old first':
                return ['dateAdded', 'ASC'];
            case 'Expensive first':
                return ['sum', 'Desc'];
            case 'Cheap first':
                return ['sum', 'ASC'];
            default:
                return ['dateAdded', 'DESC'];
        }
    }

    /**
     * Open dialog to select on of the available sorting options.
     */
    openSortDialog() {
        action(this.sortOptions).then((result) => {
            let sortExpressionParts = this._getSortExp(result);
            this.sortCol = sortExpressionParts[0];
            this.sortDir = sortExpressionParts[1];
            this._loadItems();
        });
    }

    /**
     * Search layout loaded event handler
     * @param event
     */
    onSearchLayoutLoaded(event) {
        if (event.object.android) {
            event.object.android.setFocusableInTouchMode(true);
        }
    }

    /**
     * Search bar loaded event handler - clear focus, which is set on load event
     * @param event
     */
    onSearchBarLoaded(event) {
        if (event.object.android) {
            event.object.android.clearFocus();
        }
    }

    /**
     *
     * @param {ListViewEventData} args
     */
    public onSwipeCellStarted(args: ListViewEventData) {
        const swipeLimits = args.data.swipeLimits;
        swipeLimits.threshold = 30 * Utils.layout.getDisplayDensity();
        swipeLimits.left = 60 * Utils.layout.getDisplayDensity();
        swipeLimits.right = 60 * Utils.layout.getDisplayDensity();
        this.selectedItemIndex = args.index;
    }
}