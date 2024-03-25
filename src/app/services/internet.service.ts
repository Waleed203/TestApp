import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternetService {

  private _internetState$ = new BehaviorSubject<boolean>(true);

  constructor() {
    
  }

  notify(status) {
    this.updateInternetState(status.connected);
  }

  get getInternetState$() {
    return this._internetState$.asObservable();
  }

  updateInternetState(value){
    this._internetState$.next(value);
  }

  checkInternet() {
    Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
      this.notify(status);
    });
    
    const logCurrentNetworkStatus = async () => {
      const status = await Network.getStatus();
    
      console.log('Network status:', status);
    };
  }
  
}
