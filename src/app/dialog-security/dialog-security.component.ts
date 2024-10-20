import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserService } from '../browser.service';

@Component({
  selector: 'app-dialog-security',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-security.component.html',
  styleUrls: ['./dialog-security.component.css']
})
export class DialogSecurityComponent {
  public browserService = inject(BrowserService);

}
