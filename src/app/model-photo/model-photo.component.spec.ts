import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPhotoComponent } from './model-photo.component';

describe('ModelPhotoComponent', () => {
  let component: ModelPhotoComponent;
  let fixture: ComponentFixture<ModelPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelPhotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
