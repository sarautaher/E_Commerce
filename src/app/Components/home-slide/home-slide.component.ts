import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home-slide',
  standalone: true,
  imports: [CarouselModule ,CommonModule],
  templateUrl: './home-slide.component.html',
  styleUrl: './home-slide.component.css'
})
export class HomeSlideComponent {
  slides = [
     "assets/img/1.jpeg",
     "assets/img/2.jpeg",
     "assets/img/3.jpeg",
     "assets/img/4.jpeg",
     "assets/img/5.jpeg",
     "assets/img/6.jpeg",
     "assets/img/7.jpeg",
     "assets/img/8.jpeg"
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
 
  
}
