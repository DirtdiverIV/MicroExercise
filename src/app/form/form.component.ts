import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formData: any = {}; 

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() { }

  registerData() {
    this.dataService.setFormDataArray(this.formData);
    this.formData = {};
  }
}