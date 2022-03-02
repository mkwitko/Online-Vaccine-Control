import { DependencyInt } from './../../../../interfaces/profile-creator/dependency';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { CrudService } from 'src/app/services/firebase/crud.service';
import { ScreenService } from 'src/app/services/screen/screen.service';
import { Injectable } from '@angular/core';
import { FormInterface } from 'src/app/interfaces/forms/form-interface';
import { Card } from 'src/app/interfaces/card/card';

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
      type: 'text',
      position: 'floating',
      answer: '',
      field: 'birthday',
      required: false
    }
    ,
    {
      name: 'Foto',
      type: 'file',
      position: 'fixed',
      answer: '',
      field: 'picture',
      required: false,
      accept: 'image/*'
    }
  ];

  public collection: AngularFirestoreCollection;
  public ref = 'Dependentes';
  public data: any;
  public cardData: Card[] = [];

  constructor(
    private crud: CrudService,
    private screen: ScreenService
  )
  {
    this.collection = this.crud.collectionConstructor<DependencyInt>(this.ref);
  }

  public async getData(){
    await this.screen.presentLoading();
    try {
      await this.crud.getAll(this.collection).subscribe(res => {
        this.data = res;
        try
        {
          this.pushCards();
        }
        catch (error){
          this.screen.presentToast(error);
        }
        this.screen.loading.dismiss();
        return this.data;
      });
    } catch (error){
      this.screen.presentToast(error);
      await this.screen.loading.dismiss();
      return false;
    }
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
