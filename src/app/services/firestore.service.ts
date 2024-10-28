import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  createUser(user: User, userType: 'docentes' | 'alumnos') {
    const collection = userType === 'docentes' ? 'docentes' : 'alumnos';
    return this.firestore.collection(collection).add(user);
  }
  
  getUser(id: string, userType: 'docente' | 'alumno'){
    const collection = userType === 'docente' ? 'docentes' : 'alumnos';
    return this.firestore.collection(collection).doc(id).valueChanges();
  }

  updateUser(id: string,user: User, userType: 'docente' | 'alumno'){
    const collection = userType === 'docente' ? 'docentes' : 'alumnos';
    return this.firestore.collection(collection).doc(id).update(user);
  }

  deleteUser(id: string, userType: 'docente' | 'alumno'){
    const collection = userType === 'docente' ? 'docentes' : 'alumnos';
    return this.firestore.collection(collection).doc(id).delete();
  }

  
  


  createDoc(){
    this.firestore.collection('estudiantes')
  }

  getCollection(){
    console.log('leer estudiantes')
    this.firestore.collection('estudiantes').valueChanges().subscribe((res) => {

        console.log('res ->', res);

    });
  }
}
