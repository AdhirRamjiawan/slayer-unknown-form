import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  attemptedSubmission:boolean = false;
  submitted:boolean = false;

  signUpForm = this.fb.group({
    nickName: ['', Validators.required],
    ageInBattle: [0, Validators.required],
    weaponOfChoice: [0, Validators.required]
  });

  constructor(public fb: FormBuilder) { 
  }

  ngOnInit(): void {
  }


  ripAndTear(): void {
    console.log(this.signUpForm);
    this.attemptedSubmission = true;
    if(this.signUpForm.valid) {
      this.submitted = true;
    }
  }
}
