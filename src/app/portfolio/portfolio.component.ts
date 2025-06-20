import { Component } from '@angular/core';
import { ModelPhotoComponent } from '../model-photo/model-photo.component';

@Component({
  selector: 'app-portfolio',
  imports: [ModelPhotoComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent {
  images: string[] = [
    "assets/images/poert1.png",
    "assets/images/port2.png",
    "assets/images/port3.png",
    "assets/images/poert1.png",
    "assets/images/port2.png",
    "assets/images/port3.png"
  ];

  modalOpen = false;
  selectedImage = '';

  open(image: string): void {
    this.selectedImage = image;
    this.modalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.modalOpen = false;
    document.body.style.overflow = 'auto';
  }
}