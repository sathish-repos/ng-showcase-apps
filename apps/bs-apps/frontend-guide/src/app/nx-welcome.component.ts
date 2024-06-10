import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'idc-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: ` <button class="btn btn-primary">Hiii</button> `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
