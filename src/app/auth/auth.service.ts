import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import * as firebase from 'firebase';



@Injectable()
export class AuthService {

    constructor (private router: Router) {}

    token: string;

    signIn(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            (response: Response) => {

            this.router.navigate(['/']);
                // assign token
                firebase.auth().currentUser.getIdToken().then(
                    (token: string) => {
                        this.token = token;
                    }
                );
                console.log(response);
            },



        ).catch(
            (error: Error) => {
                console.log(error);
            });
    }


    signUp(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(
            error => console.log(error)

        );

    }


    // return the token that is put after sign in or now
    // possibility of retuning an expired token there

    getToken() {
        firebase.auth().currentUser.getIdToken().then(
            (token: string) => {
                this.token = token;
            }
        ); return this.token;
    }


    isAuthenticated() {
        return this.token != null;
    }


    logOut() {
    firebase.auth().signOut();
    this.token = null;
    }



    // logInWithGoogle () {
    //     return firebase.auth.GoogleAuthProvider({
    //     });
    // }

}
