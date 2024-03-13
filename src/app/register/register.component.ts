import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userdetails = {
    fullname:'',
    phonenumber: '',
    email: '',
    password:'',
    comfirmpassword:''

  };

items:any[] = []

enter() {
  this.items.push(this.userdetails);
  this.userdetails = {
    fullname:'',
    phonenumber: '',
    email: '',
    password:'',
    comfirmpassword:''
};
}

}
