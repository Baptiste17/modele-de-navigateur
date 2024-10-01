import { Component, inject } from '@angular/core';
import { BrowserService } from '../browser.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-home-button',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './home-button.component.html',
  styleUrl: './home-button.component.css'
})
export class HomeButtonComponent {
  public homeService = inject(BrowserService);
}
