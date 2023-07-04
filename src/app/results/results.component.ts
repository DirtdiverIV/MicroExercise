import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  formDataArray: any[] = []; // Array para almacenar los datos del formulario

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.formDataArray = this.dataService.getFormDataArray();
  }
}
