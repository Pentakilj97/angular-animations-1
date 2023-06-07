import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatBotComponent } from './fat-bot.component';

describe('FatBotComponent', () => {
  let component: FatBotComponent;
  let fixture: ComponentFixture<FatBotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FatBotComponent]
    });
    fixture = TestBed.createComponent(FatBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
