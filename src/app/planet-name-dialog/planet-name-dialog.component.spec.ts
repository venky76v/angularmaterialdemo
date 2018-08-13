import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetNameDialogComponent } from './planet-name-dialog.component';

describe('PlanetNameDialogComponent', () => {
  let component: PlanetNameDialogComponent;
  let fixture: ComponentFixture<PlanetNameDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetNameDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
