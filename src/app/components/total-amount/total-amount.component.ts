import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'totalAmount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.scss']
})
export class TotalAmountComponent implements OnInit {

  totalAmountForm: FormGroup;

  COMMA: string = 'COMMA';

  constructor(
    private _formBuilder: FormBuilder,
    public formService: FormService
  ) {
    this.totalAmountForm = this._formBuilder.group({
      totalAmount: [0.00]
    })
  }

  ngOnInit(): void {
    this.totalAmountForm.controls['totalAmount'].disable();
  }

}
