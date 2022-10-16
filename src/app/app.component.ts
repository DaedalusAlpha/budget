import { Component, OnInit } from '@angular/core';
import { Expense } from './models/expense';
import { BudgetService } from './services/budget.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'budget';
  categories = this.budgetService.getCategories();
  debug: boolean = true;

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    let newExpenses: Expense[] = [];
    if (this.debug) {
      newExpenses = [
        { description: 'Groceries', category: this.categories[0], amount: 400 },
        { description: 'Energy', category: this.categories[2], amount: 108 },
        {
          description: 'Water & Sewer',
          category: this.categories[2],
          amount: 84,
        },
        {
          description: 'Tigers Game',
          category: this.categories[3],
          amount: 97,
        },
        {
          description: 'Netflix Sub',
          category: this.categories[3],
          amount: 9.99,
        },
      ];
      newExpenses.forEach((e) => this.budgetService.addExpense(e));
    }
    else {

    }

    
  }
}
