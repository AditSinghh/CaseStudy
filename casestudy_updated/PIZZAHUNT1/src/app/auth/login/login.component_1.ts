// NgForm
// Helper directive that makes it possible to create control groups inside a form directive
// These "child forms" can be used, for example, to determine the validity of a sub-group of controls.

//Router
//Router Module provides the necessary service providers and directives for navigating through application views.



import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public msg: any = [];
  public avail!: boolean;
  public isAdmin!: boolean;
  public isBlocked!: boolean;
  arr: any = [];

  constructor(private router: Router,private authService: AuthService) { }


  ngOnInit(): void {

  }

  readUser() {
    this.authService.readUser().subscribe(
      data => {
        this.arr = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  onSubmit(f: NgForm) {
    // check if the form Attribute are valid or not
    if (!f.valid) {
      this.msg = "Invalid Email or password";
      this.avail = true;
      return;
    }
       this.authService.login(f.value.email).subscribe(
        data => {
          console.log(data);

          if(!data)
          {
            this.msg = "Not a registered user. Kindly check email or register yourself."
            this.avail=true;
            return;
          }

          this.router.navigate(['/userhome']);
        },
        error => {
           console.error(error);
           this.msg = error;
          }
      )
  }

}
