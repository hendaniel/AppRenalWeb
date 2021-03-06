import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NeedAuthGuard } from "./NeedAuthGuard";
import { NeedAuthGuardAdmin } from "./NeedAuthGuardAdmin";
import { AppRoutingModule } from "./app-routing.module";

import { InsertProductComponent } from "./insert-product/insert-product.component";
import { LoginComponent } from "./login/login.component";
import { InsertHabitComponent } from "./insert-habit/insert-habit.component";

import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSnackBarModule,
  MatSelectModule,
  MatListModule,
  MatCardModule,
  MatIconModule,
  MatGridListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSlideToggleModule
} from "@angular/material";
import { InsertCompanyComponent } from "./insert-company/insert-company.component";

@NgModule({
  declarations: [
    AppComponent,
    InsertHabitComponent,
    InsertProductComponent,
    LoginComponent,
    InsertCompanyComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    MatGridListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSlideToggleModule
  ],
  providers: [NeedAuthGuard, NeedAuthGuardAdmin],
  bootstrap: [AppComponent]
})
export class AppModule {}
