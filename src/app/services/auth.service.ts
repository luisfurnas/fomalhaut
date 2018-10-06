import {Injectable, OnDestroy} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';
import {Observable, Subscription, from, of, EMPTY} from 'rxjs';
import {mapTo} from 'rxjs/operators';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private user: User;
  private userSubscription: Subscription;

  constructor(private afAuth: AngularFireAuth) {
    this.userSubscription = afAuth.user.subscribe((user: User) => this.user = user);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  get authenticated(): boolean {
    return this.user !== null;
  }

  get currentUser(): User {
    return this.authenticated ? this.user : null;
  }

  get currentUserId(): string {
    return this.authenticated ? this.user.uid : '';
  }

  login(email: string, password: string): Observable<UserCredential> {
    if (!this.authenticated) {
      return from(this.afAuth.auth.signInWithEmailAndPassword(email, password));
    }
    return EMPTY;
  }

  logout(): Observable<boolean> {
    if (this.authenticated) {
      return from(this.afAuth.auth.signOut()).pipe(
        mapTo(true)
      );
    }
    return of(false);
  }
}
