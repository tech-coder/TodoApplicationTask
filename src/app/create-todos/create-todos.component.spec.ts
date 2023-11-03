import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodosComponent } from './create-todos.component';
import { By } from '@angular/platform-browser';

describe('CreateTodosComponent', () => {
  let component: CreateTodosComponent;
  let fixture: ComponentFixture<CreateTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTodosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show warning message when no todos are added ', () => {
    spyOn(window, 'alert');
    const button = fixture.debugElement.query(
      By.css('button#addTodo')
    ).nativeElement;
    button.click();
    fixture.detectChanges();
    expect(window.alert).toHaveBeenCalledWith(component.warningMessage);
  });

  it('should add a new todo when button clicked ', () => {
    spyOn(window, 'alert');
    const input = fixture.debugElement.query(
      By.css('input#todos')
    ).nativeElement;
    const button = fixture.debugElement.query(
      By.css('button#addTodo')
    ).nativeElement;
    input.value = 'bring vegetables';
    button.click();
    fixture.detectChanges();
    expect(component.todo).toBe('bring vegetables');
  });
});
