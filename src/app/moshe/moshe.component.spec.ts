import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosheComponent } from './moshe.component';

describe('MosheComponent', () => {
  let component: MosheComponent;
  let fixture: ComponentFixture<MosheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MosheComponent]
    });
    fixture = TestBed.createComponent(MosheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
