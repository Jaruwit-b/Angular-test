import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  filingType: any;
  month: any;
  year: any;
  saleAmount: any = null;
  totalVat: any = null;
  taxAmount: any = null;
  surcharge: any = 0.00;
  penalty: any = 0.00;
  totalAmount: any = 0.00;

  minTotalVat: any;
  maxTotalVat: any;

  dataSource: any;

  constructor() { }
}
