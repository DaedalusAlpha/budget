import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpTotalComponent } from './exp-total.component';

describe('ExpTotalComponent', () => {
  let component: ExpTotalComponent;
  let fixture: ComponentFixture<ExpTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
