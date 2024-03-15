import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoggedIn = false;

constructor(private storageService:StorageService,private router:Router){}
ngOnInit(): void {
  if (this.storageService.isLoggedIn()) {
    this.isLoggedIn = true;
  }
}
login():void{
  this.isLoggedIn = true;
  var data={
    username:'Ganesh',
    password:'test',
    role:'user'
  }
  this.storageService.saveUser(data);
  //this.router.navigate(['/home']);
  window.location.reload();

}
}
