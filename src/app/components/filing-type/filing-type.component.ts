import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'filingType',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.scss']
})
export class FilingTypeComponent implements OnInit {

  filingTypeForm: FormGroup;

  filingTypeList = [
    { value: '0', name: 'Ordinary Filing' },
    { value: '1', name: 'Additional Filing' }
  ]

  constructor(
    private _formBuilder: FormBuilder,
    public formService: FormService
  ) {
    this.filingTypeForm = this._formBuilder.group({
      filingType: ['0']
    })
  }

  ngOnInit(): void {
    const toSelect = this.filingTypeList.find(c => c.value == '0');
    this.filingTypeForm.setValue({
      filingType: toSelect
    })
    this.formService.filingType = this.filingTypeForm.value.filingType.name;
  }

  onChange() {
    this.formService.saleAmount = null;
    this.formService.totalVat = null;
    this.formService.taxAmount = null;
    this.formService.surcharge = 0.00;
    this.formService.penalty = 0.00;
    this.formService.totalAmount = 0.00;
    this.formService.filingType = this.filingTypeForm.value.filingType.name;
  }

}
