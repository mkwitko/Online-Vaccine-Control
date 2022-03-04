import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateCalcService {

  public monthsDifference = 0;

  constructor(
    private datePipe: DatePipe
  ) { }

  formatAge(age){
    return this.datePipe.transform(age, 'dd/MM/yyyy');
  }

  ageCalculator(date1: Date){
    const todayDate = new Date();
    const birthday = new Date(date1);

    let ageyear = todayDate.getFullYear() - birthday.getFullYear();
    let agemonth = todayDate.getMonth() - birthday.getMonth();
    let ageday = todayDate.getDate() - birthday.getDate();;

    if (agemonth <= 0) {
      ageyear--;
      agemonth = (12 + agemonth);
    }
    if (todayDate.getDate() < birthday.getDate()) {
      agemonth--;
      ageday = 30 + ageday;
    }  if (agemonth === 12) {
      ageyear = ageyear + 1;
      agemonth = 0;
    }

    //console.log('Idade em anos:' + ageyear + ',' + 'Meses:' + agemonth + ',' + 'Dias:' + ageday);

    return {ageyear, agemonth, ageday};
  }

  age(myObject){
    const ageReturn = this.ageCalculator(myObject.birthday);
    myObject.age = ageReturn.ageyear;
    myObject.months = ageReturn.agemonth;
    myObject.days = ageReturn.ageday;
    myObject.birthday = this.formatAge(myObject.birthday);
  }
}
