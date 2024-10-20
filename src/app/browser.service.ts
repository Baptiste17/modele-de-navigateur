import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSecurityComponent } from './dialog-security/dialog-security.component';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  constructor(private dialog: MatDialog) {}  // Injection correcte de MatDialog

  url = 'https://amiens.unilasalle.fr';
  canGoBack = false;
  canGoForward = false;

  // @ts-ignore
  electronAPI = window.electronAPI;

  backHome() {
    this.electronAPI.backHome();
    this.goToPage('https://amiens.unilasalle.fr');
    this.updateHistory();
  }

  toogleDevTool() {
    this.electronAPI.toogleDevTool();
  }

  goBack() {
    this.electronAPI.goBack();
    this.updateHistory();
  }

  goForward() {
    this.electronAPI.goForward();
    this.updateHistory();
  }

  refresh() {
    this.electronAPI.refresh();
  }

  goToPage(url: string) {
    this.electronAPI.goToPage(url)
      .then(() => this.updateHistory());
  }

  setToCurrentUrl() {
    this.electronAPI.currentUrl()
      .then((url: string) => {
        this.url = url;
        this.checkUrl(url);
      });
  }

  updateHistory() {
    this.setToCurrentUrl();

    this.electronAPI.canGoBack()
      .then((canGoBack: boolean) => this.canGoBack = canGoBack);

    this.electronAPI.canGoForward()
      .then((canGoForward: boolean) => this.canGoForward = canGoForward);
  }

  checkUrl(url: string) {
    if (url.startsWith('http://')) {
      this.electronAPI.openHttpWarningModal(); // Ouvre la modale d'avertissement HTTP
    }
  }

}
