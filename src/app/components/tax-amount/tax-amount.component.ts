import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'taxAmount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.scss']
})
export class TaxAmountComponent implements OnInit {

  taxAmountForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public formService: FormService
  ) {
    this.taxAmountForm = this._formBuilder.group({
      taxAmount: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  async onChange() {
    this.formService.taxAmount = this.formService.totalVat;

    if (this.formService.taxAmount) {
      this.formService.surcharge = await parseFloat((this.formService.taxAmount * 0.1).toFixed(2));
      this.formService.penalty = 200.00;
      this.formService.totalAmount = await parseFloat((parseFloat(this.formService.taxAmount) + parseFloat(this.formService.surcharge) + parseFloat(this.formService.penalty)).toFixed(2));
    }
  }

}
