import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,Params} from '@angular/router';
import { IUser } from '../interfaces/app-interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  editMode: boolean = false;

  user!:IUser ;
  

  constructor(private rout: ActivatedRoute,
              private userServices: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.user = this.userServices.users.find(user => user.id === +this.rout.snapshot.params['id'])!;
    console.log(this.user);
    if (!this.user) {
      this.user = this.userServices.users[1];
      this.router.navigate(['/users']);
    }
    // this.rout.params.subscribe( (params: Params) => {
    //   this.user = this.userServices.users.find( user => user.id === +params['id'])!;
    //   console.log(this.user);
      
    // });
    
  }

  public onEditUser() {
    this.editMode = true;
    this.router.navigate(['user',this.user.id, 'edit']);
  }

}


