/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Collection of validation methods
 */
export class CardValidator {
    /**
     * Check if control contains numbers only
     * @param {?} abstractCtrl
     * @return {?}
     */
    static numbersOnly(abstractCtrl) {
        /** @type {?} */
        const ccNum = abstractCtrl.value;
        /** @type {?} */
        const NUMBERS_ONLY = new RegExp(/^[0-9]+$/);
        return !NUMBERS_ONLY.test(ccNum) ? CardValidator.NUMBERS_ONLY_ERR : null;
    }
    /**
     * Check checksum number in card number using Luhn algorithm
     * @param {?} abstractCtr
     * @return {?}
     */
    static checksum(abstractCtr) {
        /** @type {?} */
        const ccNumber = abstractCtr.value;
        /** @type {?} */
        const luhnArray = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
        /** @type {?} */
        let length = ccNumber ? ccNumber.length : 0;
        /** @type {?} */
        let sum = 0;
        /** @type {?} */
        let shouldMultiply = true;
        while (length) {
            /** @type {?} */
            const val = parseInt(ccNumber.charAt(--length), 10);
            sum += (shouldMultiply = !shouldMultiply) ? luhnArray[val] : val;
        }
        return !(sum && sum % 10 === 0) ? CardValidator.CHECKSUM_INVALID : null;
    }
    /**
     * Check validity of the card
     * @param {?} formGroup
     * @return {?}
     */
    static expiration(formGroup) {
        /** @type {?} */
        const expirationMonth = Number(formGroup.get('expirationMonth').value);
        /** @type {?} */
        const expirationYear = Number(formGroup.get('expirationYear').value);
        /** @type {?} */
        const expirationDate = new Date(expirationYear, expirationMonth + 1, 0);
        return new Date().getTime() > expirationDate.getTime() ? CardValidator.CARD_EXPIRED : null;
    }
}
/**
 * Custom error for alphanumeric input
 */
CardValidator.NUMBERS_ONLY_ERR = {
    numbersOnly: true,
};
/**
 * Custom error for invalid checksum
 */
CardValidator.CHECKSUM_INVALID = {
    checksum: true,
};
/**
 * Custom error for expired card
 */
