import { Component } from '@angular/core';
import { UserInformationService } from './services/user-information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PocketDoctor-Web';

  constructor(private userInfo: UserInformationService, private router: Router){
    
  }

  logout(){
    this.userInfo.logout();
    this.router.navigateByUrl("/login");
  }

}
