import { Injectable } from '@angular/core';
import { DateCalcService } from 'src/app/services/date/date-calc.service';

@Injectable()
export class DateClass {

  constructor(
    private myDateService: DateCalcService
  )
  {

  }

  convertToDate(myString: string){
    return new Date(myString);
  }

  callAgeCalc(date1){
    return this.myDateService.ageCalculator(date1);
  }
}
