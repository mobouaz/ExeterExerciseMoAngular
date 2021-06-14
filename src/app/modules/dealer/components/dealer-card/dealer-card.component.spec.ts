import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerCardComponent } from './dealer-card.component';
import { DealerCardCtubComponent } from './dealer-card.component';

describe('DealerCardComponent', () => {
  let component: DealerCardComponent;
  let fixture: ComponentFixture<DealerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerCardComponent, DealerCardCtubComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerCardComponent);
    component = fixture.componentInstance;
    component.dealer = {id : 1, name: "name1", address1: "address1", address2: "address2",  city: "city1",
    country: "country1",
    state: "state1",
    latitude: "latitude1",
    longitude: "longitude1"}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it(`should have as title 'angular-component-testing'`, () => {  //5
  //   const fixture = TestBed.createComponent(DealerCardComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('angular-component-testing');
  // });

  it('should display name1 in a h4 tag', () => { //6
    const fixture = TestBed.createComponent(DealerCardComponent);
    component = fixture.componentInstance;
    component.dealer = {id : 1, name: "name1", address1: "address1", address2: "address2",  city: "city1",
    country: "country1",
    state: "state1",
    latitude: "latitude1",
    longitude: "longitude1"}
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('name1');
  });
 
});
