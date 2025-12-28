import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Download, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-install-button',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <button
      *ngIf="deferredPrompt"
      (click)="openInstallModal()"
      class="btn btn-sm flex items-center gap-1"
    >
      <lucide-icon [img]="download" class="w-6 h-6"></lucide-icon>
      Install
    </button>

    <div *ngIf="showModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-base-200 p-6 rounded shadow-lg max-w-sm w-full">
        <h2 class="text-xl font-bold mb-4">Install this app</h2>
        <p class="mb-4">Install this app on your device to use it like a native app.</p>
        <div class="flex justify-end gap-2">
          <button (click)="installApp()" class="btn btn-primary">Install</button>
          <button (click)="showModal = false" class="btn btn-outline">Cancel</button>
        </div>
      </div>
    </div>
  `,
})
export class InstallButton {
  download = Download;
  deferredPrompt: any = null;
  showModal = false;

  constructor() {}

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event) {
    event.preventDefault();
    this.deferredPrompt = event;
  }

  openInstallModal() {
    this.showModal = true;
  }

  installApp() {
    if (!this.deferredPrompt) return;

    this.deferredPrompt.prompt();

    this.deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      this.deferredPrompt = null;
      this.showModal = false;
    });
  }
}
