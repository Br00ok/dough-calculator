import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Info } from 'lucide-angular';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-floating-info-button',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, TranslatePipe],
  template: `
    <div>
      <button
        aria-label="info button"
        (click)="openModal()"
        class="btn btn-circle btn-accent shadow-lg hover:btn-primary transition-all"
      >
        <lucide-icon [img]="info" class="w-6 h-6"></lucide-icon>
      </button>

      <dialog #modal class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg mb-4">{{ 'INFO.TITLE' | translate }}</h3>
          <p class="py-4" [innerHTML]="'INFO.DESCRIPTION' | translate : { author: authorLink }"></p>
          <div class="modal-action">
            <button (click)="closeModal()" class="btn btn-primary">
              {{ 'INFO.CLOSE' | translate }}
            </button>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button (click)="closeModal()">close</button>
        </form>
      </dialog>
    </div>
  `,
})
export class FloatingInfoButton {
  info = Info;
  authorLink = `
  <a
    href="https://bglportfolio.vercel.app/"
    target="_blank"
    class="underline"
  >
    Bru Gladiador
  </a>
`;

  openModal(): void {
    const modal = document.querySelector('dialog') as HTMLDialogElement;
    modal?.showModal();
  }

  closeModal(): void {
    const modal = document.querySelector('dialog') as HTMLDialogElement;
    modal?.close();
  }
}
