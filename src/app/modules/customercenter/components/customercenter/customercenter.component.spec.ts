import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercenterComponent } from './customercenter.component';

describe('CustomercenterComponent', () => {
  let component: CustomercenterComponent;
  let fixture: ComponentFixture<CustomercenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomercenterComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomercenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // afterEach(() => {
  //   fixture.destroy();
  // });
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
