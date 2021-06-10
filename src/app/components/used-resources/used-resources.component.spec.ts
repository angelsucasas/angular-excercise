import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedResourcesComponent } from './used-resources.component';

describe('UsedResourcesComponent', () => {
  let component: UsedResourcesComponent;
  let fixture: ComponentFixture<UsedResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
