import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  async login(email: string, password: string) {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      return userCredential;
    } catch (error) {
      console.error('Error en autenticación:', error);
      throw error;
    }
  }


  getAuthState(): Observable<any> {
    return this.afAuth.authState;
  }

  logout() {
    return this.afAuth.signOut();
  }
}
