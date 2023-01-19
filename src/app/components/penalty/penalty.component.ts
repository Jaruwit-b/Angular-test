import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.scss']
})
export class PenaltyComponent implements OnInit {

  penaltyForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public formService: FormService
  ) {
    this.penaltyForm = this._formBuilder.group({
      penalty: [0.00]
    })
  }

  ngOnInit(): void {
    this.penaltyForm.controls['penalty'].disable();
  }

}
