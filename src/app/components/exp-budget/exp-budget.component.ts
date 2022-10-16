import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-exp-budget',
  templateUrl: './exp-budget.component.html',
  styleUrls: ['./exp-budget.component.css'],
})
export class ExpBudgetComponent implements OnInit {
  newBudget: number = NaN;

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.getBudget();
  }

  submitForm(): void {
    this.budgetService.setBudget(this.newBudget);
    this.getBudget();
  }

  getBudget(): void {
    this.budgetService.totalBudget.subscribe(
      (budget: number) => (this.newBudget = budget)
    );
  }
}
