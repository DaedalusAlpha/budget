import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  //Properties
  private expenses: Expense[] = [];
  private categories: string[] = ['Food', 'Clothing', 'Bills', 'Entertainment'];

  private _totalExpenses: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );
  readonly totalExpenses = this._totalExpenses.asObservable();
  private _totalBudget: BehaviorSubject<number> = new BehaviorSubject<number>(
    1000
  );
  readonly totalBudget = this._totalBudget.asObservable();

  public addExpense(expense: Expense): void {
    this.expenses.push(expense);
    this._totalExpenses.next(this._totalExpenses.getValue() + expense.amount);
  }

  setBudget(newAmount: number): void {
    this._totalBudget.next(newAmount);
  }

  getExpenses(): Expense[] {
    return this.expenses;
  }

  getCategories(): string[] {
    return this.categories;
  }
  constructor() {}
}
