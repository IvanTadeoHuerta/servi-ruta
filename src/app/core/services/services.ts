import { Injectable } from '@angular/core';
import { Promise } from 'es6-promise';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import 'firebase/auth';
import 'firebase/database';
import * as firebase from "firebase";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class Services {



    constructor(private http: HttpClient) { }


    authGoogle(): Promise<any> {

        const PROVIDER_GOOGLE = new firebase.auth.GoogleAuthProvider();
        
        return new Promise((resolve, reject) => {

            firebase.auth().signInWithPopup(PROVIDER_GOOGLE).then(resp => {
                resolve(resp);
            }).catch(error => {
                reject(error);
            });
        });

    }





}