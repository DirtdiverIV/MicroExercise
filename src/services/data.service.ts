

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  formDataArray: any[] = []; // Array para almacenar los datos del formulario

  constructor() { }

  setFormDataArray(data: any) {
    this.formDataArray.push(data);
  }

  getFormDataArray() {
    return this.formDataArray;
  }
}