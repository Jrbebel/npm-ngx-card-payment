/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var PaymentCardNumberPipe = /** @class */ (function () {
    function PaymentCardNumberPipe() {
    }
    /**
     * Transform card number to card format for known numbers
     */
    /**
     * Transform card number to card format for known numbers
     * @param {?} value
     * @return {?}
     */
    PaymentCardNumberPipe.prototype.transform = /**
     * Transform card number to card format for known numbers
     * @param {?} value
     * @return {?}
     */
    function (value) {
        switch (value.length) {
            case 15:
                value = value.replace(/\b(\d{4})/, '$1-');
                value = value.replace(/-(\d{6})/, '-$1-');
                return value;
            case 16:
                return value.match(/.{4}/g).join('-');
            default:
                return value;
        }
    };
    PaymentCardNumberPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'paymentCardNumber',
                },] }
    ];
    return PaymentCardNumberPipe;
}());
export { PaymentCardNumberPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1jYXJkLW51bWJlci5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGF5bWVudC1jYXJkLyIsInNvdXJjZXMiOlsibGliL3BpcGUvcGF5bWVudC1jYXJkLW51bWJlci9wYXltZW50LWNhcmQtbnVtYmVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFtQkEsQ0FBQztJQWZDOztPQUVHOzs7Ozs7SUFDSSx5Q0FBUzs7Ozs7SUFBaEIsVUFBaUIsS0FBYTtRQUM1QixRQUFRLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDcEIsS0FBSyxFQUFFO2dCQUNMLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDMUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUMxQyxPQUFPLEtBQUssQ0FBQztZQUNmLEtBQUssRUFBRTtnQkFDTCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDO2dCQUNFLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQzs7Z0JBbEJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsbUJBQW1CO2lCQUMxQjs7SUFpQkQsNEJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWhCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3BheW1lbnRDYXJkTnVtYmVyJyxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudENhcmROdW1iZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gY2FyZCBudW1iZXIgdG8gY2FyZCBmb3JtYXQgZm9yIGtub3duIG51bWJlcnNcbiAgICovXG4gIHB1YmxpYyB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgc3dpdGNoICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMTU6XG4gICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxiKFxcZHs0fSkvLCAnJDEtJyk7XG4gICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvLShcXGR7Nn0pLywgJy0kMS0nKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgY2FzZSAxNjpcbiAgICAgICAgcmV0dXJuIHZhbHVlLm1hdGNoKC8uezR9L2cpLmpvaW4oJy0nKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==