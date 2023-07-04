import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { ResultsComponent } from './results/results.component';
import { CharacComponent } from './charac/charac.component';
import { DataService } from 'src/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ResultsComponent,
    CharacComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
