import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DealerService } from './dealer.service';
import { Dealer } from './models/dealer/dealer';

let dealerService: DealerService;
let httpTestingController: HttpTestingController;


describe('DealerService', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DealerService]
    });
    dealerService = TestBed.inject(DealerService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(dealerService).toBeTruthy();
  });

  it("should return data from get", () => {
    //arange
    let dummyDealers: Dealer[] = [{
      id: 1,
      name: "name1",
      address1: "address1",
      address2: "address2",
      city: "city1",
      country: "country1",
      state: "state1",
      latitude: "latitude1",
      longitude: "longitude1"
    },
    {
      id: 2,
      name: "name1",
      address1: "address1",
      address2: "address2",
      city: "city1",
      country: "country1",
      state: "state1",
      latitude: "latitude1",
      longitude: "longitude1"
    }];
    //act
    dealerService.get().subscribe(res => {
      expect(res.length).toBe(2);
      expect(res).toEqual(dummyDealers);
    });

    //set http mock
    let req = httpTestingController.expectOne("https://exeterexerciseapi20210612231239.azurewebsites.net/api/dealers/")

    //assert
    expect(req.request.url.endsWith("/api/dealers/")).toEqual(true);
    expect(req.request.method).toBe("GET");
    req.flush(dummyDealers);
  });
});