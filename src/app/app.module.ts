import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterLinkWithHref, RouterOutlet } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from 'ngx-pagination';
import { CommentModule } from "./comment/comment.module";
import { CategoryModule } from "./category/category.module";
import { ImportModule } from './import/import.module';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './transaction/create/create.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent
  ],
    imports: [
        BrowserModule,
        RouterOutlet,
        CommentModule,
        CategoryModule,
        ImportModule,
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
