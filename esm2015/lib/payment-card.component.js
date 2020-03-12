/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CardValidator } from './validator/card-validator';
import { PaymentCardService } from './service/payment-card.service';
/**
 * NgPaymentCard without any dependencies other then ReactiveFormsModule
 */
export class PaymentCardComponent {
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
if (false) {
    /**
     * FormGroup available publicly
     * @type {?}
     */
    PaymentCardComponent.prototype.ccForm;
    /**
     * List of months
     * @type {?}
     */
    PaymentCardComponent.prototype.months;
    /**
     * List of years
     * @type {?}
     */
    PaymentCardComponent.prototype.years;
    /**
     * Validation message for missing payment card number
     * @type {?}
     */
    PaymentCardComponent.prototype.ccNumMissingTxt;
    /**
     * Validation message for too short payment card number
     * @type {?}
     */
    PaymentCardComponent.prototype.ccNumTooShortTxt;
    /**
     * Validation message for too long payment card number
     * @type {?}
     */
    PaymentCardComponent.prototype.ccNumTooLongTxt;
    /**
     * Validation message for payment card number that contains characters other than digits
     * @type {?}
     */
    PaymentCardComponent.prototype.ccNumContainsLettersTxt;
    /**
     * Validation message for invalid payment card  number (Luhn's validation)
     * @type {?}
     */
    PaymentCardComponent.prototype.ccNumChecksumInvalidTxt;
    /**
     * Validation message for missing card holder name
     * @type {?}
     */
    PaymentCardComponent.prototype.cardHolderMissingTxt;
    /**
     * Validation message for too long card holder name
     * @type {?}
     */
    PaymentCardComponent.prototype.cardHolderTooLongTxt;
    /**
     * Validation message for missing expiration month
     * @type {?}
     */
    PaymentCardComponent.prototype.expirationMonthMissingTxt;
    /**
     * Validation message for missing expiration year
     * @type {?}
     */
    PaymentCardComponent.prototype.expirationYearMissingTxt;
    /**
     * Validation message for missing CCV number
     * @type {?}
     */
    PaymentCardComponent.prototype.ccvMissingTxt;
    /**
     * Validation message for too short CCV number
     * @type {?}
     */
    PaymentCardComponent.prototype.ccvNumTooShortTxt;
    /**
     * Validation message for too long CCV number
     * @type {?}
     */
    PaymentCardComponent.prototype.ccvNumTooLongTxt;
    /**
     * Validation message for incorrect CCV number containing characters other than digits
     * @type {?}
     */
    PaymentCardComponent.prototype.ccvContainsLettersTxt;
    /**
     * Validation message for expired card
     * @type {?}
     */
    PaymentCardComponent.prototype.cardExpiredTxt;
    /**
     * Switch validation of the payment card number
     * @type {?}
     */
    PaymentCardComponent.prototype.validateCCNum;
    /**
     * Switch validation of the payment card holder
     * @type {?}
     */
    PaymentCardComponent.prototype.validateCardHolder;
    /**
     * Switch validation of the payment card expiration month
     * @type {?}
     */
    PaymentCardComponent.prototype.validateExpirationMonth;
    /**
     * Switch validation of the payment card expiration year
     * @type {?}
     */
    PaymentCardComponent.prototype.validateExpirationYear;
    /**
     * Switch validation of the payment card expiration
     * @type {?}
     */
    PaymentCardComponent.prototype.validateCardExpiration;
    /**
     * Switch validation of the payment card CCV number
     * @type {?}
     */
    PaymentCardComponent.prototype.validateCCV;
    /**
     * EventEmitter for payment card object
     * @type {?}
     */
    PaymentCardComponent.prototype.formSaved;
    /**
     * @type {?}
     * @private
     */
    PaymentCardComponent.prototype._ccService;
    /**
     * @type {?}
     * @private
     */
    PaymentCardComponent.prototype._fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBheW1lbnQtY2FyZC8iLCJzb3VyY2VzIjpbImxpYi9wYXltZW50LWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7O0FBV3BFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBOEkvQixZQUFvQixVQUE4QixFQUFVLEdBQWdCO1FBQXhELGVBQVUsR0FBVixVQUFVLENBQW9CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYTs7OztRQXJJckUsV0FBTSxHQUFrQixFQUFFLENBQUM7Ozs7UUFLM0IsVUFBSyxHQUFrQixFQUFFLENBQUM7Ozs7UUFNMUIsb0JBQWUsR0FBSSw0QkFBNEIsQ0FBQzs7OztRQU1oRCxxQkFBZ0IsR0FBSSw0QkFBNEIsQ0FBQzs7OztRQU1qRCxvQkFBZSxHQUFJLDJCQUEyQixDQUFDOzs7O1FBTS9DLDRCQUF1QixHQUFJLHVDQUF1QyxDQUFDOzs7O1FBTW5FLDRCQUF1QixHQUFJLDBCQUEwQixDQUFDOzs7O1FBTXRELHlCQUFvQixHQUFJLDZCQUE2QixDQUFDOzs7O1FBTXRELHlCQUFvQixHQUFJLGdDQUFnQyxDQUFDOzs7O1FBTXpELDhCQUF5QixHQUFJLDJCQUEyQixDQUFDOzs7O1FBTXpELDZCQUF3QixHQUFJLDRCQUE0QixDQUFDOzs7O1FBTXpELGtCQUFhLEdBQUksWUFBWSxDQUFDOzs7O1FBTTlCLHNCQUFpQixHQUFJLGdCQUFnQixDQUFDOzs7O1FBTXRDLHFCQUFnQixHQUFJLGVBQWUsQ0FBQzs7OztRQU1wQywwQkFBcUIsR0FBSSxvQ0FBb0MsQ0FBQzs7OztRQU05RCxtQkFBYyxHQUFJLGVBQWUsQ0FBQzs7OztRQU1sQyxrQkFBYSxHQUFJLElBQUksQ0FBQzs7OztRQU10Qix1QkFBa0IsR0FBSSxJQUFJLENBQUM7Ozs7UUFNM0IsNEJBQXVCLEdBQUksSUFBSSxDQUFDOzs7O1FBTWhDLDJCQUFzQixHQUFJLElBQUksQ0FBQzs7OztRQU0vQiwyQkFBc0IsR0FBSSxJQUFJLENBQUM7Ozs7UUFNL0IsZ0JBQVcsR0FBSSxJQUFJLENBQUM7Ozs7UUFNcEIsY0FBUyxHQUErQixJQUFJLFlBQVksRUFBZSxDQUFDO0lBRUEsQ0FBQzs7OztJQUV6RSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUtPLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0MsQ0FBQzs7Ozs7O0lBS08sU0FBUztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQzFCO1lBQ0UsVUFBVSxFQUFFO2dCQUNWLEVBQUU7Z0JBQ0YsVUFBVSxDQUFDLE9BQU8sQ0FBQztvQkFDakIsVUFBVSxDQUFDLFFBQVE7b0JBQ25CLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO29CQUN4QixVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztvQkFDeEIsYUFBYSxDQUFDLFdBQVc7b0JBQ3pCLGFBQWEsQ0FBQyxRQUFRO2lCQUN2QixDQUFDO2FBQ0g7WUFDRCxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckYsZUFBZSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDMUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDekMsR0FBRyxFQUFFO2dCQUNILEVBQUU7Z0JBQ0YsVUFBVSxDQUFDLE9BQU8sQ0FBQztvQkFDakIsVUFBVSxDQUFDLFFBQVE7b0JBQ25CLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUN2QixVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsYUFBYSxDQUFDLFdBQVc7aUJBQzFCLENBQUM7YUFDSDtTQUNGLEVBQ0Q7WUFDRSxTQUFTLEVBQUUsYUFBYSxDQUFDLFVBQVU7U0FDcEMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBS00sV0FBVyxDQUFDLEtBQWE7UUFDOUIsT0FBTyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFLTSxhQUFhOztjQUNaLFdBQVcsR0FBaUIsbUJBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUE7UUFDaEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBbk5GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQix5blJBQTRDO2dCQUU1QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUFWUSxrQkFBa0I7WUFMbEIsV0FBVzs7OzhCQW1DakIsS0FBSzsrQkFNTCxLQUFLOzhCQU1MLEtBQUs7c0NBTUwsS0FBSztzQ0FNTCxLQUFLO21DQU1MLEtBQUs7bUNBTUwsS0FBSzt3Q0FNTCxLQUFLO3VDQU1MLEtBQUs7NEJBTUwsS0FBSztnQ0FNTCxLQUFLOytCQU1MLEtBQUs7b0NBTUwsS0FBSzs2QkFNTCxLQUFLOzRCQU1MLEtBQUs7aUNBTUwsS0FBSztzQ0FNTCxLQUFLO3FDQU1MLEtBQUs7cUNBTUwsS0FBSzswQkFNTCxLQUFLO3dCQU1MLE1BQU07Ozs7Ozs7SUF2SVAsc0NBQXlCOzs7OztJQUt6QixzQ0FBa0M7Ozs7O0lBS2xDLHFDQUFpQzs7Ozs7SUFLakMsK0NBQ3VEOzs7OztJQUt2RCxnREFDd0Q7Ozs7O0lBS3hELCtDQUNzRDs7Ozs7SUFLdEQsdURBQzBFOzs7OztJQUsxRSx1REFDNkQ7Ozs7O0lBSzdELG9EQUM2RDs7Ozs7SUFLN0Qsb0RBQ2dFOzs7OztJQUtoRSx5REFDZ0U7Ozs7O0lBS2hFLHdEQUNnRTs7Ozs7SUFLaEUsNkNBQ3FDOzs7OztJQUtyQyxpREFDNkM7Ozs7O0lBSzdDLGdEQUMyQzs7Ozs7SUFLM0MscURBQ3FFOzs7OztJQUtyRSw4Q0FDeUM7Ozs7O0lBS3pDLDZDQUM2Qjs7Ozs7SUFLN0Isa0RBQ2tDOzs7OztJQUtsQyx1REFDdUM7Ozs7O0lBS3ZDLHNEQUNzQzs7Ozs7SUFLdEMsc0RBQ3NDOzs7OztJQUt0QywyQ0FDMkI7Ozs7O0lBSzNCLHlDQUMrRTs7Ozs7SUFFbkUsMENBQXNDOzs7OztJQUFFLG1DQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBDYXJkVmFsaWRhdG9yIH0gZnJvbSAnLi92YWxpZGF0b3IvY2FyZC12YWxpZGF0b3InO1xuaW1wb3J0IHsgSUNhcmREZXRhaWxzIH0gZnJvbSAnLi9kb21haW4vaS1jYXJkLWRldGFpbHMnO1xuaW1wb3J0IHsgQ2FyZERldGFpbHMgfSBmcm9tICcuL2RvbWFpbi9jYXJkLWRldGFpbHMnO1xuaW1wb3J0IHsgUGF5bWVudENhcmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlL3BheW1lbnQtY2FyZC5zZXJ2aWNlJztcblxuLyoqXG4gKiBOZ1BheW1lbnRDYXJkIHdpdGhvdXQgYW55IGRlcGVuZGVuY2llcyBvdGhlciB0aGVuIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctcGF5bWVudC1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnQtY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BheW1lbnQtY2FyZC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50Q2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBGb3JtR3JvdXAgYXZhaWxhYmxlIHB1YmxpY2x5XG4gICAqL1xuICBwdWJsaWMgY2NGb3JtOiBGb3JtR3JvdXA7XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgbW9udGhzXG4gICAqL1xuICBwdWJsaWMgbW9udGhzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgeWVhcnNcbiAgICovXG4gIHB1YmxpYyB5ZWFyczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuXG4gIC8qKlxuICAgKiBWYWxpZGF0aW9uIG1lc3NhZ2UgZm9yIG1pc3NpbmcgcGF5bWVudCBjYXJkIG51bWJlclxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGNjTnVtTWlzc2luZ1R4dD8gPSAnTnVtw6lybyBkZSBjYXJ0ZSBlc3QgcmVxdWlzJztcblxuICAvKipcbiAgICogVmFsaWRhdGlvbiBtZXNzYWdlIGZvciB0b28gc2hvcnQgcGF5bWVudCBjYXJkIG51bWJlclxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGNjTnVtVG9vU2hvcnRUeHQ/ID0gJ051bcOpcm8gZGUgY2FydGUgdHJvcCBjb3VydCc7XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRpb24gbWVzc2FnZSBmb3IgdG9vIGxvbmcgcGF5bWVudCBjYXJkIG51bWJlclxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGNjTnVtVG9vTG9uZ1R4dD8gPSAnTnVtw6lybyBkZSBjYXJ0ZSB0cm9wIGxvbmcnO1xuXG4gIC8qKlxuICAgKiBWYWxpZGF0aW9uIG1lc3NhZ2UgZm9yIHBheW1lbnQgY2FyZCBudW1iZXIgdGhhdCBjb250YWlucyBjaGFyYWN0ZXJzIG90aGVyIHRoYW4gZGlnaXRzXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgY2NOdW1Db250YWluc0xldHRlcnNUeHQ/ID0gJ051bcOpcm8gZG9pdCBjb250ZW5pciBxdWUgZGVzIGNoaWZmcmVzJztcblxuICAvKipcbiAgICogVmFsaWRhdGlvbiBtZXNzYWdlIGZvciBpbnZhbGlkIHBheW1lbnQgY2FyZCAgbnVtYmVyIChMdWhuJ3MgdmFsaWRhdGlvbilcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjY051bUNoZWNrc3VtSW52YWxpZFR4dD8gPSAnTnVtw6lybyBkZSBjYXJ0ZSBpbnZhbGlkZSc7XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRpb24gbWVzc2FnZSBmb3IgbWlzc2luZyBjYXJkIGhvbGRlciBuYW1lXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgY2FyZEhvbGRlck1pc3NpbmdUeHQ/ID0gJ05vbSBkdSB0aXR1bGFpcmUgZXN0IHJlcXVpcyc7XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRpb24gbWVzc2FnZSBmb3IgdG9vIGxvbmcgY2FyZCBob2xkZXIgbmFtZVxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGNhcmRIb2xkZXJUb29Mb25nVHh0PyA9ICdOb20gZHUgdGl0dWxhaXJlIGVzdCB0cm9wIGxvbmcnO1xuXG4gIC8qKlxuICAgKiBWYWxpZGF0aW9uIG1lc3NhZ2UgZm9yIG1pc3NpbmcgZXhwaXJhdGlvbiBtb250aFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGV4cGlyYXRpb25Nb250aE1pc3NpbmdUeHQ/ID0gXCJNb2lzIGRgJ2V4cGlyYXRpb24gcmVxdWlzXCI7XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRpb24gbWVzc2FnZSBmb3IgbWlzc2luZyBleHBpcmF0aW9uIHllYXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBleHBpcmF0aW9uWWVhck1pc3NpbmdUeHQ/ID0gXCJBbm7DqWUgZGAnZXhwaXJhdGlvbiByZXF1aXNcIjtcblxuICAvKipcbiAgICogVmFsaWRhdGlvbiBtZXNzYWdlIGZvciBtaXNzaW5nIENDViBudW1iZXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjY3ZNaXNzaW5nVHh0PyA9ICdDQ1YgcmVxdWlzJztcblxuICAvKipcbiAgICogVmFsaWRhdGlvbiBtZXNzYWdlIGZvciB0b28gc2hvcnQgQ0NWIG51bWJlclxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGNjdk51bVRvb1Nob3J0VHh0PyA9ICdDQ1YgdHJvcCBjb3VydCc7XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRpb24gbWVzc2FnZSBmb3IgdG9vIGxvbmcgQ0NWIG51bWJlclxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGNjdk51bVRvb0xvbmdUeHQ/ID0gJ0NDViB0cm9wIGxvbmcnO1xuXG4gIC8qKlxuICAgKiBWYWxpZGF0aW9uIG1lc3NhZ2UgZm9yIGluY29ycmVjdCBDQ1YgbnVtYmVyIGNvbnRhaW5pbmcgY2hhcmFjdGVycyBvdGhlciB0aGFuIGRpZ2l0c1xuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGNjdkNvbnRhaW5zTGV0dGVyc1R4dD8gPSAnQ0NWIGRvaXQgY29udGVuaXIgcXVlIGRlcyBjaGlmZnJlcyc7XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRpb24gbWVzc2FnZSBmb3IgZXhwaXJlZCBjYXJkXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgY2FyZEV4cGlyZWRUeHQ/ID0gJ0NhcnRlIGV4cGlyw6llJztcblxuICAvKipcbiAgICogU3dpdGNoIHZhbGlkYXRpb24gb2YgdGhlIHBheW1lbnQgY2FyZCBudW1iZXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB2YWxpZGF0ZUNDTnVtPyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFN3aXRjaCB2YWxpZGF0aW9uIG9mIHRoZSBwYXltZW50IGNhcmQgaG9sZGVyXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgdmFsaWRhdGVDYXJkSG9sZGVyPyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFN3aXRjaCB2YWxpZGF0aW9uIG9mIHRoZSBwYXltZW50IGNhcmQgZXhwaXJhdGlvbiBtb250aFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHZhbGlkYXRlRXhwaXJhdGlvbk1vbnRoPyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFN3aXRjaCB2YWxpZGF0aW9uIG9mIHRoZSBwYXltZW50IGNhcmQgZXhwaXJhdGlvbiB5ZWFyXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgdmFsaWRhdGVFeHBpcmF0aW9uWWVhcj8gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBTd2l0Y2ggdmFsaWRhdGlvbiBvZiB0aGUgcGF5bWVudCBjYXJkIGV4cGlyYXRpb25cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB2YWxpZGF0ZUNhcmRFeHBpcmF0aW9uPyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFN3aXRjaCB2YWxpZGF0aW9uIG9mIHRoZSBwYXltZW50IGNhcmQgQ0NWIG51bWJlclxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHZhbGlkYXRlQ0NWPyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEV2ZW50RW1pdHRlciBmb3IgcGF5bWVudCBjYXJkIG9iamVjdFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBmb3JtU2F2ZWQ6IEV2ZW50RW1pdHRlcjxJQ2FyZERldGFpbHM+ID0gbmV3IEV2ZW50RW1pdHRlcjxDYXJkRGV0YWlscz4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jY1NlcnZpY2U6IFBheW1lbnRDYXJkU2VydmljZSwgcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xuICAgIHRoaXMuYXNzaWduRGF0ZVZhbHVlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBvcHVsYXRlIG1vbnRocyBhbmQgeWVhcnNcbiAgICovXG4gIHByaXZhdGUgYXNzaWduRGF0ZVZhbHVlcygpOiB2b2lkIHtcbiAgICB0aGlzLm1vbnRocyA9IFBheW1lbnRDYXJkU2VydmljZS5nZXRNb250aHMoKTtcbiAgICB0aGlzLnllYXJzID0gUGF5bWVudENhcmRTZXJ2aWNlLmdldFllYXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgcmVhY3RpdmUgZm9ybVxuICAgKi9cbiAgcHJpdmF0ZSBidWlsZEZvcm0oKTogdm9pZCB7XG4gICAgdGhpcy5jY0Zvcm0gPSB0aGlzLl9mYi5ncm91cChcbiAgICAgIHtcbiAgICAgICAgY2FyZE51bWJlcjogW1xuICAgICAgICAgICcnLFxuICAgICAgICAgIFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoMTIpLFxuICAgICAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTkpLFxuICAgICAgICAgICAgQ2FyZFZhbGlkYXRvci5udW1iZXJzT25seSxcbiAgICAgICAgICAgIENhcmRWYWxpZGF0b3IuY2hlY2tzdW0sXG4gICAgICAgICAgXSksXG4gICAgICAgIF0sXG4gICAgICAgIGNhcmRIb2xkZXI6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1heExlbmd0aCgyMildKV0sXG4gICAgICAgIGV4cGlyYXRpb25Nb250aDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgZXhwaXJhdGlvblllYXI6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIGNjdjogW1xuICAgICAgICAgICcnLFxuICAgICAgICAgIFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksXG4gICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCg0KSxcbiAgICAgICAgICAgIENhcmRWYWxpZGF0b3IubnVtYmVyc09ubHksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWxpZGF0b3I6IENhcmRWYWxpZGF0b3IuZXhwaXJhdGlvbixcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgcGF5bWVudCBjYXJkIHR5cGUgYmFzZWQgb24gcGF5bWVudCBjYXJkIG51bWJlclxuICAgKi9cbiAgcHVibGljIGdldENhcmRUeXBlKGNjTnVtOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gUGF5bWVudENhcmRTZXJ2aWNlLmdldENhcmRUeXBlKGNjTnVtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiB0aGF0IGVtaXRzIHBheW1lbnQgY2FyZCBkZXRhaWxzIGFmdGVyIHVzZXIgY2xpY2tzIHN1Ym1pdCwgb3IgcHJlc3MgZW50ZXJcbiAgICovXG4gIHB1YmxpYyBlbWl0U2F2ZWRDYXJkKCk6IHZvaWQge1xuICAgIGNvbnN0IGNhcmREZXRhaWxzOiBJQ2FyZERldGFpbHMgPSA8Q2FyZERldGFpbHM+dGhpcy5jY0Zvcm0udmFsdWU7XG4gICAgdGhpcy5mb3JtU2F2ZWQuZW1pdChjYXJkRGV0YWlscyk7XG4gIH1cbn1cbiJdfQ==