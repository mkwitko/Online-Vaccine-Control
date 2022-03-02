import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Component, Input } from '@angular/core';
import { AllowService } from 'src/app/services/allow-to-pass/allow.service';
import { ScreenService } from 'src/app/services/screen/screen.service';
import { MyNavigationService } from 'src/app/services/navigation/my-navigation.service';
import { CrudService } from 'src/app/services/firebase/crud.service';
import { InputChangeService } from 'src/app/services/variable/input-change.service';
import { AuthService } from 'src/app/services/firebase/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent{

  @Input() fields: any = {};
  @Input() collection: AngularFirestoreCollection;
  @Input() myFunction;
  @Input() ref;

  constructor(
    private allow: AllowService,
    private screen: ScreenService,
    private nav: MyNavigationService,
    private crud: CrudService,
    private variableManagment: InputChangeService,
    private auth: AuthService
  ){}

  async submit(){

    // Photo Holder
    let holdPhoto;

    if(this.canPass()){
      try
      {
        // Send to database fields
        const send = this.myFunction(this.fields);

        // if has photo
        if(send.picture){
          holdPhoto = send.picture;
          send.picture = '';
        }

        // Add to Database
        this.crud.add(this.collection, send).then((res) => {

          // Upload System
          if(holdPhoto){
            this.crud.uploadFileStorage(holdPhoto, res.id, this.ref).then((down) => {
              send.picture = down;
              this.crud.update(this.collection, send, res.id);
            });
          }

          // Update To Fill Id
          send.id = res.id;
          send.creatorId = this.auth.id;
          this.crud.update(this.collection, send, res.id);
        });
      }
      catch(error)
      {
        this.screen.presentToast(error);
      }
      finally
      {
        this.nav.goBack();
      }
    } else {
      this.screen.presentToast('Preencha todos campos obrigatórios');
    }
  }

  canPass(){
    for(const a of this.fields){
      if(this.allow.guardian([a.required], true)){
        if(this.allow.guardian([a.answer])){

        } else {
          return false;
        }
      }
    }
    return true;
  }

  upload(object, id, folder){
    const imageUrl = this.crud.uploadFileStorage(object, id, folder);
    return imageUrl;
  }

  pickFile(event, receiver){
    receiver.answer = event.target.files;
  }

  checkBox(event, object){
    object.answer = this.variableManagment.inputChangeCheck(event, object);
  }

}
