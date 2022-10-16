import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExpTableComponent } from './components/exp-table/exp-table.component';
import { ExpFormComponent } from './components/exp-form/exp-form.component';
import { ExpTotalComponent } from './components/exp-total/exp-total.component';
import { FormsModule } from '@angular/forms';
import { ExpBudgetComponent } from './components/exp-budget/exp-budget.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpTableComponent,
    ExpFormComponent,
    ExpTotalComponent,
    ExpBudgetComponent,
  ],
  imports: [BrowserModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
