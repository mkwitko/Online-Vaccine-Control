import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputChangeService {

  constructor() { }

  inputChangeCheck(event: any,
    object: any ){
      object = event.detail.checked;
      return object;
  }

  inverseBool(object){
    object = !object;
    return object;
  }

  inputChangeValue(event: any,
    object: any){
      return event.target;
  }
}
