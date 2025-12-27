import { Component } from '@angular/core';
import { LucideAngularModule, Info } from 'lucide-angular';

@Component({
  selector: 'app-floating-info-button',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './floating-info-button.html',
  styleUrls: ['./floating-info-button.css'],
})
export class FloatingInfoButton {
  readonly info = Info;
}
