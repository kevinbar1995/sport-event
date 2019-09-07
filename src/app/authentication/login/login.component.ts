import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authStatus: boolean;

  // Appeler notre service ici pour savoir si notre utilisateur est login
  constructor(private authSvc: AuthService) {}

  ngOnInit() {
    // Nous permet d'avoir acces a une variable de notre service
    this.authStatus = this.authSvc.isAuth;
  }

  onSignIn() {
    /*
      le .then() est utilisé sur des methodes async
      (Nous attendons une réponse, souvent lors d'une promesse).
    */
    this.authSvc.signIn().then(() => {
      console.log('connexion réussie !');
      this.authStatus = this.authSvc.isAuth;
    });
  }

  onLogOut() {
    this.authSvc.signOut();
    this.authStatus = this.authSvc.isAuth;
  }
}
