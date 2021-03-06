/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class PaymentCardNumberPipe {
    /**
     * Transform card number to card format for known numbers
     * @param {?} value
     * @return {?}
     */
    transform(value) {
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
    }
}
PaymentCardNumberPipe.decorators = [
    { type: Pipe, args: [{
                name: 'paymentCardNumber',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1jYXJkLW51bWJlci5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGF5bWVudC1jYXJkLyIsInNvdXJjZXMiOlsibGliL3BpcGUvcGF5bWVudC1jYXJkLW51bWJlci9wYXltZW50LWNhcmQtbnVtYmVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQUl6QixTQUFTLENBQUMsS0FBYTtRQUM1QixRQUFRLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDcEIsS0FBSyxFQUFFO2dCQUNMLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDMUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUMxQyxPQUFPLEtBQUssQ0FBQztZQUNmLEtBQUssRUFBRTtnQkFDTCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDO2dCQUNFLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQzs7O1lBbEJGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsbUJBQW1CO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdwYXltZW50Q2FyZE51bWJlcicsXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRDYXJkTnVtYmVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKipcbiAgICogVHJhbnNmb3JtIGNhcmQgbnVtYmVyIHRvIGNhcmQgZm9ybWF0IGZvciBrbm93biBudW1iZXJzXG4gICAqL1xuICBwdWJsaWMgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAodmFsdWUubGVuZ3RoKSB7XG4gICAgICBjYXNlIDE1OlxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcYihcXGR7NH0pLywgJyQxLScpO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLy0oXFxkezZ9KS8sICctJDEtJyk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIGNhc2UgMTY6XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXRjaCgvLns0fS9nKS5qb2luKCctJyk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG59XG4iXX0=