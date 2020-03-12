/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { default as CARD_TYPES } from '../domain/card-types';
import { Month } from '../domain/month.enum';
var PaymentCardService = /** @class */ (function () {
    function PaymentCardService() {
    }
    /**
     * Return card type based on card number
     */
    /**
     * Return card type based on card number
     * @param {?} ccNum
     * @return {?}
     */
    PaymentCardService.getCardType = /**
     * Return card type based on card number
     * @param {?} ccNum
     * @return {?}
     */
    function (ccNum) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(Array.from(PaymentCardService.cardTypes.entries())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib_1.__read(_c.value, 2), key = _d[0], val = _d[1];
                if (ccNum
                    .split(new RegExp('[ \\-]'))
                    .join('')
                    .match(val)) {
                    return key;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    /**
     * Return months in numerical format
     */
    /**
     * Return months in numerical format
     * @return {?}
     */
    PaymentCardService.getMonths = /**
     * Return months in numerical format
     * @return {?}
     */
    function () {
        var e_2, _a;
        /** @type {?} */
        var months = [];
        try {
            for (var _b = tslib_1.__values(Object.keys(Month)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                months.push(Month[key]);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return months;
    };
    /**
     * Return years based on current year
     */
    /**
     * Return years based on current year
     * @return {?}
     */
    PaymentCardService.getYears = /**
     * Return years based on current year
     * @return {?}
     */
    function () {
        /** @type {?} */
        var years = [];
        /** @type {?} */
        var year = new Date().getFullYear();
        for (var i = -2; i < 5; i++) {
            years.push(year + i);
        }
        return years;
    };
    /**
     * Collection of card types
     */
    PaymentCardService.cardTypes = CARD_TYPES;
    PaymentCardService.decorators = [
        { type: Injectable }
    ];
    return PaymentCardService;
}());
export { PaymentCardService };
if (false) {
    /**
     * Collection of card types
     * @type {?}
     * @private
     */
    PaymentCardService.cardTypes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1jYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1wYXltZW50LWNhcmQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9wYXltZW50LWNhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sSUFBSSxVQUFVLEVBQXNCLE1BQU0sc0JBQXNCLENBQUM7QUFDakYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTdDO0lBQUE7SUE4Q0EsQ0FBQztJQXZDQzs7T0FFRzs7Ozs7O0lBQ1csOEJBQVc7Ozs7O0lBQXpCLFVBQTBCLEtBQWE7OztZQUNyQyxLQUF5QixJQUFBLEtBQUEsaUJBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBbEUsSUFBQSxnQ0FBVSxFQUFULFdBQUcsRUFBRSxXQUFHO2dCQUNsQixJQUNFLEtBQUs7cUJBQ0YsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUMzQixJQUFJLENBQUMsRUFBRSxDQUFDO3FCQUNSLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFDYjtvQkFDQSxPQUFPLEdBQUcsQ0FBQztpQkFDWjthQUNGOzs7Ozs7Ozs7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDVyw0QkFBUzs7OztJQUF2Qjs7O1lBQ1EsTUFBTSxHQUFpQixFQUFFOztZQUMvQixLQUFrQixJQUFBLEtBQUEsaUJBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBakMsSUFBTSxHQUFHLFdBQUE7Z0JBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN6Qjs7Ozs7Ozs7O1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNXLDJCQUFROzs7O0lBQXRCOztZQUNRLEtBQUssR0FBa0IsRUFBRTs7WUFDekIsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFO1FBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN0QjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7OztJQXhDdUIsNEJBQVMsR0FBdUIsVUFBVSxDQUFDOztnQkFMcEUsVUFBVTs7SUE4Q1gseUJBQUM7Q0FBQSxBQTlDRCxJQThDQztTQTdDWSxrQkFBa0I7Ozs7Ozs7SUFJN0IsNkJBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBkZWZhdWx0IGFzIENBUkRfVFlQRVMsIENhcmRUeXBlc0NvbnRhaW5lciB9IGZyb20gJy4uL2RvbWFpbi9jYXJkLXR5cGVzJztcbmltcG9ydCB7IE1vbnRoIH0gZnJvbSAnLi4vZG9tYWluL21vbnRoLmVudW0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGF5bWVudENhcmRTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgY2FyZCB0eXBlc1xuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgY2FyZFR5cGVzOiBDYXJkVHlwZXNDb250YWluZXIgPSBDQVJEX1RZUEVTO1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gY2FyZCB0eXBlIGJhc2VkIG9uIGNhcmQgbnVtYmVyXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldENhcmRUeXBlKGNjTnVtOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgQXJyYXkuZnJvbShQYXltZW50Q2FyZFNlcnZpY2UuY2FyZFR5cGVzLmVudHJpZXMoKSkpIHtcbiAgICAgIGlmIChcbiAgICAgICAgY2NOdW1cbiAgICAgICAgICAuc3BsaXQobmV3IFJlZ0V4cCgnWyBcXFxcLV0nKSlcbiAgICAgICAgICAuam9pbignJylcbiAgICAgICAgICAubWF0Y2godmFsKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBtb250aHMgaW4gbnVtZXJpY2FsIGZvcm1hdFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRNb250aHMoKTogQXJyYXk8TW9udGg+IHtcbiAgICBjb25zdCBtb250aHM6IEFycmF5PE1vbnRoPiA9IFtdO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKE1vbnRoKSkge1xuICAgICAgbW9udGhzLnB1c2goTW9udGhba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiBtb250aHM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHllYXJzIGJhc2VkIG9uIGN1cnJlbnQgeWVhclxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRZZWFycygpOiBBcnJheTxudW1iZXI+IHtcbiAgICBjb25zdCB5ZWFyczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgZm9yIChsZXQgaSA9IC0yOyBpIDwgNTsgaSsrKSB7XG4gICAgICB5ZWFycy5wdXNoKHllYXIgKyBpKTtcbiAgICB9XG4gICAgcmV0dXJuIHllYXJzO1xuICB9XG59XG4iXX0=