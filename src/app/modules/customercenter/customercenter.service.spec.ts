import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CustomercenterService } from './customercenter.service';
import { CustomerCenterSectionesponse, CustomerCenterSectionesponses } from './models/customercentersectionresponse';

describe('CustomercenterService', () => {
  let customerCenterService: CustomercenterService;
  let httpTestingController: HttpTestingController;


  


    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [CustomercenterService]
      });
      customerCenterService = TestBed.inject(CustomercenterService);
      httpTestingController = TestBed.inject(HttpTestingController);
    });
  
    it('should be created', () => {
      expect(customerCenterService).toBeTruthy();
    });
  
    it("should return data from get", () => {
      //arange
      let dummyDealers: CustomerCenterSectionesponses = {
        sections : <CustomerCenterSectionesponse[]>[{
        id: 1,
        title: "title1",
        customerCenterInfos: [{
          id : 1,
          iconUrl : "iconUrl1",
          description  : "description1",
          sectionId  : "sectionId1"
        }]}]};
      //act
      customerCenterService.get().subscribe(res => {

        //expect(res.Sections.length).toBe(2);
        expect(res).toEqual(dummyDealers);
      });
  
      //set http mock
      let req = httpTestingController.expectOne("https://exeterexerciseapi20210612231239.azurewebsites.net/api/customers/")
  
      //assert
      expect(req.request.url.endsWith("/api/customers/")).toEqual(true);
      expect(req.request.method).toBe("GET");
      req.flush(dummyDealers);
    });
  });