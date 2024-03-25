import { Injectable, inject } from '@angular/core';
import { GlobalService } from './global.service';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { NavController } from '@ionic/angular';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  global = inject(GlobalService);
  nav = inject(NavController);
  utils = inject(UtilsService);
  
  constructor() { }

  logout() {
    this.utils.loadershow();
    const auth = getAuth();
    signOut(auth).then(() => {
      this.utils.hideLoader();
      this.global.remove('uid');
      this.nav.navigateRoot('login');
    }).catch((error) => {
      
    });
  }

  loginUser(user) {
    return new Promise((resolve, reject)=>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(error);
      });
    })
  }

  registerUser(user) {
    return new Promise((resolve, reject)=>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(error);
      });
    })
  }
}
