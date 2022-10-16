import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpBudgetComponent } from './exp-budget.component';

describe('ExpBudgetComponent', () => {
  let component: ExpBudgetComponent;
  let fixture: ComponentFixture<ExpBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpBudgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
