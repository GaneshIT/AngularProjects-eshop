import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  clean(): void {
    window.sessionStorage.clear();
  }
  public saveUser(user: any): void {
    window.sessionStorage.removeItem('user');
    window.sessionStorage.setItem('user', JSON.stringify(user));
  }
  public getUser(): any {
    const user = window.sessionStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem('user');
    if (user) {
      return true;
    }

    return false;
  }
}
