import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';
import { data } from './models/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'default'}
    }
  ],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {

  public inputTime: any;
  public initTime: any;
  public desTime: any;

  constructor(private httpClient: HttpClient){
  }

  zones = [
    '(UTC-11:00) Coordinated Universal Time-11',
    '(UTC-10:00) Hawaii',
    '(UTC-09:00) Alaska',
    '(UTC-08:00) Pacific Time',
    '(UTC-07:00) Mountain Time',
    '(UTC-06:00) Central Time',
    '(UTC-05:00) Eastern Time (US and Canada)',
    '(UTC-04:00) Atlantic Time (Canada)',
    '(UTC-03:00) Greenland',
    '(UTC-02:00) Coordinated Universal Time-2',
    '(UTC-01:00) Cape Verde',
    '(UTC-00:00) Dublin, Edinburgh, Lisbon, London',
    '(UTC- +01:00) Amsterdam, Berline, Rome, Stockholm',
    '(UTC- +02:00) Athens, Bucharest, Istanbul',
    '(UTC- +03:00) Baghdad, Tehran, Kuwait',
    '(UTC- +04:00) Moscow, St. Petersburg, Volgograd',
    '(UTC- +05:00) Tashkent, Islamabad, Karachi',
    '(UTC- +06:00) Astana, Dhaka',
    '(UTC- +07:00) Bankgkok, Hanoi, Jakarta',
    '(UTC- +08:00) Beijing, Chongqing, Hong Kong, Urumqi',
    '(UTC- +09:00) Osaka, Sapporo, Tokyo',
    '(UTC- +10:00) Guam, Port Moresby',
    '(UTC- +11:00) Solomon Islands, New Caledonia',
    '(UTC- +12:00) Fiji, Marshall Islands' 
  ]

  title = 'time-zone-converter';

  convert(){
    
    this.httpClient.post('http://127.0.1:5000/data', {
      inputTime: this.inputTime, initTime: this.initTime, desTime: this.desTime
    })
    .subscribe(data => {
      alert(`The time in your desired time zone is: ${{data}}`)
    })

  }

  }
