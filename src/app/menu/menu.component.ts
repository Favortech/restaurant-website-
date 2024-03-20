import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [SlickCarouselModule, ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  
    slide = [
      {img: "./media/fphoto4.jpg"},
      {img: "./media/nphoto3.jpg"},
      {img: "./media/nphoto2.jpg"},
      {img: "./media/fphoto3.png"}
    ];
    slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
    
    // addSlide() {
    //   this.slides.push({img: "http://placehold.it/350x150/777777"})
    // }
    
    // removeSlide() {
    //   this.slides.length = this.slides.length - 1;
    // }
    
    // slickInit() {
    //   console.log('slick initialized');
    // }
    
    // breakpoint() {
    //   console.log('breakpoint');
    // }
    
    // afterChange() {
    //   console.log('afterChange');
    // }
    
    // beforeChange() {
    //   console.log('beforeChange');
    // }
  }
