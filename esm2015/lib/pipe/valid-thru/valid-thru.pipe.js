/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class ValidThruPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWQtdGhydS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcGF5bWVudC1jYXJkLyIsInNvdXJjZXMiOlsibGliL3BpcGUvdmFsaWQtdGhydS92YWxpZC10aHJ1LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxhQUFhOzs7Ozs7SUFJakIsU0FBUyxDQUFDLEtBQWE7UUFDNUIsT0FBTyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNsRixDQUFDOzs7WUFURixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFdBQVc7YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3ZhbGlkVGhydScsXG59KVxuZXhwb3J0IGNsYXNzIFZhbGlkVGhydVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBtb250aCBhbmQgeWVhciBpbnRvIGNhcmQgZm9ybWF0XG4gICAqL1xuICBwdWJsaWMgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPT09IDcgPyB2YWx1ZS5zdWJzdHIoMCwgMykgKyB2YWx1ZS5zdWJzdHIoNSkgOiAnLyc7XG4gIH1cbn1cbiJdfQ==