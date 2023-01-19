import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';
import { TaxAmountComponent } from '../tax-amount/tax-amount.component';

@Component({
  selector: 'saleAmount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.scss']
})
export class SaleAmountComponent implements OnInit {

  saleAmountForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public taxAmountComponent: TaxAmountComponent,
    public formService: FormService
  ) {
    this.saleAmountForm = this._formBuilder.group({
      saleAmount: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onChange() {
    if (this.formService.saleAmount) {
      this.formService.totalVat = parseFloat((this.formService.saleAmount * 0.07).toFixed(2));

      this.formService.minTotalVat = parseFloat(this.formService.totalVat) - 20.00;
      this.formService.maxTotalVat = parseFloat(this.formService.totalVat) + 20.00;
    }
  }

}
