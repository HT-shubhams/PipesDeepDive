import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TemperaturePipe } from './temperature.pipe';
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DatePipe, DecimalPipe, TemperaturePipe, SortPipe],
})
export class AppComponent {
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  onReset(index: number) {
    this.historicTemperatures[index] = 18;
    /*
    The line above was not resetting the temperature to the default value of 18 because Angular is designed to rerun the pipes only when the reference of the value changes, not on every render.
    Here, we were changing the value inside the array, so its reference was not changing, and it was not working.
    To fix this, we create a new array with the updated value to change the reference.
    
    const newTemps = [...this.historicTemperatures];
    newTemps[index] = 18;
    this.historicTemperatures = newTemps;

    */
    // since we've added the pure configuation property to the pipe configuration object, we've set the value to the false
  }
}
