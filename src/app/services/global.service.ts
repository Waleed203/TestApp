import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "src/environments/environment";
import { Storage } from "@ionic/storage-angular";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  baseUrl = "";
  httpclient = inject(HttpClient);
  storage = inject(Storage);

  constructor() {
    this.baseUrl = environment.apiUrl;
    this.init();
  }

  sendHTTPClientRequest(action: any, baseUrl?): Promise<any> {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      var url = baseUrl == "remove" ? action : this.baseUrl + action;
      this.httpclient.get(url, { headers: header }).subscribe(
        (server) => {
          resolve(server);
        },
        (er) => {
          console.log("er- ", er);
          reject(er);
        },
      );
    });
  }

  async init() {
    await this.storage.create();
  }

  get(param: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      console.log("getting");
      await this.storage
        .get(param)
        .then((response: any) => {
          resolve(response);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }

  set(param: any, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage
        .set(param, data)
        .then((response: any) => {
          resolve(response);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }

  remove(param: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage
        .remove(param)
        .then((response: any) => {
          resolve(response);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
}
