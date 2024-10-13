import { Component, OnInit } from '@angular/core';
import { HomeSlideComponent } from '../home-slide/home-slide.component';

import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeSlideComponent,ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

ngOnInit(): void {
  
}

}
