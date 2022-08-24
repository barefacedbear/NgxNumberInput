import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { NgxNumberInputDirective } from "./ngx-number-input.directive";

@Component({ template: `` })
class TestComponent { }

describe('NgxNumberInputDirectiveTest', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [TestComponent, NgxNumberInputDirective]
        });
        TestBed.overrideComponent(TestComponent, {
            set: { template: `<input type="number" ngxNumberInput="7.3" />` }
        });
    });
    
    it('Directive should be present', async () => {
        
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            const directiveEl = fixture.debugElement.query(By.directive(NgxNumberInputDirective));
            expect(directiveEl).not.toBeNull();
        });
    });

    it('Length of formatter to be above 0', async () => {
        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(TestComponent);
            const directiveEl = fixture.debugElement.query(By.directive(NgxNumberInputDirective));
            const directiveInstance = directiveEl.injector.get(NgxNumberInputDirective);
            expect(+directiveInstance.numberPattern).toBeGreaterThan(0);
        });
    });
});
