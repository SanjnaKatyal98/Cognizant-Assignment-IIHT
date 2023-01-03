import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoginCompComponent } from './login-comp.component';

describe('LoginCompComponent', () => {
  let component: LoginCompComponent;
  let fixture: ComponentFixture<LoginCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test cases for login form username
  it('should have username', () => {
    const u=fixture.debugElement.query(By.css('#username'));
    expect(u).toBeTruthy();
  });
  it('should have type as text', () => {
    const u=fixture.debugElement.query(By.css('#username'));
    expect(u.nativeElement.getAttribute('type')).toEqual('text');
  });
  it('should have name as username', () => {
    const u=fixture.debugElement.query(By.css('#username'));
    expect(u.nativeElement.getAttribute('name')).toEqual('username');
  });
  it('should have minlength', () => {
    const u=fixture.debugElement.query(By.css('#username'));
    expect(u.nativeElement.getAttribute('minlength')).toEqual('5');
  });
  it('should have maxlength', () => {
    const u=fixture.debugElement.query(By.css('#username'));
    expect(u.nativeElement.getAttribute('maxlength')).toEqual('25');
  });

  //test cases for login form password
  it('should have password', () => {
    const p=fixture.debugElement.query(By.css('#password'));
    expect(p).toBeTruthy();
  });
  it('should have type as password', () => {
    const p=fixture.debugElement.query(By.css('#password'));
    expect(p.nativeElement.getAttribute('type')).toEqual('password');
  });
  it('should have name as password', () => {
    const p=fixture.debugElement.query(By.css('#password'));
    expect(p.nativeElement.getAttribute('name')).toEqual('password');
  });
  it('should have minlength', () => {
    const p=fixture.debugElement.query(By.css('#password'));
    expect(p.nativeElement.getAttribute('minlength')).toEqual('8');
  });
  it('should have maxlength', () => {
    const p=fixture.debugElement.query(By.css('#password'));
    expect(p.nativeElement.getAttribute('maxlength')).toEqual('25');
  });
});