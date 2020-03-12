import { Injectable, EventEmitter, Component, ViewEncapsulation, Input, Output, Pipe, NgModule } from '@angular/core';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Collection of validation methods
 */
class CardValidator {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const CardType = {
    AMERICAN_EXPRESS: 'American Express',
    DINERS: 'Diners',
    DINERS_CARTE_BLANCHE: 'Diners Carte Blanche',
    DISCOVER_CLUB: 'Discover Club',
    CHINA_UNIONPAY: 'China UnionPay',
    JCB: 'JCB',
    LASER: 'Laser',
    MAESTRO: 'Maestro',
    MASTERCARD: 'Mastercard',
    VISA_ELECTRON: 'Visa Electron',
    VISA: 'VISA',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CARD_TYPES = new Map();
CARD_TYPES.set(CardType.AMERICAN_EXPRESS, new RegExp('^3[47]'));
CARD_TYPES.set(CardType.DINERS, new RegExp('^36'));
CARD_TYPES.set(CardType.DINERS_CARTE_BLANCHE, new RegExp('^30[0-5]'));
CARD_TYPES.set(CardType.DISCOVER_CLUB, new RegExp('^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)'));
CARD_TYPES.set(CardType.CHINA_UNIONPAY, new RegExp('^(62[0-9]{14,17})$'));
CARD_TYPES.set(CardType.JCB, new RegExp('^35(2[89]|[3-8][0-9])'));
CARD_TYPES.set(CardType.LASER, new RegExp('^(6304|6706|6709|6771)[0-9]{12,15}$'));
CARD_TYPES.set(CardType.MAESTRO, new RegExp('^(50|5[6-8]|6)[0-9]{12,19}$'));
CARD_TYPES.set(CardType.MASTERCARD, new RegExp('^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$'));
CARD_TYPES.set(CardType.VISA_ELECTRON, new RegExp('^(4026|417500|4508|4844|491([37]))'));
CARD_TYPES.set(CardType.VISA, new RegExp('^4'));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const Month = {
    JANUARY: '01',
    FEBRUARY: '02',
    MARCH: '03',
    APRIL: '04',
    MAY: '05',
    JUNE: '06',
    JULY: '07',
    AUGUST: '08',
    SEPTEMBER: '09',
    OCTOBER: '10',
    NOVEMBER: '11',
    DECEMBER: '12',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaymentCardService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * NgPaymentCard without any dependencies other then ReactiveFormsModule
 */
class PaymentCardComponent {
    /**
     * @param {?} _ccService
     * @param {?} _fb
     */
    constructor(_ccService, _fb) {
        this._ccService = _ccService;
        this._fb = _fb;
        /**
         * List of months
         */
        this.months = [];
        /**
         * List of years
         */
        this.years = [];
        /**
         * Validation message for missing payment card number
         */
        this.ccNumMissingTxt = 'Numéro de carte est requis';
        /**
         * Validation message for too short payment card number
         */
        this.ccNumTooShortTxt = 'Numéro de carte trop court';
        /**
         * Validation message for too long payment card number
         */
        this.ccNumTooLongTxt = 'Numéro de carte trop long';
        /**
         * Validation message for payment card number that contains characters other than digits
         */
        this.ccNumContainsLettersTxt = 'Numéro doit contenir que des chiffres';
        /**
         * Validation message for invalid payment card  number (Luhn's validation)
         */
        this.ccNumChecksumInvalidTxt = 'Numéro de carte invalide';
        /**
         * Validation message for missing card holder name
         */
        this.cardHolderMissingTxt = 'Nom du titulaire est requis';
        /**
         * Validation message for too long card holder name
         */
        this.cardHolderTooLongTxt = 'Nom du titulaire est trop long';
        /**
         * Validation message for missing expiration month
         */
        this.expirationMonthMissingTxt = "Mois d`'expiration requis";
        /**
         * Validation message for missing expiration year
         */
        this.expirationYearMissingTxt = "Année d`'expiration requis";
        /**
         * Validation message for missing CCV number
         */
        this.ccvMissingTxt = 'CCV requis';
        /**
         * Validation message for too short CCV number
         */
        this.ccvNumTooShortTxt = 'CCV trop court';
        /**
         * Validation message for too long CCV number
         */
        this.ccvNumTooLongTxt = 'CCV trop long';
        /**
         * Validation message for incorrect CCV number containing characters other than digits
         */
        this.ccvContainsLettersTxt = 'CCV doit contenir que des chiffres';
        /**
         * Validation message for expired card
         */
        this.cardExpiredTxt = 'Carte expirée';
        /**
         * Switch validation of the payment card number
         */
        this.validateCCNum = true;
        /**
         * Switch validation of the payment card holder
         */
        this.validateCardHolder = true;
        /**
         * Switch validation of the payment card expiration month
         */
        this.validateExpirationMonth = true;
        /**
         * Switch validation of the payment card expiration year
         */
        this.validateExpirationYear = true;
        /**
         * Switch validation of the payment card expiration
         */
        this.validateCardExpiration = true;
        /**
         * Switch validation of the payment card CCV number
         */
        this.validateCCV = true;
        /**
         * EventEmitter for payment card object
         */
        this.formSaved = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.buildForm();
        this.assignDateValues();
    }
    /**
     * Populate months and years
     * @private
     * @return {?}
     */
    assignDateValues() {
        this.months = PaymentCardService.getMonths();
        this.years = PaymentCardService.getYears();
    }
    /**
     * Build reactive form
     * @private
     * @return {?}
     */
    buildForm() {
        this.ccForm = this._fb.group({
            cardNumber: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(12),
                    Validators.maxLength(19),
                    CardValidator.numbersOnly,
                    CardValidator.checksum,
                ]),
            ],
            cardHolder: ['', Validators.compose([Validators.required, Validators.maxLength(22)])],
            expirationMonth: ['', Validators.required],
            expirationYear: ['', Validators.required],
            ccv: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(4),
                    CardValidator.numbersOnly,
                ]),
            ],
        }, {
            validator: CardValidator.expiration,
        });
    }
    /**
     * Returns payment card type based on payment card number
     * @param {?} ccNum
     * @return {?}
     */
    getCardType(ccNum) {
        return PaymentCardService.getCardType(ccNum);
    }
    /**
     * Callback function that emits payment card details after user clicks submit, or press enter
     * @return {?}
     */
    emitSavedCard() {
        /** @type {?} */
        const cardDetails = (/** @type {?} */ (this.ccForm.value));
        this.formSaved.emit(cardDetails);
    }
}
PaymentCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-payment-card',
                template: "<section class=\"cc-wrapper\">\r\n  <div class=\"cc-box\">\r\n    <div #ccBoxFlip class=\"cc-box--flip\">\r\n      <div class=\"cc-box__front\">\r\n        <div class=\"cc-box__logo\">\r\n          <p>{{ getCardType(ccNumber.value) | uppercase }}</p>\r\n        </div>\r\n        <div class=\"cc-box__element\">\r\n          <label class=\"cc-form__label\" for=\"cc-card-number-display\"></label>\r\n          <input\r\n            class=\"cc-form__input cc-form__input--transparent cc-form__input--embosed\"\r\n            id=\"cc-card-number-display\"\r\n            aria-label=\"Payment card number\"\r\n            disabled=\"disabled\"\r\n            [value]=\"ccForm.get('cardNumber').value | paymentCardNumber\"\r\n          />\r\n        </div>\r\n        <div class=\"cc-box__element\">\r\n          <label class=\"cc-form__label\" for=\"cc-holder-display\">Num\u00E9ro de carte</label>\r\n          <input\r\n            class=\"cc-form__input cc-form__input--transparent cc-form__input--embosed\"\r\n            id=\"cc-holder-display\"\r\n            aria-label=\"Card holder\"\r\n            disabled=\"disabled\"\r\n            [value]=\"ccForm.get('cardHolder').value | uppercase\"\r\n          />\r\n        </div>\r\n        <div class=\"cc-box__element\">\r\n          <label class=\"cc-form__label\" for=\"cc-valid-date-display\">Exp</label>\r\n          <input\r\n            class=\"cc-form__input cc-form__input--left-align cc-form__input--transparent cc-form__input--embosed\"\r\n            id=\"cc-valid-date-display\"\r\n            aria-label=\"Card holder\"\r\n            disabled=\"disabled\"\r\n            [value]=\"ccForm.get('expirationMonth').value + '/' + ccForm.get('expirationYear').value | validThru\"\r\n          />\r\n        </div>\r\n        <div class=\"cc-box__chip\"></div>\r\n      </div>\r\n      <div class=\"cc-box__back\">\r\n        <div class=\"cc-box__strip\">&nbsp;</div>\r\n        <div class=\"cc-box__element\">\r\n          <input\r\n            class=\"cc-form__input cc-form__input--cursive cc-form__input--right-align\"\r\n            id=\"cc-ccv-display\"\r\n            aria-label=\"CCV\"\r\n            disabled=\"disabled\"\r\n            [value]=\"'CCV: ' + ccForm.get('ccv').value\"\r\n            title=\"CCV\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <form class=\"cc-form\" [formGroup]=\"ccForm\" autocomplete=\"off\">\r\n    <div class=\"cc-form__wrapper--long\">\r\n      <label for=\"cc-number\" class=\"cc-form__label cc-form__label--first\">Num\u00E9ro de carte</label>\r\n      <input\r\n        #ccNumber\r\n        class=\"cc-form__input\"\r\n        id=\"cc-number\"\r\n        aria-label=\"Card number\"\r\n        type=\"text\"\r\n        title=\"Card number\"\r\n        maxlength=\"19\"\r\n        formControlName=\"cardNumber\"\r\n        (focus)=\"ccBoxFlip.classList.remove('hover')\"\r\n      />\r\n      <div\r\n        class=\"cc-form__error\"\r\n        *ngIf=\"validateCCNum && ccForm.get('cardNumber').touched && ccForm.get('cardNumber').hasError('required')\"\r\n      >\r\n        {{ ccNumMissingTxt }}\r\n      </div>\r\n      <div\r\n        class=\"cc-form__error\"\r\n        *ngIf=\"validateCCNum && ccForm.get('cardNumber').touched && ccForm.get('cardNumber').hasError('minlength')\"\r\n      >\r\n        {{ ccNumTooShortTxt }}\r\n      </div>\r\n      <div\r\n        class=\"cc-form__error\"\r\n        *ngIf=\"validateCCNum && ccForm.get('cardNumber').touched && ccForm.get('cardNumber').hasError('maxlength')\"\r\n      >\r\n        {{ ccNumTooLongTxt }}\r\n      </div>\r\n      <div\r\n        class=\"cc-form__error\"\r\n        *ngIf=\"validateCCNum && ccForm.get('cardNumber').touched && ccForm.get('cardNumber').hasError('numbersOnly')\"\r\n      >\r\n        {{ ccNumContainsLettersTxt }}\r\n      </div>\r\n      <div\r\n        class=\"cc-form__error\"\r\n        *ngIf=\"validateCCNum && ccForm.get('cardNumber').touched && ccForm.get('cardNumber').hasError('checksum')\"\r\n      >\r\n        {{ ccNumChecksumInvalidTxt }}\r\n      </div>\r\n    </div>\r\n    <div class=\"cc-form__wrapper--long\">\r\n      <label for=\"cc-holder-name\" class=\"cc-form__label\">Titulaire de la carte </label>\r\n      <input\r\n        class=\"cc-form__input\"\r\n        id=\"cc-holder-name\"\r\n        aria-label=\"Card holder name\"\r\n        type=\"text\"\r\n        title=\"Card holder name\"\r\n        maxlength=\"22\"\r\n        formControlName=\"cardHolder\"\r\n        (focus)=\"ccBoxFlip.classList.remove('hover')\"\r\n      />\r\n      <div\r\n        class=\"cc-form__error\"\r\n        *ngIf=\"validateCardHolder && ccForm.get('cardHolder').touched && ccForm.get('cardHolder').hasError('required')\"\r\n      >\r\n        {{ cardHolderMissingTxt }}\r\n      </div>\r\n      <div\r\n        class=\"cc-form__error\"\r\n        *ngIf=\"validateCardHolder && ccForm.get('cardHolder').touched && ccForm.get('cardHolder').hasError('maxlength')\"\r\n      >\r\n        {{ cardHolderTooLongTxt }}\r\n      </div>\r\n    </div>\r\n    <div class=\"cc-form--inline\">\r\n      <div class=\"cc-form__wrapper cc-form__wrapper--short\">\r\n        <label for=\"cc-expiration-month\" class=\"cc-form__label\">Mois d'expiration</label>\r\n        <select\r\n          id=\"cc-expiration-month\"\r\n          class=\"cc-form__select\"\r\n          aria-label=\"Expiration month\"\r\n          formControlName=\"expirationMonth\"\r\n        >\r\n          <option *ngFor=\"let month of months\" value=\"{{ month }}\" (click)=\"ccBoxFlip.classList.remove('hover')\"\r\n            >{{ month }}\r\n          </option>\r\n        </select>\r\n      </div>\r\n      <div class=\"cc-form__wrapper cc-form__wrapper--short\">\r\n        <label for=\"cc-expiration-year\" class=\"cc-form__label\">Ann\u00E9e d'expiration</label>\r\n        <select\r\n          id=\"cc-expiration-year\"\r\n          class=\"cc-form__select\"\r\n          aria-label=\"Expiration year\"\r\n          formControlName=\"expirationYear\"\r\n        >\r\n          <option *ngFor=\"let year of years\" value=\"{{ year }}\" (click)=\"ccBoxFlip.classList.remove('hover')\"\r\n            >{{ year }}\r\n          </option>\r\n        </select>\r\n      </div>\r\n      <div class=\"cc-form__wrapper cc-form__wrapper--short cc-form__wrapper--last\">\r\n        <label for=\"cc-ccv\" class=\"cc-form__label\">ccv</label>\r\n        <input\r\n          class=\"cc-form__input cc-form__input--short\"\r\n          id=\"cc-ccv\"\r\n          aria-label=\"CCV\"\r\n          type=\"text\"\r\n          title=\"CCV\"\r\n          minlength=\"3\"\r\n          maxlength=\"4\"\r\n          formControlName=\"ccv\"\r\n          (focus)=\"ccBoxFlip.classList.add('hover')\"\r\n        />\r\n      </div>\r\n    </div>\r\n    <div\r\n      class=\"cc-form__error\"\r\n      *ngIf=\"\r\n        validateExpirationMonth &&\r\n        ccForm.get('expirationMonth').touched &&\r\n        ccForm.get('expirationMonth').hasError('required')\r\n      \"\r\n    >\r\n      {{ expirationMonthMissingTxt }}\r\n    </div>\r\n    <div\r\n      class=\"cc-form__error\"\r\n      *ngIf=\"\r\n        validateExpirationMonth &&\r\n        ccForm.get('expirationYear').touched &&\r\n        ccForm.get('expirationYear').hasError('required')\r\n      \"\r\n    >\r\n      {{ expirationYearMissingTxt }}\r\n    </div>\r\n    <div\r\n      class=\"cc-form__error\"\r\n      *ngIf=\"\r\n        validateCardExpiration &&\r\n        ccForm.get('expirationMonth').touched &&\r\n        ccForm.get('expirationYear').touched &&\r\n        ccForm.hasError('expiration')\r\n      \"\r\n    >\r\n      {{ cardExpiredTxt }}\r\n    </div>\r\n    <div\r\n      class=\"cc-form__error\"\r\n      *ngIf=\"validateCCV && ccForm.get('ccv').touched && ccForm.get('ccv').hasError('required')\"\r\n    >\r\n      {{ ccvMissingTxt }}\r\n    </div>\r\n    <div\r\n      class=\"cc-form__error\"\r\n      *ngIf=\"validateCCV && ccForm.get('ccv').touched && ccForm.get('ccv').hasError('minlength')\"\r\n    >\r\n      {{ ccvNumTooShortTxt }}\r\n    </div>\r\n    <div\r\n      class=\"cc-form__error\"\r\n      *ngIf=\"validateCCV && ccForm.get('ccv').touched && ccForm.get('ccv').hasError('maxlength')\"\r\n    >\r\n      {{ ccvNumTooLongTxt }}\r\n    </div>\r\n    <div\r\n      class=\"cc-form__error\"\r\n      *ngIf=\"validateCCV && ccForm.get('ccv').touched && ccForm.get('ccv').hasError('numbersOnly')\"\r\n    >\r\n      {{ ccvContainsLettersTxt }}\r\n    </div>\r\n    <button\r\n      type=\"submit\"\r\n      class=\"cc-form__button cc-form__button--ripple\"\r\n      aria-label=\"submit\"\r\n      (click)=\"emitSavedCard()\"\r\n      (keydown.enter)=\"emitSavedCard()\"\r\n    >\r\n      Payer\r\n    </button>\r\n  </form>\r\n</section>\r\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["@import url(https://fonts.googleapis.com/css?family=Inconsolata);.cc-form{align-items:center;display:flex;flex-flow:column;flex-wrap:wrap;height:100%;justify-content:center;width:100%}.cc-form--inline{align-items:inherit;display:inherit;flex-flow:row;flex-wrap:inherit;height:100%;justify-content:flex-end;margin-bottom:5%;width:100%}@media only screen and (max-width:1279px){.cc-form--inline{align-items:inherit;display:inherit;flex-flow:row;flex-wrap:inherit;height:100%;justify-content:flex-end;margin-bottom:5%;width:100%}}@media only screen and (max-width:599px){.cc-form--inline{align-items:center;display:inherit;flex-flow:column;flex-wrap:wrap;height:100%;justify-content:center;width:100%}}input[type=number]{-moz-appearance:textfield}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}@media only screen and (max-width:3000px){.cc-form__wrapper{margin-right:5%;margin-top:5%}.cc-form__wrapper--long{width:60%}.cc-form__wrapper--short{width:15%}.cc-form__wrapper--last{margin-left:5%;margin-right:20%;margin-top:30px}}@media only screen and (max-width:1279px){.cc-form__wrapper{margin-right:5%;margin-top:5%}.cc-form__wrapper--long{width:60%}.cc-form__wrapper--short{width:15%}.cc-form__wrapper--last{margin-left:5%;margin-right:20%}}@media only screen and (max-width:599px){.cc-form__wrapper{margin-right:0;margin-top:0}.cc-form__wrapper--long,.cc-form__wrapper--short{width:80%}.cc-form__wrapper--last{margin-left:0;margin-right:0}}.cc-form__label{color:rgba(0,0,0,.6);display:block;font-family:Inconsolata,Serif,serif;font-size:.7em;font-weight:400;letter-spacing:1px;line-height:10px;margin-bottom:5px;margin-top:5%;text-align:left;text-shadow:none;text-transform:uppercase;width:100%}.cc-form__label--first{margin-top:20%}.cc-form__select{-webkit-appearance:listbox;-moz-appearance:listbox;appearance:listbox}.cc-form__input,.cc-form__select{border:1px solid rgba(0,0,0,.3);border-radius:5px;box-shadow:inset 0 1px 4px rgba(0,0,0,.2);color:#333;display:block;font-size:1.2em;height:38px;margin:0;outline:0;padding:0;text-align:left;width:100%}.cc-form__input--transparent{background:0 0;border:none;border-radius:0;box-shadow:none}.cc-form__input--embosed{color:#fff;font-family:Inconsolata,monospace;font-size:2vw;text-shadow:0 2px 1px rgba(0,0,0,.3)}@media only screen and (max-width:1279px){.cc-form__input--embosed{font-size:2.5vw}}@media only screen and (max-width:599px){.cc-form__input--embosed{font-size:3vw}}.cc-form__input--cursive{font-size:.7em;font-style:italic;left:0;margin:0 auto;position:absolute}.cc-form__input--right-align{padding-right:5%;text-align:right}.cc-form__input--left-align{text-align:left}.cc-form__input:focus,.cc-form__select:focus{border-color:rgba(113,168,102,.9)}.cc-form__error{color:#ff5b5f;font-size:.7em}.cc-form__button{background:rgba(113,168,102,.9);border:0;border-radius:3px;color:#fff;cursor:pointer;margin-bottom:5%;margin-top:1%;outline:0;overflow:hidden;padding:1%;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;width:60%}.cc-form__button:hover{box-shadow:0 6px 8px -3px rgba(0,0,0,.3)}.cc-form__button:focus{background:rgba(85,133,76,.9)}.cc-form__button--ripple{overflow:hidden;position:relative}.cc-form__button--ripple:after{background:rgba(255,255,255,.3);border-radius:80%;content:'';display:block;height:120px;left:50%;margin-left:-50%;margin-top:-60px;position:absolute;top:50%;transform:scale(0);width:100%}.cc-form__button--ripple:not(:active):after{-webkit-animation:2s ease-out button-ripple;animation:2s ease-out button-ripple}@-webkit-keyframes button-ripple{0%{transform:scale(0)}20%{transform:scale(1)}100%{opacity:0;transform:scale(1)}}@keyframes button-ripple{0%{transform:scale(0)}20%{transform:scale(1)}100%{opacity:0;transform:scale(1)}}.cc-wrapper{background-color:#fff;height:100%;margin:0;padding:0;width:100%}.cc-box{height:100px;margin:0 auto;padding:0;position:relative;transform:translateY(-100%);width:70%;z-index:1}@media only screen and (max-width:1279px){.cc-box{transform:translateY(-115%)}}@media only screen and (max-width:599px){.cc-box{transform:translateY(-130%)}}.cc-box--flip{transform-style:preserve-3d;transition:.6s}.cc-box--flip.hover,.cc-box--flip:hover{transform:rotateY(180deg)}.cc-box__element{padding:0;width:80%}.cc-box__logo{align-items:center;color:#fff;display:flex;flex-flow:row nowrap;font-size:1.2em;font-style:italic;font-weight:700;justify-content:flex-end;margin-right:10%;width:100%}.cc-box__strip{background:linear-gradient(135deg,#404040,#1a1a1a);font-size:1.7em;margin:0;padding:0;position:relative;transform:translateY(-90%);width:100%}.cc-box__back,.cc-box__front{align-items:center;-webkit-backface-visibility:hidden;backface-visibility:hidden;background:linear-gradient(135deg,#bd6772,#53223f);border-radius:15px;display:flex;flex-direction:column;flex-flow:column nowrap;height:250px;justify-content:center;left:0;position:absolute;top:0;width:100%}.cc-box__front{transform:rotateY(0)}.cc-box__back{transform:rotateY(180deg)}.ng-invalid.ng-touched{border-color:#ff5b5f}.ng-valid.ng-touched{border-color:#b2b2b2}"]
            }] }
];
/** @nocollapse */
PaymentCardComponent.ctorParameters = () => [
    { type: PaymentCardService },
    { type: FormBuilder }
];
PaymentCardComponent.propDecorators = {
    ccNumMissingTxt: [{ type: Input }],
    ccNumTooShortTxt: [{ type: Input }],
    ccNumTooLongTxt: [{ type: Input }],
    ccNumContainsLettersTxt: [{ type: Input }],
    ccNumChecksumInvalidTxt: [{ type: Input }],
    cardHolderMissingTxt: [{ type: Input }],
    cardHolderTooLongTxt: [{ type: Input }],
    expirationMonthMissingTxt: [{ type: Input }],
    expirationYearMissingTxt: [{ type: Input }],
    ccvMissingTxt: [{ type: Input }],
    ccvNumTooShortTxt: [{ type: Input }],
    ccvNumTooLongTxt: [{ type: Input }],
    ccvContainsLettersTxt: [{ type: Input }],
    cardExpiredTxt: [{ type: Input }],
    validateCCNum: [{ type: Input }],
    validateCardHolder: [{ type: Input }],
    validateExpirationMonth: [{ type: Input }],
    validateExpirationYear: [{ type: Input }],
    validateCardExpiration: [{ type: Input }],
    validateCCV: [{ type: Input }],
    formSaved: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaymentCardNumberPipe {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValidThruPipe {
    /**
     * Transform month and year into card format
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return value && value.length === 7 ? value.substr(0, 3) + value.substr(5) : '/';
    }
}
ValidThruPipe.decorators = [
    { type: Pipe, args: [{
                name: 'validThru',
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Monolithic module that is being bundled and published.
 * Depends only on ReactiveFormsModule and CommonModule.
 */
class NgPaymentCardModule {
}
NgPaymentCardModule.decorators = [
    { type: NgModule, args: [{
                imports: [ReactiveFormsModule, CommonModule],
                declarations: [PaymentCardComponent, PaymentCardNumberPipe, ValidThruPipe],
                providers: [PaymentCardService],
                exports: [PaymentCardComponent],
            },] }
];

export { NgPaymentCardModule, PaymentCardComponent, PaymentCardService as ɵa, PaymentCardNumberPipe as ɵb, ValidThruPipe as ɵc };
//# sourceMappingURL=ng-payment-card.js.map
