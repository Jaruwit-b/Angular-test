import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {

  monthForm: FormGroup;

  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  monthList: any[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    public formService: FormService
  ) {
    this.monthForm = this._formBuilder.group({
      month: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.getMonth();
  }

  getMonth() {
    var toMonth = new Date().getMonth() + 1;
    for (var i = 1; i <= 12; i++) {
      this.monthList.push({
        name: (this.month[i - 1]).toString(),
        value: (i).toString()
      });
    }

    this.monthList.forEach((element, index) => {
      if (element.value > toMonth) {
        this.monthList[index].disabled = true;
      } else {
        this.monthList[index].disabled = false;
      }
    })
  }

  onChange() {
    this.formService.month = this.monthForm.value.month.name;
  }

}
