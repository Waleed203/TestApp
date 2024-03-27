import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Storage } from "@ionic/storage-angular";
import { GlobalService } from "./global.service";

describe('GlobalService', () => {
  let service: GlobalService;

  beforeEach(() => {
    service = new GlobalService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

})