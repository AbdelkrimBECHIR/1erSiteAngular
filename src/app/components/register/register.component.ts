import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl,FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


   RegisterForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.minLength(8) , Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]),
      confirmPassword: new FormControl('', [Validators.minLength(8) , Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]),
   });



   nameError()
    {
       const nameControl = this.RegisterForm.get('name');
        if(!nameControl) return false;
        return (
            nameControl.hasError('required') && nameControl.touched
        )
    }
    emailError()
    {
        const emailControl = this.RegisterForm.get('email');
          if(!emailControl) return false;
          return (
              emailControl.hasError('required') && emailControl.touched
          )
      }
      passwordError()
    {
        const passwordControl = this.RegisterForm.get('password');
          if(!passwordControl) return false;
          return (
              passwordControl.hasError('required') && passwordControl.touched
          )
      }
     checkPassword(){
      const passwordControl = this.RegisterForm.get('password');
      const confirmPasswordControl = this.RegisterForm.get('confirmPassword');
      if (passwordControl && confirmPasswordControl) {
        return passwordControl.value !== confirmPasswordControl.value;
      }
      return;
    }

     submitRegisterForm(){
      this.checkPassword();
      if(this.RegisterForm.invalid){
          return;
      }
      console.log(this.RegisterForm.value);
    }

}
