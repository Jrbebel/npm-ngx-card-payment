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
var PaymentCardComponent = /** @class */ (function () {
    function PaymentCardComponent(_ccService, _fb) {
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
    PaymentCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.buildForm();
        this.assignDateValues();
    };
    /**
     * Populate months and years
     */
    /**
     * Populate months and years
     * @private
     * @return {?}
     */
    PaymentCardComponent.prototype.assignDateValues = /**
     * Populate months and years
     * @private
     * @return {?}
     */
    function () {
        this.months = PaymentCardService.getMonths();
        this.years = PaymentCardService.getYears();
    };
    /**
     * Build reactive form
     */
    /**
     * Build reactive form
     * @private
     * @return {?}
     */
    PaymentCardComponent.prototype.buildForm = /**
     * Build reactive form
     * @private
     * @return {?}
     */
    function () {
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
    };
    /**
     * Returns payment card type based on payment card number
     */
    /**
     * Returns payment card type based on payment card number
     * @param {?} ccNum
     * @return {?}
     */
    PaymentCardComponent.prototype.getCardType = /**
     * Returns payment card type based on payment card number
     * @param {?} ccNum
     * @return {?}
     */
    function (ccNum) {
        return PaymentCardService.getCardType(ccNum);
    };
    /**
     * Callback function that emits payment card details after user clicks submit, or press enter
     */
    /**
     * Callback function that emits payment card details after user clicks submit, or press enter
     * @return {?}
     */
    PaymentCardComponent.prototype.emitSavedCard = /**
     * Callback function that emits payment card details after user clicks submit, or press enter
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cardDetails = (/** @type {?} */ (this.ccForm.value));
        this.formSaved.emit(cardDetails);
    };
    PaymentCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-payment-card',
                    template: "<section class=\"cc-wrapper\">\r\n  <div class=\"cc-box\">\r\n    <div #ccBoxFlip class=\"cc-box--flip\">\r\n      <div class=\"cc-box__front\">\r\n        <div class=\"cc-box__logo\">\r\n          <p>{{ getCardType(ccNumber.value) | uppercase }}</p>\r\n        </div>\r\n        <div class=\"cc-box__element\">\r\n          <label class=\"cc-form__label\" for=\"cc-card-number-display\"></label>\r\n          <input\r\n            class=\"cc-form__input cc-form__input--transparent cc-form__input--embosed\"\r\n            id=\"cc-card-number-display\"\r\n            aria-label=\"Payment card number\"\r\n            disabled=\"disabled\"\r\n            [value]=\"ccForm.get('cardNumber').value | paymentCardNumber\"\r\n          />\r\n        </div>\r\n        <div class=\"cc-box__element\">\r\n          <label class=\"cc-form__label\" for=\"cc-holder-display\">Num\u00E9ro de carte</label>\r\n          <input\r\n            class=\"cc-form__input cc-form__input--transparent cc-form__input--embosed\"\r\n            id=\"cc-holder-display\"\r\n            aria-label=\"Card holder\"\r\n            disabled=\"disabled\"\r\n            [value]=\"ccForm.get('cardHolder').value | uppercase\"\r\n          />\r\n        </div>\r\n        <div class=\"cc-box__element\">\r\n          <label class=\"cc-form__label\" for=\"cc-valid-date-display\">Exp</label>\r\n          <input\r\n            class=\"cc-form__input cc-form__input--left-align cc-form__input--transparent cc-form__input--embosed\"\r\n            id=\"cc-valid-date-display\"\r\n            aria-label=\"Card holder\"\r\n            disabled=\"disabled\"\r\n            [value]=\"ccForm.get('expirationMonth').value + '/' + ccForm.get('expirationYear').value | validThru\"\r\n          />\r\n        </div>\r\n        <div class=\"cc-box__chip\"></div>\r\n      </div>\r\n      <div class=\"cc-box__back\">\r\n        <div class=\"cc-box__strip\">&nbsp;</div>\r\n        <div class=\"cc-box__element\">\r\n          <input\r\n            class=\"cc-form__input cc-form__input--cursive cc-form__input--right-align\"\r\n            id=\"cc-ccv-display\"\r\n            aria-label=\"CCV\"\r\n            disabled=\"disabled\"\r\n            [value]=\"'CCV: ' + ccForm.get('ccv').value\"\r\n            title=\"CCV\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <form class=\"cc-form\" [formGroup]=\"ccForm\" autocomplete=\"off\">\r\n    <div class=\"cc-form__wrapper--long\">\r\n      <label for=\"cc-number\" class=\"cc-form__label cc-form__label--first\">Num\u00E9ro de carte</label>\r\n      <input\r\n        #ccNumber\r\n        class=\"cc-form__input\"\r\n        id=\"cc-number\"\r\n        aria-label=\"Card number\"\r\n        type=\"text\"\r\n        title=\"Card number\"\r\n        maxlength=\"19\"\r\n        formControlName=\"cardNumber\"\r\n        (focus)=\"ccBoxFlip.classList.remove('hover')\"\r\n      />\r\n      <div\r\n        class=\"cc-form__error\"\r\n        *ngIf=\"validateCCNum && ccForm.get('cardNumber').touched && ccForm.get('cardNumber').hasError('required')\"\r\n      >\r\n        {{ ccNumMissingTxt }}\r\n      </div>\r\n      <div\r\n        class=\"cc-form__error\"\r\n        *ngIf=\"validateCCNum && ccForm.get('cardNumber').touched && ccForm.get('cardNumber').hasError('minlength')\"\r\n      >\r\n        {{ ccNumTooShortTxt }}\r\n      </div>\r\n      <div\r\n        class=\"cc-form__error\"\r\n        *ngIf=\"validateCCNum && ccForm.get('cardNumber').touched && ccForm.get('cardNumber').hasError('maxlength')\"\r\n      >\r\n        {{ ccNumTooLongTxt }}\r\n      </div>\r\n      <div\r\n        class=\"cc-form__error\"\r\n        *ngIf=\"validateCCNum && ccForm.get('cardNumber').touched && ccForm.get('cardNumber').hasError('numbersOnly')\"\r\n      >\r\n        {{ ccNumContainsLettersTxt }}\r\n      </div>\r\n      <div\r\n        class=\"cc-form__error\"\r\n        *ngIf=\"validateCCNum && ccForm.get('cardNumber').touched && ccForm.get('cardNumber').hasError('checksum')\"\r\n      >\r\n        {{ ccNumChecksumInvalidTxt }}\r\n      </div>\r\n    </div>\r\n    <div class=\"cc-form__wrapper--long\">\r\n      <label for=\"cc-holder-name\" class=\"cc-form__label\">Titulaire de la carte </label>\r\n      <input\r\n        class=\"cc-form__input\"\r\n        id=\"cc-holder-name\"\r\n        aria-label=\"Card holder name\"\r\n        type=\"text\"\r\n        title=\"Card holder name\"\r\n        maxlength=\"22\"\r\n        formControlName=\"cardHolder\"\r\n        (focus)=\"ccBoxFlip.classList.remove('hover')\"\r\n      />\r\n      <div\r\n        class=\"cc-form__error\"\r\n        *ngIf=\"validateCardHolder && ccForm.get('cardHolder').touched && ccForm.get('cardHolder').hasError('required')\"\r\n      >\r\n        {{ cardHolderMissingTxt }}\r\n      </div>\r\n      <div\r\n        class=\"cc-form__error\"\r\n        *ngIf=\"validateCardHolder && ccForm.get('cardHolder').touched && ccForm.get('cardHolder').hasError('maxlength')\"\r\n      >\r\n        {{ cardHolderTooLongTxt }}\r\n      </div>\r\n    </div>\r\n    <div class=\"cc-form--inline\">\r\n      <div class=\"cc-form__wrapper cc-form__wrapper--short\">\r\n        <label for=\"cc-expiration-month\" class=\"cc-form__label\">Mois d'expiration</label>\r\n        <select\r\n          id=\"cc-expiration-month\"\r\n          class=\"cc-form__select\"\r\n          aria-label=\"Expiration month\"\r\n          formControlName=\"expirationMonth\"\r\n        >\r\n          <option *ngFor=\"let month of months\" value=\"{{ month }}\" (click)=\"ccBoxFlip.classList.remove('hover')\"\r\n            >{{ month }}\r\n          </option>\r\n        </select>\r\n      </div>\r\n      <div class=\"cc-form__wrapper cc-form__wrapper--short\">\r\n        <label for=\"cc-expiration-year\" class=\"cc-form__label\">Ann\u00E9e d'expiration</label>\r\n        <select\r\n          id=\"cc-expiration-year\"\r\n          class=\"cc-form__select\"\r\n          aria-label=\"Expiration year\"\r\n          formControlName=\"expirationYear\"\r\n        >\r\n          <option *ngFor=\"let year of years\" value=\"{{ year }}\" (click)=\"ccBoxFlip.classList.remove('hover')\"\r\n            >{{ year }}\r\n          </option>\r\n        </select>\r\n      </div>\r\n      <div class=\"cc-form__wrapper cc-form__wrapper--short cc-form__wrapper--last\">\r\n        <label for=\"cc-ccv\" class=\"cc-form__label\">ccv</label>\r\n        <input\r\n          class=\"cc-form__input cc-form__input--short\"\r\n          id=\"cc-ccv\"\r\n          aria-label=\"CCV\"\r\n          type=\"text\"\r\n          title=\"CCV\"\r\n          minlength=\"3\"\r\n          maxlength=\"4\"\r\n          formControlName=\"ccv\"\r\n          (focus)=\"ccBoxFlip.classList.add('hover')\"\r\n        />\r\n      </div>\r\n    </div>\r\n    <div\r\n      class=\"cc-form__error\"\r\n      *ngIf=\"\r\n        validateExpirationMonth &&\r\n        ccForm.get('expirationMonth').touched &&\r\n        ccForm.get('expirationMonth').hasError('required')\r\n      \"\r\n    >\r\n      {{ expirationMonthMissingTxt }}\r\n    </div>\r\n    <div\r\n      class=\"cc-form__error\"\r\n      *ngIf=\"\r\n        validateExpirationMonth &&\r\n        ccForm.get('expirationYear').touched &&\r\n        ccForm.get('expirationYear').hasError('required')\r\n      \"\r\n    >\r\n      {{ expirationYearMissingTxt }}\r\n    </div>\r\n    <div\r\n      class=\"cc-form__error\"\r\n      *ngIf=\"\r\n        validateCardExpiration &&\r\n        ccForm.get('expirationMonth').touched &&\r\n        ccForm.get('expirationYear').touched &&\r\n        ccForm.hasError('expiration')\r\n      \"\r\n    >\r\n      {{ cardExpiredTxt }}\r\n    </div>\r\n    <div\r\n      class=\"cc-form__error\"\r\n      *ngIf=\"validateCCV && ccForm.get('ccv').touched && ccForm.get('ccv').hasError('required')\"\r\n    >\r\n      {{ ccvMissingTxt }}\r\n    </div>\r\n    <div\r\n      class=\"cc-form__error\"\r\n      *ngIf=\"validateCCV && ccForm.get('ccv').touched && ccForm.get('ccv').hasError('minlength')\"\r\n    >\r\n      {{ ccvNumTooShortTxt }}\r\n    </div>\r\n    <div\r\n      class=\"cc-form__error\"\r\n      *ngIf=\"validateCCV && ccForm.get('ccv').touched && ccForm.get('ccv').hasError('maxlength')\"\r\n    >\r\n      {{ ccvNumTooLongTxt }}\r\n    </div>\r\n    <div\r\n      class=\"cc-form__error\"\r\n      *ngIf=\"validateCCV && ccForm.get('ccv').touched && ccForm.get('ccv').hasError('numbersOnly')\"\r\n    >\r\n      {{ ccvContainsLettersTxt }}\r\n    </div>\r\n    <button\r\n      type=\"submit\"\r\n      class=\"cc-form__button cc-form__button--ripple\"\r\n      aria-label=\"submit\"\r\n      (click)=\"emitSavedCard()\"\r\n      (keydown.enter)=\"emitSavedCard()\"\r\n    >\r\n      Payer\r\n    </button>\r\n  </form>\r\n</section>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Inconsolata);.cc-form{align-items:center;display:flex;flex-flow:column;flex-wrap:wrap;height:100%;justify-content:center;width:100%}.cc-form--inline{align-items:inherit;display:inherit;flex-flow:row;flex-wrap:inherit;height:100%;justify-content:flex-end;margin-bottom:5%;width:100%}@media only screen and (max-width:1279px){.cc-form--inline{align-items:inherit;display:inherit;flex-flow:row;flex-wrap:inherit;height:100%;justify-content:flex-end;margin-bottom:5%;width:100%}}@media only screen and (max-width:599px){.cc-form--inline{align-items:center;display:inherit;flex-flow:column;flex-wrap:wrap;height:100%;justify-content:center;width:100%}}input[type=number]{-moz-appearance:textfield}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}@media only screen and (max-width:3000px){.cc-form__wrapper{margin-right:5%;margin-top:5%}.cc-form__wrapper--long{width:60%}.cc-form__wrapper--short{width:15%}.cc-form__wrapper--last{margin-left:5%;margin-right:20%;margin-top:30px}}@media only screen and (max-width:1279px){.cc-form__wrapper{margin-right:5%;margin-top:5%}.cc-form__wrapper--long{width:60%}.cc-form__wrapper--short{width:15%}.cc-form__wrapper--last{margin-left:5%;margin-right:20%}}@media only screen and (max-width:599px){.cc-form__wrapper{margin-right:0;margin-top:0}.cc-form__wrapper--long,.cc-form__wrapper--short{width:80%}.cc-form__wrapper--last{margin-left:0;margin-right:0}}.cc-form__label{color:rgba(0,0,0,.6);display:block;font-family:Inconsolata,Serif,serif;font-size:.7em;font-weight:400;letter-spacing:1px;line-height:10px;margin-bottom:5px;margin-top:5%;text-align:left;text-shadow:none;text-transform:uppercase;width:100%}.cc-form__label--first{margin-top:20%}.cc-form__select{-webkit-appearance:listbox;-moz-appearance:listbox;appearance:listbox}.cc-form__input,.cc-form__select{border:1px solid rgba(0,0,0,.3);border-radius:5px;box-shadow:inset 0 1px 4px rgba(0,0,0,.2);color:#333;display:block;font-size:1.2em;height:38px;margin:0;outline:0;padding:0;text-align:left;width:100%}.cc-form__input--transparent{background:0 0;border:none;border-radius:0;box-shadow:none}.cc-form__input--embosed{color:#fff;font-family:Inconsolata,monospace;font-size:2vw;text-shadow:0 2px 1px rgba(0,0,0,.3)}@media only screen and (max-width:1279px){.cc-form__input--embosed{font-size:2.5vw}}@media only screen and (max-width:599px){.cc-form__input--embosed{font-size:3vw}}.cc-form__input--cursive{font-size:.7em;font-style:italic;left:0;margin:0 auto;position:absolute}.cc-form__input--right-align{padding-right:5%;text-align:right}.cc-form__input--left-align{text-align:left}.cc-form__input:focus,.cc-form__select:focus{border-color:rgba(113,168,102,.9)}.cc-form__error{color:#ff5b5f;font-size:.7em}.cc-form__button{background:rgba(113,168,102,.9);border:0;border-radius:3px;color:#fff;cursor:pointer;margin-bottom:5%;margin-top:1%;outline:0;overflow:hidden;padding:1%;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;width:60%}.cc-form__button:hover{box-shadow:0 6px 8px -3px rgba(0,0,0,.3)}.cc-form__button:focus{background:rgba(85,133,76,.9)}.cc-form__button--ripple{overflow:hidden;position:relative}.cc-form__button--ripple:after{background:rgba(255,255,255,.3);border-radius:80%;content:'';display:block;height:120px;left:50%;margin-left:-50%;margin-top:-60px;position:absolute;top:50%;transform:scale(0);width:100%}.cc-form__button--ripple:not(:active):after{-webkit-animation:2s ease-out button-ripple;animation:2s ease-out button-ripple}@-webkit-keyframes button-ripple{0%{transform:scale(0)}20%{transform:scale(1)}100%{opacity:0;transform:scale(1)}}@keyframes button-ripple{0%{transform:scale(0)}20%{transform:scale(1)}100%{opacity:0;transform:scale(1)}}.cc-wrapper{background-color:#fff;height:100%;margin:0;padding:0;width:100%}.cc-box{height:100px;margin:0 auto;padding:0;position:relative;transform:translateY(-100%);width:70%;z-index:1}@media only screen and (max-width:1279px){.cc-box{transform:translateY(-115%)}}@media only screen and (max-width:599px){.cc-box{transform:translateY(-130%)}}.cc-box--flip{transform-style:preserve-3d;transition:.6s}.cc-box--flip.hover,.cc-box--flip:hover{transform:rotateY(180deg)}.cc-box__element{padding:0;width:80%}.cc-box__logo{align-items:center;color:#fff;display:flex;flex-flow:row nowrap;font-size:1.2em;font-style:italic;font-weight:700;justify-content:flex-end;margin-right:10%;width:100%}.cc-box__strip{background:linear-gradient(135deg,#404040,#1a1a1a);font-size:1.7em;margin:0;padding:0;position:relative;transform:translateY(-90%);width:100%}.cc-box__back,.cc-box__front{align-items:center;-webkit-backface-visibility:hidden;backface-visibility:hidden;background:linear-gradient(135deg,#bd6772,#53223f);border-radius:15px;display:flex;flex-direction:column;flex-flow:column nowrap;height:250px;justify-content:center;left:0;position:absolute;top:0;width:100%}.cc-box__front{transform:rotateY(0)}.cc-box__back{transform:rotateY(180deg)}.ng-invalid.ng-touched{border-color:#ff5b5f}.ng-valid.ng-touched{border-color:#b2b2b2}"]
                }] }
    ];
    /** @nocollapse */
    PaymentCardComponent.ctorParameters = function () { return [
        { type: PaymentCardService },
        { type: FormBuilder }
    ]; };
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
    return PaymentCardComponent;
}());
export { PaymentCardComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBheW1lbnQtY2FyZC8iLCJzb3VyY2VzIjpbImxpYi9wYXltZW50LWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7O0FBS3BFO0lBb0pFLDhCQUFvQixVQUE4QixFQUFVLEdBQWdCO1FBQXhELGVBQVUsR0FBVixVQUFVLENBQW9CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYTs7OztRQXJJckUsV0FBTSxHQUFrQixFQUFFLENBQUM7Ozs7UUFLM0IsVUFBSyxHQUFrQixFQUFFLENBQUM7Ozs7UUFNMUIsb0JBQWUsR0FBSSw0QkFBNEIsQ0FBQzs7OztRQU1oRCxxQkFBZ0IsR0FBSSw0QkFBNEIsQ0FBQzs7OztRQU1qRCxvQkFBZSxHQUFJLDJCQUEyQixDQUFDOzs7O1FBTS9DLDRCQUF1QixHQUFJLHVDQUF1QyxDQUFDOzs7O1FBTW5FLDRCQUF1QixHQUFJLDBCQUEwQixDQUFDOzs7O1FBTXRELHlCQUFvQixHQUFJLDZCQUE2QixDQUFDOzs7O1FBTXRELHlCQUFvQixHQUFJLGdDQUFnQyxDQUFDOzs7O1FBTXpELDhCQUF5QixHQUFJLDJCQUEyQixDQUFDOzs7O1FBTXpELDZCQUF3QixHQUFJLDRCQUE0QixDQUFDOzs7O1FBTXpELGtCQUFhLEdBQUksWUFBWSxDQUFDOzs7O1FBTTlCLHNCQUFpQixHQUFJLGdCQUFnQixDQUFDOzs7O1FBTXRDLHFC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QU1MLEtBQUs7NENBTUwsS0FBSzsyQ0FNTCxLQUFLO2dDQU1MLEtBQUs7b0NBTUwsS0FBSzttQ0FNTCxLQUFLO3dDQU1MLEtBQUs7aUNBTUwsS0FBSztnQ0FNTCxLQUFLO3FDQU1MLEtBQUs7MENBTUwsS0FBSzt5Q0FNTCxLQUFLO3lDQU1MLEtBQUs7OEJBTUwsS0FBSzs0QkFNTCxNQUFNOztJQW1FVCwyQkFBQztDQUFBLEFBcE5ELElBb05DO1NBOU1ZLG9CQUFvQjs7Ozs7O0lBSS9CLHNDQUF5Qjs7Ozs7SUFLekIsc0NBQWtDOzs7OztJQUtsQyxxQ0FBaUM7Ozs7O0lBS2pDLCtDQUN1RDs7Ozs7SUFLdkQsZ0RBQ3dEOzs7OztJQUt4RCwrQ0FDc0Q7Ozs7O0lBS3RELHVEQUMwRTs7Ozs7SUFLMUUsdURBQzZEOzs7OztJQUs3RCxvREFDNkQ7Ozs7O0lBSzdELG9EQUNnRTs7Ozs7SUFLaEUseURBQ2dFOzs7OztJQUtoRSx3REFDZ0U7Ozs7O0lBS2hFLDZDQUNxQzs7Ozs7SUFLckMsaURBQzZDOzs7OztJQUs3QyxnREFDMkM7Ozs7O0lBSzNDLHFEQUNxRTs7Ozs7SUFLckUsOENBQ3lDOzs7OztJQUt6Qyw2Q0FDNkI7Ozs7O0lBSzdCLGtEQUNrQzs7Ozs7SUFLbEMsdURBQ3VDOzs7OztJQUt2QyxzREFDc0M7Ozs7O0lBS3RDLHNEQUNzQzs7Ozs7SUFLdEMsMkNBQzJCOzs7OztJQUszQix5Q0FDK0U7Ozs7O0lBRW5FLDBDQUFzQzs7Ozs7SUFBRSxtQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ2FyZFZhbGlkYXRvciB9IGZyb20gJy4vdmFsaWRhdG9yL2NhcmQtdmFsaWRhdG9yJztcbmltcG9ydCB7IElDYXJkRGV0YWlscyB9IGZyb20gJy4vZG9tYWluL2ktY2FyZC1kZXRhaWxzJztcbmltcG9ydCB7IENhcmREZXRhaWxzIH0gZnJvbSAnLi9kb21haW4vY2FyZC1kZXRhaWxzJztcbmltcG9ydCB7IFBheW1lbnRDYXJkU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9wYXltZW50LWNhcmQuc2VydmljZSc7XG5cbi8qKlxuICogTmdQYXltZW50Q2FyZCB3aXRob3V0IGFueSBkZXBlbmRlbmNpZXMgb3RoZXIgdGhlbiBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLXBheW1lbnQtY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXltZW50LWNhcmQuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogRm9ybUdyb3VwIGF2YWlsYWJsZSBwdWJsaWNseVxuICAgKi9cbiAgcHVibGljIGNjRm9ybTogRm9ybUdyb3VwO1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIG1vbnRoc1xuICAgKi9cbiAgcHVibGljIG1vbnRoczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIHllYXJzXG4gICAqL1xuICBwdWJsaWMgeWVhcnM6IEFycmF5PG51bWJlcj4gPSBbXTtcblxuICAvKipcbiAgICogVmFsaWRhdGlvbiBtZXNzYWdlIGZvciBtaXNzaW5nIHBheW1lbnQgY2FyZCBudW1iZXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjY051bU1pc3NpbmdUeHQ/ID0gJ051bcOpcm8gZGUgY2FydGUgZXN0IHJlcXVpcyc7XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRpb24gbWVzc2FnZSBmb3IgdG9vIHNob3J0IHBheW1lbnQgY2FyZCBudW1iZXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjY051bVRvb1Nob3J0VHh0PyA9ICdOdW3DqXJvIGRlIGNhcnRlIHRyb3AgY291cnQnO1xuXG4gIC8qKlxuICAgKiBWYWxpZGF0aW9uIG1lc3NhZ2UgZm9yIHRvbyBsb25nIHBheW1lbnQgY2FyZCBudW1iZXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjY051bVRvb0xvbmdUeHQ/ID0gJ051bcOpcm8gZGUgY2FydGUgdHJvcCBsb25nJztcblxuICAvKipcbiAgICogVmFsaWRhdGlvbiBtZXNzYWdlIGZvciBwYXltZW50IGNhcmQgbnVtYmVyIHRoYXQgY29udGFpbnMgY2hhcmFjdGVycyBvdGhlciB0aGFuIGRpZ2l0c1xuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGNjTnVtQ29udGFpbnNMZXR0ZXJzVHh0PyA9ICdOdW3DqXJvIGRvaXQgY29udGVuaXIgcXVlIGRlcyBjaGlmZnJlcyc7XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRpb24gbWVzc2FnZSBmb3IgaW52YWxpZCBwYXltZW50IGNhcmQgIG51bWJlciAoTHVobidzIHZhbGlkYXRpb24pXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgY2NOdW1DaGVja3N1bUludmFsaWRUeHQ/ID0gJ051bcOpcm8gZGUgY2FydGUgaW52YWxpZGUnO1xuXG4gIC8qKlxuICAgKiBWYWxpZGF0aW9uIG1lc3NhZ2UgZm9yIG1pc3NpbmcgY2FyZCBob2xkZXIgbmFtZVxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGNhcmRIb2xkZXJNaXNzaW5nVHh0PyA9ICdOb20gZHUgdGl0dWxhaXJlIGVzdCByZXF1aXMnO1xuXG4gIC8qKlxuICAgKiBWYWxpZGF0aW9uIG1lc3NhZ2UgZm9yIHRvbyBsb25nIGNhcmQgaG9sZGVyIG5hbWVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjYXJkSG9sZGVyVG9vTG9uZ1R4dD8gPSAnTm9tIGR1IHRpdHVsYWlyZSBlc3QgdHJvcCBsb25nJztcblxuICAvKipcbiAgICogVmFsaWRhdGlvbiBtZXNzYWdlIGZvciBtaXNzaW5nIGV4cGlyYXRpb24gbW9udGhcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBleHBpcmF0aW9uTW9udGhNaXNzaW5nVHh0PyA9IFwiTW9pcyBkYCdleHBpcmF0aW9uIHJlcXVpc1wiO1xuXG4gIC8qKlxuICAgKiBWYWxpZGF0aW9uIG1lc3NhZ2UgZm9yIG1pc3NpbmcgZXhwaXJhdGlvbiB5ZWFyXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZXhwaXJhdGlvblllYXJNaXNzaW5nVHh0PyA9IFwiQW5uw6llIGRgJ2V4cGlyYXRpb24gcmVxdWlzXCI7XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRpb24gbWVzc2FnZSBmb3IgbWlzc2luZyBDQ1YgbnVtYmVyXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgY2N2TWlzc2luZ1R4dD8gPSAnQ0NWIHJlcXVpcyc7XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRpb24gbWVzc2FnZSBmb3IgdG9vIHNob3J0IENDViBudW1iZXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjY3ZOdW1Ub29TaG9ydFR4dD8gPSAnQ0NWIHRyb3AgY291cnQnO1xuXG4gIC8qKlxuICAgKiBWYWxpZGF0aW9uIG1lc3NhZ2UgZm9yIHRvbyBsb25nIENDViBudW1iZXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjY3ZOdW1Ub29Mb25nVHh0PyA9ICdDQ1YgdHJvcCBsb25nJztcblxuICAvKipcbiAgICogVmFsaWRhdGlvbiBtZXNzYWdlIGZvciBpbmNvcnJlY3QgQ0NWIG51bWJlciBjb250YWluaW5nIGNoYXJhY3RlcnMgb3RoZXIgdGhhbiBkaWdpdHNcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjY3ZDb250YWluc0xldHRlcnNUeHQ/ID0gJ0NDViBkb2l0IGNvbnRlbmlyIHF1ZSBkZXMgY2hpZmZyZXMnO1xuXG4gIC8qKlxuICAgKiBWYWxpZGF0aW9uIG1lc3NhZ2UgZm9yIGV4cGlyZWQgY2FyZFxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGNhcmRFeHBpcmVkVHh0PyA9ICdDYXJ0ZSBleHBpcsOpZSc7XG5cbiAgLyoqXG4gICAqIFN3aXRjaCB2YWxpZGF0aW9uIG9mIHRoZSBwYXltZW50IGNhcmQgbnVtYmVyXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgdmFsaWRhdGVDQ051bT8gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBTd2l0Y2ggdmFsaWRhdGlvbiBvZiB0aGUgcGF5bWVudCBjYXJkIGhvbGRlclxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHZhbGlkYXRlQ2FyZEhvbGRlcj8gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBTd2l0Y2ggdmFsaWRhdGlvbiBvZiB0aGUgcGF5bWVudCBjYXJkIGV4cGlyYXRpb24gbW9udGhcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB2YWxpZGF0ZUV4cGlyYXRpb25Nb250aD8gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBTd2l0Y2ggdmFsaWRhdGlvbiBvZiB0aGUgcGF5bWVudCBjYXJkIGV4cGlyYXRpb24geWVhclxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHZhbGlkYXRlRXhwaXJhdGlvblllYXI/ID0gdHJ1ZTtcblxuICAvKipcbiAgICogU3dpdGNoIHZhbGlkYXRpb24gb2YgdGhlIHBheW1lbnQgY2FyZCBleHBpcmF0aW9uXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgdmFsaWRhdGVDYXJkRXhwaXJhdGlvbj8gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBTd2l0Y2ggdmFsaWRhdGlvbiBvZiB0aGUgcGF5bWVudCBjYXJkIENDViBudW1iZXJcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB2YWxpZGF0ZUNDVj8gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBFdmVudEVtaXR0ZXIgZm9yIHBheW1lbnQgY2FyZCBvYmplY3RcbiAgICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgZm9ybVNhdmVkOiBFdmVudEVtaXR0ZXI8SUNhcmREZXRhaWxzPiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FyZERldGFpbHM+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2NTZXJ2aWNlOiBQYXltZW50Q2FyZFNlcnZpY2UsIHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcikge31cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5idWlsZEZvcm0oKTtcbiAgICB0aGlzLmFzc2lnbkRhdGVWYWx1ZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQb3B1bGF0ZSBtb250aHMgYW5kIHllYXJzXG4gICAqL1xuICBwcml2YXRlIGFzc2lnbkRhdGVWYWx1ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5tb250aHMgPSBQYXltZW50Q2FyZFNlcnZpY2UuZ2V0TW9udGhzKCk7XG4gICAgdGhpcy55ZWFycyA9IFBheW1lbnRDYXJkU2VydmljZS5nZXRZZWFycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHJlYWN0aXZlIGZvcm1cbiAgICovXG4gIHByaXZhdGUgYnVpbGRGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMuY2NGb3JtID0gdGhpcy5fZmIuZ3JvdXAoXG4gICAgICB7XG4gICAgICAgIGNhcmROdW1iZXI6IFtcbiAgICAgICAgICAnJyxcbiAgICAgICAgICBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDEyKSxcbiAgICAgICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDE5KSxcbiAgICAgICAgICAgIENhcmRWYWxpZGF0b3IubnVtYmVyc09ubHksXG4gICAgICAgICAgICBDYXJkVmFsaWRhdG9yLmNoZWNrc3VtLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdLFxuICAgICAgICBjYXJkSG9sZGVyOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMjIpXSldLFxuICAgICAgICBleHBpcmF0aW9uTW9udGg6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgIGV4cGlyYXRpb25ZZWFyOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICBjY3Y6IFtcbiAgICAgICAgICAnJyxcbiAgICAgICAgICBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLFxuICAgICAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoNCksXG4gICAgICAgICAgICBDYXJkVmFsaWRhdG9yLm51bWJlcnNPbmx5LFxuICAgICAgICAgIF0pLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsaWRhdG9yOiBDYXJkVmFsaWRhdG9yLmV4cGlyYXRpb24sXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHBheW1lbnQgY2FyZCB0eXBlIGJhc2VkIG9uIHBheW1lbnQgY2FyZCBudW1iZXJcbiAgICovXG4gIHB1YmxpYyBnZXRDYXJkVHlwZShjY051bTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIFBheW1lbnRDYXJkU2VydmljZS5nZXRDYXJkVHlwZShjY051bSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBlbWl0cyBwYXltZW50IGNhcmQgZGV0YWlscyBhZnRlciB1c2VyIGNsaWNrcyBzdWJtaXQsIG9yIHByZXNzIGVudGVyXG4gICAqL1xuICBwdWJsaWMgZW1pdFNhdmVkQ2FyZCgpOiB2b2lkIHtcbiAgICBjb25zdCBjYXJkRGV0YWlsczogSUNhcmREZXRhaWxzID0gPENhcmREZXRhaWxzPnRoaXMuY2NGb3JtLnZhbHVlO1xuICAgIHRoaXMuZm9ybVNhdmVkLmVtaXQoY2FyZERldGFpbHMpO1xuICB9XG59XG4iXX0=