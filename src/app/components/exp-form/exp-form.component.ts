import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-exp-form',
  templateUrl: './exp-form.component.html',
  styleUrls: ['./exp-form.component.css'],
})
export class ExpFormComponent implements OnInit {
  expense: Expense = {
    description: '',
    category: '',
    amount: NaN,
  };

  categories: string[] = this.budgetService.getCategories();

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {}

  submitForm(): void {
    let nextExpense: Expense = {
      description: null,
      category: null,
      amount: NaN,
    };
    this.budgetService.addExpense(this.expense);
    this.expense = nextExpense;
  }
}
