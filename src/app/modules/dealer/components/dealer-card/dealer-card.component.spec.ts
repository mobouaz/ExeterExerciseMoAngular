import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerCardComponent } from './dealer-card.component';

describe('DealerCardComponent', () => {
  let component: DealerCardComponent;
  let fixture: ComponentFixture<DealerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerCardComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
