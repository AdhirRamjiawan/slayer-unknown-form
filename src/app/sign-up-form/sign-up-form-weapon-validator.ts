
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function SignUpFormWeaponValidator() : ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        return (control.value !== "0") ? {invalidWeapon: {value: control.value}} : null;
      };
}