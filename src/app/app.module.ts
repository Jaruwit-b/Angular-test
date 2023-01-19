import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../app/shared/shared.module';

import { ToastrModule } from 'ngx-toastr';
import { NumberFormatPipe } from './shared/number.pipe';
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
    NumberFormatPipe,
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
    // ToastrModule
    ToastrModule.forRoot()
  ],
  providers: [
    DecimalPipe,
    NumberFormatPipe,
    // ToastrModule
  ],
  bootstrap: [AppComponent],
  exports: [NumberFormatPipe]
})
export class AppModule { }
