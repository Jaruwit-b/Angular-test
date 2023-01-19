import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../app/shared/shared.module';

import { NgxFormatFieldModule } from 'ngx-format-field';
import { ToastrModule } from 'ngx-toastr';
import { FilingTypeComponent } from './components/filing-type/filing-type.component';
import { MonthComponent } from './components/month/month.component';
import { YearComponent } from './components/year/year.component';
import { SaleAmountComponent } from './components/sale-amount/sale-amount.component';
import { TaxAmountComponent } from './components/tax-amount/tax-amount.component';
import { DecimalPipe } from '@angular/common';
import { SurchargeComponent } from './components/surcharge/surcharge.component';
import { PenaltyComponent } from './components/penalty/penalty.component';
import { TotalAmountComponent } from './components/total-amount/total-amount.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FilingTypeComponent,
    MonthComponent,
    YearComponent,
    SaleAmountComponent,
    TaxAmountComponent,
    SurchargeComponent,
    PenaltyComponent,
    TotalAmountComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxFormatFieldModule,
    ToastrModule.forRoot()
  ],
  providers: [
    DecimalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
