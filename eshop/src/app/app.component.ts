import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './services/storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eshop';
  isLoggedIn = false;
  username=String;

  constructor(private storageService: StorageService,private router:Router) { }
  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.username=user.username;
this.router.navigate(['/home'])
      //this.showAdminBoard = 'admin';
      //this.showModeratorBoard = 'user';

      //this.username = user.username;
    }
  }
  logout(): void {
    
        this.storageService.clean();

        window.location.reload();
      
  }
}
