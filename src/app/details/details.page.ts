import { AfterViewInit, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { GlobalService } from '../services/global.service';
import { InternetService } from '../services/internet.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  showBack = true;
  utils = inject(UtilsService);
  internet = inject(InternetService)
  cd = inject(ChangeDetectorRef);

  openThis = false;
  route = inject(ActivatedRoute);
  global = inject(GlobalService);
  nav = inject(NavController);
  character:any = [];
  episodesPopulated = false;

  constructor() {
    if(this.route.snapshot.params['character']) {
      this.character = JSON.parse(this.route.snapshot.params['character']);
      console.log('character = ', this.character);
      this.character.episodesInfo = [];

      setTimeout(()=>{
        this.fetchEpisodeDetails();
      }, 2000);

    }
  }

  fetchEpisodeDetails() {
    return new Promise((resolve, reject)=>{
      for(var i = 0 ; i < this.character.episode.length; i++ ) {
        this.global.sendHTTPClientRequest(this.character.episode[i], 'remove').then(data=>{
          // console.log('data = ', data);
          this.character.episodesInfo.push(data);
        })
      }
      console.log('episodes info = ', this.character.episodesInfo);
      this.episodesPopulated = true;
      resolve('done');
    })
  }

  goback() {
    this.nav.pop();
  }

  ngOnInit() {

    this.internet.getInternetState$.subscribe(value=>{
      if(value == false) {
        this.openThis = true;
        this.utils.presentToast("Internet disconnected");
        this.cd.detectChanges();
      }else {
        this.openThis = false;
        this.cd.detectChanges();
      }
    })

  }

}
