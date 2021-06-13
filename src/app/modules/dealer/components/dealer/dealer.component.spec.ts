import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DealerService } from '../../dealer.service';
import { Dealer } from '../../models/dealer/dealer';
import { DealerResponse } from '../../models/dealer/dealerresponse';

import { DealerComponent } from './dealer.component';

describe('DealerComponent', () => {
  let component: DealerComponent;
  let fixture: ComponentFixture<DealerComponent>;
  let dealersArray : Dealer []
  var d = [
    <Dealer>{
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
    <Dealer>{
      id: 2,
      name: "name2",
      address1: "address12",
      address2: "address22",
      city: "city2",
      country: "country2",
      state: "state2",
      latitude: "latitude2",
      longitude: "longitude2"
    },
    <Dealer>{
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
    <Dealer>{
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
    ,
    <Dealer>{
      id: 1,
      name: "name1",
      address1: "address1",
      address2: "address2",
      city: "city1",
      country: "country1",
      state: "state1",
      latitude: "latitude1",
      longitude: "longitude1"
    }
  ];
  beforeEach(async(() => {

 
    let dealerService = jasmine.createSpyObj<DealerService>('DealerService', ['get']);

    
    dealerService.get.and.returnValue(
      of<Dealer[]>(d)
      // return an Observable with some test data
      //of<DealerResponse>(<DealerResponse>{
          // dealers: [
          //   <Dealer>{
          //     id: 1,
          //     name: "name1",
          //     address1: "address1",
          //     address2: "address2",
          //     city: "city1",
          //     country: "country1",
          //     state: "state1",
          //     latitude: "latitude1",
          //     longitude: "longitude1"
          //   },
          //   <Dealer>{
          //     id: 2,
          //     name: "name2",
          //     address1: "address12",
          //     address2: "address22",
          //     city: "city2",
          //     country: "country2",
          //     state: "state2",
          //     latitude: "latitude2",
          //     longitude: "longitude2"
          //   },
          //   <Dealer>{
          //     id: 1,
          //     name: "name1",
          //     address1: "address1",
          //     address2: "address2",
          //     city: "city1",
          //     country: "country1",
          //     state: "state1",
          //     latitude: "latitude1",
          //     longitude: "longitude1"
          //   },
          //   <Dealer>{
          //     id: 1,
          //     name: "name1",
          //     address1: "address1",
          //     address2: "address2",
          //     city: "city1",
          //     country: "country1",
          //     state: "state1",
          //     latitude: "latitude1",
          //     longitude: "longitude1"
          //   },
          //   ,
          //   <Dealer>{
          //     id: 1,
          //     name: "name1",
          //     address1: "address1",
          //     address2: "address2",
          //     city: "city1",
          //     country: "country1",
          //     state: "state1",
          //     latitude: "latitude1",
          //     longitude: "longitude1"
          //   }
          // ]
        );

    TestBed.configureTestingModule({
      declarations: [DealerComponent],
      imports: [HttpClientModule ],
      providers: [
        {
          provide: DealerService,
          useValue: dealerService 
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // afterEach(() => {
  //   fixture.destroy();
  // });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display a "Dealers" title', async(() => {
    let title = fixture.nativeElement.querySelector('h1');
    expect(title.textContent).toEqual('Dealers');
}));
// it('should display a "name1" name', async(() => {
//   let title = fixture.nativeElement.querySelector('.testname');
//   expect(title.textContent).toEqual('name1');
// }));
});
