import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagesliderComponent } from '../imageslider/imageslider.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ImagesliderComponent,
    RouterOutlet,
    ReactiveFormsModule,
    
    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  slides: any[] = [
    {
      
      url: ('./media/bgimage1.jpg'),
      title: 'first slide',
      description: 'Welcome to our world of delectable meals and exotic drinks. We hope to satisfy you with our delicious and affordable meals served under a great ambience.'

    },
    {
      url: './media/bgimage2.jpg',
      title: 'second slide',
      description: 'Food is an important part of any celebration in all nations of the world, regardless of culture or religion.'
      
    },
    {
      url: '../media/loginphoto.jpg',
      title: 'third slide',
      description:'Healthy and Delicious food to make every occasion special'
    },
    {
      url: './media/bgimage5.jpg',
      title: 'fourth slide',
      description: 'Here are some of our local Dishes'
    },
  ];

  items: any[] = [];

  userdetails = {
    fullname: '',
    phonenumber: '',
  };

  addItem() {
    this.items.push(this.userdetails);
    this.userdetails = {
      fullname: '',
      phonenumber: '',
    };
  }

  constructor() {}

  filteredItems: any[] = [];
  searchText: string = '';

  filterItems(): void {
    this.filteredItems = this.items.filter(
      (item) =>
        item.fullname.toLowerCase().includes(this.searchText.toLowerCase()) ||
        item.phonenumber.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
