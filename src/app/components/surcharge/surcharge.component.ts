import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.scss']
})
export class SurchargeComponent implements OnInit {

  surchargeForm: FormGroup;

  COMMA: string = 'COMMA';

  constructor(
    private _formBuilder: FormBuilder,
    public formService: FormService
  ) {
    this.surchargeForm = this._formBuilder.group({
      surcharge: [0.00]
    })
  }

  ngOnInit(): void {
    this.surchargeForm.controls['surcharge'].disable();
  }

}
