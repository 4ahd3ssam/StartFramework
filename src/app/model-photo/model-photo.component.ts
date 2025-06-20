import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-model-photo',
  templateUrl: './model-photo.component.html',
  styleUrl: './model-photo.component.css'
})
export class ModelPhotoComponent {
  @Input() isOpen = false;
  @Input() image = "";
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }
}