CardValidator.CARD_EXPIRED = {
    expiration: true,
};
if (false) {
    /**
     * Custom error for alphanumeric input
     * @type {?}
     * @private
     */
    CardValidator.NUMBERS_ONLY_ERR;
    /**
     * Custom error for invalid checksum
     * @type {?}
     * @private
     */
    CardValidator.CHECKSUM_INVALID;
    /**
     * Custom error for expired card
     * @type {?}
     * @private
     */
    CardValidator.CARD_EXPIRED;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC12YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1wYXltZW50LWNhcmQvIiwic291cmNlcyI6WyJsaWIvdmFsaWRhdG9yL2NhcmQtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQSxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBeUJqQixNQUFNLENBQUMsV0FBVyxDQUFDLFlBQTZCOztjQUMvQyxLQUFLLEdBQVcsWUFBWSxDQUFDLEtBQUs7O2NBQ2xDLFlBQVksR0FBVyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDbkQsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzNFLENBQUM7Ozs7OztJQUtNLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBNEI7O2NBQzNDLFFBQVEsR0FBVyxXQUFXLENBQUMsS0FBSzs7Y0FDcEMsU0FBUyxHQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7WUFDM0QsTUFBTSxHQUFXLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFDL0MsR0FBRyxHQUFHLENBQUM7O1lBQ1AsY0FBYyxHQUFHLElBQUk7UUFFekIsT0FBTyxNQUFNLEVBQUU7O2tCQUNQLEdBQUcsR0FBVyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzRCxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7U0FDbEU7UUFDRCxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDMUUsQ0FBQzs7Ozs7O0lBS00sTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFvQjs7Y0FDckMsZUFBZSxHQUFXLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxDQUFDOztjQUN4RSxjQUFjLEdBQVcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUM7O2NBQ3RFLGNBQWMsR0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsZUFBZSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0UsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzdGLENBQUM7Ozs7O0FBcERjLDhCQUFnQixHQUFxQjtJQUNsRCxXQUFXLEVBQUUsSUFBSTtDQUNsQixDQUFDOzs7O0FBS2EsOEJBQWdCLEdBQXFCO0lBQ2xELFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQzs7OztBQUthLDBCQUFZLEdBQXFCO0lBQzlDLFVBQVUsRUFBRSxJQUFJO0NBQ2pCLENBQUM7Ozs7Ozs7SUFoQkYsK0JBRUU7Ozs7OztJQUtGLCtCQUVFOzs7Ozs7SUFLRiwyQkFFRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIENvbGxlY3Rpb24gb2YgdmFsaWRhdGlvbiBtZXRob2RzXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXJkVmFsaWRhdG9yIHtcbiAgLyoqXG4gICAqIEN1c3RvbSBlcnJvciBmb3IgYWxwaGFudW1lcmljIGlucHV0XG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBOVU1CRVJTX09OTFlfRVJSOiBWYWxpZGF0aW9uRXJyb3JzID0ge1xuICAgIG51bWJlcnNPbmx5OiB0cnVlLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDdXN0b20gZXJyb3IgZm9yIGludmFsaWQgY2hlY2tzdW1cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIENIRUNLU1VNX0lOVkFMSUQ6IFZhbGlkYXRpb25FcnJvcnMgPSB7XG4gICAgY2hlY2tzdW06IHRydWUsXG4gIH07XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBlcnJvciBmb3IgZXhwaXJlZCBjYXJkXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBDQVJEX0VYUElSRUQ6IFZhbGlkYXRpb25FcnJvcnMgPSB7XG4gICAgZXhwaXJhdGlvbjogdHJ1ZSxcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgY29udHJvbCBjb250YWlucyBudW1iZXJzIG9ubHlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgbnVtYmVyc09ubHkoYWJzdHJhY3RDdHJsOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc3QgY2NOdW06IHN0cmluZyA9IGFic3RyYWN0Q3RybC52YWx1ZTtcbiAgICBjb25zdCBOVU1CRVJTX09OTFk6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoL15bMC05XSskLyk7XG4gICAgcmV0dXJuICFOVU1CRVJTX09OTFkudGVzdChjY051bSkgPyBDYXJkVmFsaWRhdG9yLk5VTUJFUlNfT05MWV9FUlIgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGNoZWNrc3VtIG51bWJlciBpbiBjYXJkIG51bWJlciB1c2luZyBMdWhuIGFsZ29yaXRobVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjaGVja3N1bShhYnN0cmFjdEN0cjogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIGNvbnN0IGNjTnVtYmVyOiBzdHJpbmcgPSBhYnN0cmFjdEN0ci52YWx1ZTtcbiAgICBjb25zdCBsdWhuQXJyYXk6IEFycmF5PG51bWJlcj4gPSBbMCwgMiwgNCwgNiwgOCwgMSwgMywgNSwgNywgOV07XG4gICAgbGV0IGxlbmd0aDogbnVtYmVyID0gY2NOdW1iZXIgPyBjY051bWJlci5sZW5ndGggOiAwO1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGxldCBzaG91bGRNdWx0aXBseSA9IHRydWU7XG5cbiAgICB3aGlsZSAobGVuZ3RoKSB7XG4gICAgICBjb25zdCB2YWw6IG51bWJlciA9IHBhcnNlSW50KGNjTnVtYmVyLmNoYXJBdCgtLWxlbmd0aCksIDEwKTtcbiAgICAgIHN1bSArPSAoc2hvdWxkTXVsdGlwbHkgPSAhc2hvdWxkTXVsdGlwbHkpID8gbHVobkFycmF5W3ZhbF0gOiB2YWw7XG4gICAgfVxuICAgIHJldHVybiAhKHN1bSAmJiBzdW0gJSAxMCA9PT0gMCkgPyBDYXJkVmFsaWRhdG9yLkNIRUNLU1VNX0lOVkFMSUQgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHZhbGlkaXR5IG9mIHRoZSBjYXJkXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGV4cGlyYXRpb24oZm9ybUdyb3VwOiBGb3JtR3JvdXApOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc3QgZXhwaXJhdGlvbk1vbnRoOiBudW1iZXIgPSBOdW1iZXIoZm9ybUdyb3VwLmdldCgnZXhwaXJhdGlvbk1vbnRoJykudmFsdWUpO1xuICAgIGNvbnN0IGV4cGlyYXRpb25ZZWFyOiBudW1iZXIgPSBOdW1iZXIoZm9ybUdyb3VwLmdldCgnZXhwaXJhdGlvblllYXInKS52YWx1ZSk7XG4gICAgY29uc3QgZXhwaXJhdGlvbkRhdGU6IERhdGUgPSBuZXcgRGF0ZShleHBpcmF0aW9uWWVhciwgZXhwaXJhdGlvbk1vbnRoICsgMSwgMCk7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpID4gZXhwaXJhdGlvbkRhdGUuZ2V0VGltZSgpID8gQ2FyZFZhbGlkYXRvci5DQVJEX0VYUElSRUQgOiBudWxsO1xuICB9XG59XG4iXX0=