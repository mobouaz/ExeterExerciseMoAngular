import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
});
