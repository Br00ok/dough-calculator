import { Component, Input, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { LucideAngularModule, Plus, Minus } from 'lucide-angular';

@Component({
  selector: 'app-number-spinner',
  standalone: true,
  imports: [FormsModule, LucideAngularModule],
  templateUrl: './number-spinner.html',
  styleUrls: ['./number-spinner.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberSpinnerComponent),
      multi: true,
    },
  ],
})
export class NumberSpinnerComponent implements ControlValueAccessor {
  @Input() min: number = 0;
  @Input() max: number = 10;

  readonly plusIcon = Plus;
  readonly minusIcon = Minus;

  private _value: number = 1;
  get value() {
    return this._value;
  }
  set value(val: number) {
    if (val !== this._value) {
      this._value = val;
      this.onChange(val);
      this.onTouched();
    }
  }

  // ControlValueAccessor methods
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(val: number): void {
    this._value = val;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // Optionally handle disabled state
  }

  increment() {
    if (this.value < this.max) this.value = this.value + 1;
  }

  decrement() {
    if (this.value > this.min) this.value = this.value - 1;
  }
}
