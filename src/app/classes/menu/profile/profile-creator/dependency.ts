import { DependencyInt } from './../../../../interfaces/profile-creator/dependency';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { CrudService } from 'src/app/services/firebase/crud.service';
import { ScreenService } from 'src/app/services/screen/screen.service';
import { Injectable } from '@angular/core';
import { FormInterface } from 'src/app/interfaces/forms/form-interface';
import { Card } from 'src/app/interfaces/card/card';
import { AuthService } from 'src/app/services/firebase/auth.service';
import { DateCalcService } from 'src/app/services/date/date-calc.service';

@Injectable()
export class DependencyClass {

  public fields: FormInterface[] = [
    {
      name: 'Nome Completo',
      type: 'text',
      position: 'floating',
      answer: '',
      field: 'fullName',
      required: true
    },
    {
      name: 'Tipo Sanguíneo',
      type: 'text',
      position: 'floating',
      answer: '',
      field: 'bloodType',
      required: false
    },
    {
      name: 'Data de Nascimento',
      type: 'dateTime',
      answer: '',
      field: 'birthday',
      required: true
    }
  ];

  public collection: AngularFirestoreCollection;
  public ref = 'Dependentes';
  public data: any = [];
  public cardData: Card[] = [];

  constructor(
    private crud: CrudService,
    private screen: ScreenService,
    private auth: AuthService,
    private date: DateCalcService
  )
  {
    this.collection = this.crud.collectionConstructor<DependencyInt>(this.ref);
  }

  public getData(){
    try {
      this.crud.getAll(this.collection).subscribe(res => {
        this.data = [];
        for(const a of res){
          if(a.creatorId === this.auth.id){
            this.data.push(a);
          }
        }
        try
        {
          this.pushCards();
        }
        catch (error){
          this.screen.presentToast(error);
        }
        return this.data;
      });
    } catch (error){
      this.screen.presentToast(error);
      return;
    }
    return;
  }

  callUpdate(object: DependencyInt){
    this.crud.update(this.collection, object, object.id).then(() => {
      console.log('Updated! ', object);
    });
  }

  public call(object){
    const sender: DependencyInt = {};
    for(const a of object){
      if(a.field === 'fullName'){
        sender.fullName = a.answer;
      }
      if(a.field === 'birthday'){
        sender.birthday = a.answer;
      }
      if(a.field === 'bloodType'){
        sender.bloodType = a.answer;
      }
      if(a.field === 'picture'){
        sender.picture = a.answer;
      }
    }
    return sender;
  }

  private createCards(item: DependencyInt){
    const object: Card = {};
    if(item.fullName){
      object.title = item.fullName;
    }
    if(item.birthday){
      object.subtitle = item.birthday;
    }
    if(item.age){
      object.subsubTitle = item.age;
    }
    if(item.picture){
      object.image = item.picture;
    }
    return object;
  }

  private pushCards(){
    this.cardData = [];
    for(const a of this.data){
     this.cardData.push(this.createCards(a));
    }
  }
}
