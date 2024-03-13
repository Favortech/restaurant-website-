import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  items: any[] = [];

  userdetails = {
    fullname:'',
    phonenumber: ''
  };



addItem() {
  this.items.push(this.userdetails);
  this.userdetails = {
    fullname:'',
    phonenumber: ''
  };
}

  constructor(){
}


    
    filteredItems: any[] = [];
    searchText: string = '';
  
    filterItems(): void {
      this.filteredItems = this.items.filter(item =>
        item.fullname.toLowerCase().includes(this.searchText.toLowerCase()) ||
        item.phonenumber.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
}
