import { Directive, ElementRef, HostListener, Input, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[ngxNumberInput]'
})
export class NgxNumberInputDirective {

    @Input('ngxNumberInput') numberPattern = '';
    /**
     * Value before the decimal point specifies the number of digits before decimal and value after the decimal specifies the number of digits after decimal.
     * Example: 7.3 (Before decimal 7 digits & 3 digits after decimal)
     */

    constructor(private el: ElementRef, @Optional() private control: NgControl) { }

    @HostListener("keydown", ["$event"])
    onKeyDown(event: KeyboardEvent) {
        this.execute(this.el.nativeElement.value);
    }

    @HostListener("paste", ["$event"])
    onPaste(event: ClipboardEvent) {
        this.execute(this.el.nativeElement.value);
    }

    private checkValue(value: string) {
        let [length, precision] = this.numberPattern.split('.'),
            regExpString = `^(\\+|\\-)?([\\d]{0,${+length}})((\\.{1})([\\d]{1,${+precision}})?)?$`;
        return String(value).match(new RegExp(regExpString));
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
