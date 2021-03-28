import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://semillero.allsites.es/public/api';
  token: any;
  constructor(private http: HttpClient, private nacCtrl: NavController) { }

  register(data: any) {
    return new Promise( resolve => {
      this.http.post(this.apiUrl + '/register', {
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: data.password
      }).subscribe(data => {
        this.token = data;
        resolve(data);
      });
    });
  }
}
