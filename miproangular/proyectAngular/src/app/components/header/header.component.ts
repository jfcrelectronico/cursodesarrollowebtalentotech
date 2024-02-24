import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
//add ROuterLink for rechargue of the page
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
