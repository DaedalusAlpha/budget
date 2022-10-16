import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-exp-total',
  templateUrl: './exp-total.component.html',
  styleUrls: ['./exp-total.component.css'],
})
export class ExpTotalComponent implements OnInit {
  totalExpensesDisplay: number = 0;
  totalBudgetDisplay: number = 0;
  categories: string[] = [];
  expenseList: Expense[] = [];

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.budgetService.totalExpenses.subscribe(
      (newTotalExp: number) => (this.totalExpensesDisplay = newTotalExp)
    );
    this.budgetService.totalBudget.subscribe(
      (newTotalBud: number) => (this.totalBudgetDisplay = newTotalBud)
    );
    this.categories = this.budgetService.getCategories();
    this.expenseList = this.budgetService.getExpenses();
  }

  sumCategory(category: string): number {
    let total: number = 0;
    this.expenseList.forEach((e) => {
      if (e.category == category) {
        total += e.amount;
      }
    });
    return total;
  }
}
