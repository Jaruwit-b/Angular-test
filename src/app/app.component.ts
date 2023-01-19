import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogComponent } from './components/dialog/dialog.component';
import { taxData } from './model/tax-data';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Submit Tax Filing';
  date = new Date()

  constructor(
    public formService: FormService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
  }

  onClick() {
    if (this.formService.taxAmount == null || this.formService.taxAmount < this.formService.minTotalVat || this.formService.taxAmount > this.formService.maxTotalVat) {
      this.toastr.warning('Invalid Data', 'warn', { enableHtml: true });
    }

    const data: taxData[] = [{
      filingType: this.formService.filingType,
      month: this.formService.month,
      year: this.formService.year,
      saleAmount: this.formService.saleAmount,
      taxAmount: this.formService.taxAmount,
      surcharge: this.formService.surcharge,
      penalty: this.formService.penalty,
      totalAmount: this.formService.totalAmount
    }];
    this.formService.dataSource = data;
  }

  showDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '70%',
      height: '80%',
      data: this.formService.dataSource
    });
  }

}