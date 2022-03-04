import { ResponsibleInt } from './../../../../interfaces/profile-creator/responsible';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { CrudService } from 'src/app/services/firebase/crud.service';
import { ScreenService } from 'src/app/services/screen/screen.service';
import { Injectable } from '@angular/core';
import { FormInterface } from 'src/app/interfaces/forms/form-interface';
import { Card } from 'src/app/interfaces/card/card';
import { AuthService } from 'src/app/services/firebase/auth.service';

@Injectable()
export class ResponsibleClass {

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
      name: 'E-mail',
      type: 'email',
      position: 'floating',
      answer: '',
      field: 'email',
      required: true
    },
    {
      name: 'RG',
      type: 'text',
      position: 'floating',
      answer: '',
      field: 'rg',
      required: false
    },
    {
      name: 'CPF',
      type: 'text',
      position: 'floating',
      answer: '',
      field: 'cpf',
      required: false
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
      name: 'Telefone',
      type: 'text',
      position: 'floating',
      answer: '',
      field: 'telefone',
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
  ];

  public collection: AngularFirestoreCollection;
  public ref = 'Responsavel';
  public data: any = [];
  public cardData: Card[] = [];
  public username: string;

  constructor(
    private crud: CrudService,
    private screen: ScreenService,
    private auth: AuthService
  )
  {
    this.collection = this.crud.collectionConstructor<ResponsibleInt>(this.ref);
  }

  public async getData(){
    try {
      await this.crud.getAll(this.collection).subscribe(res => {
        this.data = [];
        for(const a of res){
          if(a.creatorId === this.auth.id){
            this.data.push(a);
          }
        }
        this.getUsername();
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
      return false;
    }
  }

  public call(object){
    const sender: ResponsibleInt = {};
    for(const a of object){
      if(a.field === 'fullName'){
        sender.fullName = a.answer;
      }
      if(a.field === 'rg'){
        sender.rg = a.answer;
      }
      if(a.field === 'cpf'){
        sender.cpf =  a.answer;
      }
      if(a.field === 'birthday'){
        sender.birthday = a.answer;
      }
      if(a.field === 'email'){
        sender.email = a.answer;
      }
      if(a.field === 'telefone'){
        sender.telefone = a.answer;
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

  private createCards(item: ResponsibleInt){
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

  private getUsername(){
    for(const a of this.data){
      if(a.id === this.auth.id){
        console.log(a);
        this.username = a.fullName;
      }
    }
  }
}
