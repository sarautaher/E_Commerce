import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from "./Components/cart/cart.component";
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartComponent,NavbarComponent,FooterComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app9';
}
