import { Component } from '@angular/core';
import { awsService } from './aws.service' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ awsService ],
})
export class AppComponent {
  phone = '';
  password = '';
  code = '';

  onEnterRegisterData = true;
  onEnterCode = false;
  onSuccess = false;

  signupCallback = (err, result) => {
      if (err) {
        console.log('signup error', err);
      } else {
        this.onEnterRegisterData = false;
        this.onEnterCode = true;
      }
  }

  confirmCallback = (err, result) => {
      if (err) {
        console.log('confirm error', err);
      } else {
        this.onEnterCode = false;;
        this.onSuccess = true;
      }
  }

  constructor(
    public awsService: awsService
  ) {
  }

  onRegister() {
    this.awsService.signupUser(this.phone, this.password, 'hardcode@email.com', this.signupCallback);
  }

  onConfirmCode() {
    this.awsService.confirmUser(this.phone, this.code, this.confirmCallback);
  }
}
