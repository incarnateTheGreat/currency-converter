import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterComponent } from './converter.component';
import { FormsModule } from '@angular/forms';

describe('ConverterComponent', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [ FormsModule ],
      declarations: [ ConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
