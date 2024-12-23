import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamagoshiComponent } from './tamagoshi.component';

describe('TamagoshiComponent', () => {
  let component: TamagoshiComponent;
  let fixture: ComponentFixture<TamagoshiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TamagoshiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TamagoshiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
