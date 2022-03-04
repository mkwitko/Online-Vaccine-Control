import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ScreenService } from '../screen/screen.service';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private afs: AngularFirestore,
    private afst: AngularFireStorage,
    private screen: ScreenService,
    private auth: AuthService
  ) { }

  collectionConstructor<T>(name){
    return this.afs.collection<T>(name);
  }

  getAll(collection: AngularFirestoreCollection){
    return collection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          const creatorId = this.auth.id;
          return { id, creatorId, ...data };
        }))
    );
  }

  get<T>(collection: AngularFirestoreCollection, yourInterface: T, id: string){
    return collection.doc<typeof yourInterface>(id).valueChanges();
  }

  add<T>(collection: AngularFirestoreCollection, yourAsset: T){
    return collection.add(yourAsset);
  }

  update<T>(collection: AngularFirestoreCollection, yourAsset: T, id: string){
    return collection.doc<any>(id).update(yourAsset);
  }

  delete(collection: AngularFirestoreCollection, id: string){
    return collection.doc(id).delete();
  }

  async uploadFileStorage(file, id: string, folder: string): Promise<any>
   {
     if(file && file.length){
       try {
         const task = await this.afst.ref(folder).child(id).put(file[0]);
         return this.afst.ref(folder + '/' + id).getDownloadURL().toPromise();
       } catch (error){
       }
     }
   }

   async deleteFileStorage(fileRef: string){
    const ref = this.afst.refFromURL(fileRef);
    await this.screen.presentLoading();
    try {
      await ref.delete();
      this.screen.loading.dismiss();
    } catch (error){
      this.screen.presentToast(error.message);
      this.screen.loading.dismiss();
    }
  }
}
