import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UtilsService } from '../services/utils.service';
import { AuthService } from '../services/auth.service';
import { GlobalService } from '../services/global.service';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  nav = inject(NavController);
  utils = inject(UtilsService);
  authService = inject(AuthService);
  global = inject(GlobalService);
  Registerform!: FormGroup;
	user={
		name: '',
		email: '',
		password: '',
	}
  signingIn = false;

  constructor() { }

  gotoSignIn(){
    this.nav.navigateForward('login');
  }

  register() {
    if(this.signingIn) {
      return;
    }
    console.log('signing up');
    this.signingIn = true;
    this.utils.loadershow();
    this.authService.registerUser(this.user).then((user:User)=>{
      console.log('user = ', user);
      this.global.set('uid', user.uid);
      this.utils.hideLoader();
      this.nav.navigateRoot('tabs/tab1');
      this.signingIn = false;
    },er=>{
      this.utils.hideLoader();
      console.log('er ' ,er);
      console.log('er ' ,er.code);
      console.log('er ' ,er.message);
      this.signingIn = false;
      if(er.code == 'auth/email-already-in-use') {
        this.utils.presentToast("Email already exists");
      }else if(er.code == 'auth/network-request-failed') {
        this.utils.presentToast("Network is not connected");
      }else {
        this.utils.presentToast("Error signing up");
      }
    })
  }

  ngOnInit() {
		let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
		this.Registerform = new FormGroup({
			name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
			email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
			password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
      
		});
  }

}
