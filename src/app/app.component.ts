import { Component } from '@angular/core';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { ProductComponent } from "./components/product/product.component";


@Component({
  selector: 'app-root',
  imports: [NavBarComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'store';
}
