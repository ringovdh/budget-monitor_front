import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localeBE from '@angular/common/locales/be';

import { AppComponent } from './app.component';
import { RouterLinkWithHref, RouterOutlet } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from 'ngx-pagination';
import { CommentModule } from './comment/comment.module';
import { CategoryModule } from './category/category.module';
import { ImportModule } from './import/import.module';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TransactionModule } from './transaction/transaction.module';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ConfirmationModalComponent } from './modal/confirmation-modal/confirmation-modal.component';
import { ImportModalComponent } from './modal/import-modal/import-modal.component';
import { BudgetModule } from "./budget/budget.module";
import { BudgetTransactionsModalComponent } from './modal/budget-transactions-modal/budget-transactions-modal.component';
import { TransactionsPerCategoryModule } from './transaction-per-category/transactionsPerCategory.module';
import { TransactionsPerYearModule } from './transaction-per-year/transactionsPerYear.module';
import { SelectYearComponentModule } from './forms/selectYearComponent.module';
import { ProjectModule } from './project/project.module';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationModalComponent,
    ImportModalComponent,
    BudgetTransactionsModalComponent
  ],
    imports: [
      BrowserModule,
      RouterOutlet,
      CommentModule,
      CategoryModule,
      ProjectModule,
      ImportModule,
      TransactionModule,
      BudgetModule,
      TransactionsPerCategoryModule,
      TransactionsPerYearModule,
      SelectYearComponentModule,
      HttpClientModule,
      RouterLinkWithHref,
      NgxPaginationModule,
      NgbModule,
      ReactiveFormsModule
    ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})

export class AppModule { }

registerLocaleData(localeBE, 'be');
