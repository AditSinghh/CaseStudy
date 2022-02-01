import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  msg: any = [];
  avail!: boolean;
  arr!: any[];
  isValid: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {

    for (var val of this.arr) {
      var a = val['email'];
      var b = f.controls['email'].value;
      if (a == b) {
        // console.log("yes same");
        this.isValid = true;
      }
    }
    if (this.isValid) {
      console.log("email exist");
    }
    else {
      // console.log("email does not exist");
      this.msg = "Email does not exist!!";
      this.avail = true;
      return;
    }


    if (f.controls['p1'].value != f.controls['p2'].value) {
      this.msg = "Password   doesn't match";
      this.avail = true;
      return;
    }


  }
}
