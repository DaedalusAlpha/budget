import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-exp-table',
  templateUrl: './exp-table.component.html',
  styleUrls: ['./exp-table.component.css'],
})
export class ExpTableComponent implements OnInit {
  expenseList: Expense[] = [];

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.expenseList = this.budgetService.getExpenses();
  }
}
