/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { default as CARD_TYPES } from '../domain/card-types';
import { Month } from '../domain/month.enum';
export class PaymentCardService {
    /**
     * Return card type based on card number
     * @param {?} ccNum
     * @return {?}
     */
    static getCardType(ccNum) {
        for (const [key, val] of Array.from(PaymentCardService.cardTypes.entries())) {
            if (ccNum
                .split(new RegExp('[ \\-]'))
                .join('')
                .match(val)) {
                return key;
            }
        }
        return null;
    }
    /**
     * Return months in numerical format
     * @return {?}
     */
    static getMonths() {
        /** @type {?} */
        const months = [];
        for (const key of Object.keys(Month)) {
            months.push(Month[key]);
        }
        return months;
    }
    /**
     * Return years based on current year
     * @return {?}
     */
    static getYears() {
        /** @type {?} */
        const years = [];
        /** @type {?} */
        const year = new Date().getFullYear();
        for (let i = -2; i < 5; i++) {
            years.push(year + i);
        }
        return years;
    }
}
/**
 * Collection of card types
 */
PaymentCardService.cardTypes = CARD_TYPES;
PaymentCardService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * Collection of card types
     * @type {?}
     * @private
     */
    PaymentCardService.cardTypes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1jYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1wYXltZW50LWNhcmQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9wYXltZW50LWNhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxJQUFJLFVBQVUsRUFBc0IsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHN0MsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBU3RCLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBYTtRQUNyQyxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUMzRSxJQUNFLEtBQUs7aUJBQ0YsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUMzQixJQUFJLENBQUMsRUFBRSxDQUFDO2lCQUNSLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFDYjtnQkFDQSxPQUFPLEdBQUcsQ0FBQzthQUNaO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBS00sTUFBTSxDQUFDLFNBQVM7O2NBQ2YsTUFBTSxHQUFpQixFQUFFO1FBQy9CLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFLTSxNQUFNLENBQUMsUUFBUTs7Y0FDZCxLQUFLLEdBQWtCLEVBQUU7O2NBQ3pCLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRTtRQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdEI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0FBeEN1Qiw0QkFBUyxHQUF1QixVQUFVLENBQUM7O1lBTHBFLFVBQVU7Ozs7Ozs7O0lBS1QsNkJBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBkZWZhdWx0IGFzIENBUkRfVFlQRVMsIENhcmRUeXBlc0NvbnRhaW5lciB9IGZyb20gJy4uL2RvbWFpbi9jYXJkLXR5cGVzJztcbmltcG9ydCB7IE1vbnRoIH0gZnJvbSAnLi4vZG9tYWluL21vbnRoLmVudW0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGF5bWVudENhcmRTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgY2FyZCB0eXBlc1xuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgY2FyZFR5cGVzOiBDYXJkVHlwZXNDb250YWluZXIgPSBDQVJEX1RZUEVTO1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gY2FyZCB0eXBlIGJhc2VkIG9uIGNhcmQgbnVtYmVyXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldENhcmRUeXBlKGNjTnVtOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgQXJyYXkuZnJvbShQYXltZW50Q2FyZFNlcnZpY2UuY2FyZFR5cGVzLmVudHJpZXMoKSkpIHtcbiAgICAgIGlmIChcbiAgICAgICAgY2NOdW1cbiAgICAgICAgICAuc3BsaXQobmV3IFJlZ0V4cCgnWyBcXFxcLV0nKSlcbiAgICAgICAgICAuam9pbignJylcbiAgICAgICAgICAubWF0Y2godmFsKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBtb250aHMgaW4gbnVtZXJpY2FsIGZvcm1hdFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRNb250aHMoKTogQXJyYXk8TW9udGg+IHtcbiAgICBjb25zdCBtb250aHM6IEFycmF5PE1vbnRoPiA9IFtdO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKE1vbnRoKSkge1xuICAgICAgbW9udGhzLnB1c2goTW9udGhba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiBtb250aHM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHllYXJzIGJhc2VkIG9uIGN1cnJlbnQgeWVhclxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRZZWFycygpOiBBcnJheTxudW1iZXI+IHtcbiAgICBjb25zdCB5ZWFyczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgZm9yIChsZXQgaSA9IC0yOyBpIDwgNTsgaSsrKSB7XG4gICAgICB5ZWFycy5wdXNoKHllYXIgKyBpKTtcbiAgICB9XG4gICAgcmV0dXJuIHllYXJzO1xuICB9XG59XG4iXX0=