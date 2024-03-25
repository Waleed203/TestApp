import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UtilsService } from '../services/utils.service';
import { AuthService } from '../services/auth.service';
import { GlobalService } from '../services/global.service';
import { User } from 'firebase/auth';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  populated = false;
  nav = inject(NavController);
  utils = inject(UtilsService);
  authService = inject(AuthService);
  global = inject(GlobalService);
  storage = inject(Storage);
  Loginform: FormGroup;
  user = {
    email : '',
    password: '',
  }
  signingIn = false;

  constructor() { }

  gotoSignUp(){
    this.nav.navigateForward('signup');
  }

  login() {
    if(this.signingIn) {
      return;
    }
    console.log('logging in');
    this.signingIn = true;
    this.utils.loadershow();
    this.authService.loginUser(this.user).then((user:User)=>{
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
      if(er.code == 'auth/invalid-credential') {
        this.utils.presentToast("Incorrect Email or Password");
      }else if(er.code == 'auth/network-request-failed') {
        this.utils.presentToast("Network is not connected");
      }else {
        this.utils.presentToast("Error signing in");
      }
      
    })
  }

  async ionViewWillEnter() {
    await this.storage.create();
    this.global.get('uid').then(uid=>{
      console.log('uid = ', uid);
      if(uid) {
        this.nav.navigateRoot('tabs/tab1');
      }else {
        // this.nav.navigateRoot('login');
        this.populated = true;
      }
    },er=>{
      console.log('uid error', er);
    })
  }

  ngOnInit() {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.Loginform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    });
  }

}
