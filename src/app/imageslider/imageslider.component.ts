import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-imageslider',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './imageslider.component.html',
  styleUrl: './imageslider.component.css',
})
export class ImagesliderComponent implements OnInit {
  @Input() slides: any[] = [];
  @Input() indicatorVisible = true;
  @Input() animationSpeed = 500;
  @Input() autoPlay = false;
  @Input() autoPlaySpeed = 3000;
  

  currentslide = 0;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  hidden = false;

  next() {
    let currentslide = (this.currentslide =
      (this.currentslide + 1) % this.slides.length);
    this.jumptoslide(currentslide);
  }
  previous() {
    let currentslide = (this.currentslide =
      (this.currentslide - 1 + this.slides.length) % this.slides.length);
    this.jumptoslide(currentslide);
  }

  jumptoslide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.currentslide = index;
      this.hidden = false;
    }, this.animationSpeed);
  }

  constructor() {
    if (this.autoPlay) {
      setInterval(() => {
        this.next();
      }, this.autoPlaySpeed);
    }
  }

  ngOnInit(): void {
    
  }
}
