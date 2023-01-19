import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent implements OnInit {

  yearForm: FormGroup;

  yearList: any[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    public formService: FormService
  ) {
    this.yearForm = this._formBuilder.group({
      year: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getYear();
  }

  getYear() {
    var toYear = new Date().getFullYear();
    for (var i = 2020; i <= toYear; i++) {
      this.yearList.push({
        name: (i).toString(),
        value: (i).toString()
      });
    }
  }

  onChange() {
    this.formService.year = this.yearForm.value.year.value;
  }

}
