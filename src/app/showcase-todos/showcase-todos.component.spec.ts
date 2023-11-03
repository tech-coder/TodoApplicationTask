import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { ShowcaseTodosComponent } from './showcase-todos.component';
import { By } from '@angular/platform-browser';

describe('ShowcaseTodosComponent', () => {
  let component: ShowcaseTodosComponent;
  let fixture: ComponentFixture<ShowcaseTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowcaseTodosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show todo items', () => {
    component.todoList = mockData;
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('label')).nativeElement;
    fixture.detectChanges();
    expect(input.textContent).toBe(' bring veggies ');
  });

  it('should trigger onComplete when checkbox is checked', fakeAsync(() => {
    component.todoList = mockData;
    let onCompleteSpy = spyOn(component, 'onComplete').and.callThrough();
    fixture.detectChanges();
    const checkbox = fixture.debugElement.query(By.css('input'));
    checkbox.triggerEventHandler('change', { target: { checked: true } });
    tick();
    fixture.detectChanges();
    expect(onCompleteSpy).toHaveBeenCalled();
  }));

  it('should call remove item when button clicked', () => {
    component.todoList = mockData;
    spyOn(component, 'removeItem');
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    fixture.detectChanges();
    expect(component.removeItem).toHaveBeenCalled();
  });
});

export const mockData = [
  {
    value: 'bring veggies',
    completed: false,
  },
];
