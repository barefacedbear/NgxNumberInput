import { Directive, ElementRef, HostListener, Input, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

/**
 * @description Directive class to format the number entered by user
 * @author Barefaced Bear
*/
@Directive({
    selector: '[ngxNumberInput]'
})
export class NgxNumberInputDirective {

    constructor(private el: ElementRef, @Optional() private control: NgControl) { }

    /**
     * @description Value before the decimal point specifies the number of digits before decimal and value after the decimal specifies the number of digits after decimal.
     * Example: 7.3 (Before decimal 7 digits & 3 digits after decimal)
     * Possible type of patterns allowed: X, X.X
    */
    @Input('ngxNumberInput') numberPattern = '';

    @HostListener("keydown", ["$event"])
    onKeyDown = (event: KeyboardEvent) => this.execute(this.el.nativeElement.value);

    @HostListener("paste", ["$event"])
    onPaste = (event: ClipboardEvent) => this.execute(this.el.nativeElement.value);

    private checkValue(value: string): RegExpMatchArray {
        let [length, scale] = this.numberPattern.split('.'), regExpString = `^(\\+|\\-)?([\\d]{0,${+length}})`,
        checkPattern: RegExpMatchArray = null;
        if (+scale > 0) { regExpString += `((\\.{1})([\\d]{1,${+scale}})?)` }
        checkPattern = String(value).match(new RegExp(`${regExpString}?$`));
        return checkPattern;
    }

    private execute(oldValue: string) {
        setTimeout(() => {
            let currentValue: string = this.el.nativeElement.value;
            if (currentValue && !this.checkValue(currentValue)) {
                this.control && this.control.control.patchValue(+oldValue);
                this.el.nativeElement.value = oldValue;
            }
        });
    }
}
