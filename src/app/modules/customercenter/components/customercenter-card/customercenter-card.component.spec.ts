import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerCenterSectionesponse } from '../../models/customercentersectionresponse';

import { CustomercenterCardComponent } from './customercenter-card.component';

describe('CustomercenterCardComponent', () => {
  let component: CustomercenterCardComponent;
  let fixture: ComponentFixture<CustomercenterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomercenterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomercenterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should display title1 in a h4 tag', () => { //6
  //   const fixture = TestBed.createComponent(CustomercenterCardComponent);
  //   component = fixture.componentInstance;
  //   let section : CustomerCenterSectionesponse;
    
  //   component.customercentersection = {id : 1, title: "title1", customerCenterInfos : [{
  //     id : 1,
  //     iconUrl : "string",
  //     description  : "string",
  //     sectionId  : "string"
  //   }]}
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h4').textContent).toContain('title1');
  // });

  // it('should display title1 in a h4 tag', () => { //6
  //   const fixture = TestBed.createComponent(CustomercenterCardComponent);
  //   component = fixture.componentInstance;
  //   let section : CustomerCenterSectionesponse;
    
  //   component.customercentersection = {id : 1, title: "title1", customerCenterInfos : [{
  //     id : 1,
  //     iconUrl : "string",
  //     description  : "string",
  //     sectionId  : "string"
  //   }]}
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('p').textContent).toContain('title1');
  // });
});
