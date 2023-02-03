import { Observable } from 'rxjs';
import { RemoveUser, showAll } from './../store/action/user-action';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { User } from '../models/user';
import { AddUser } from '../store/action/user-action';
import { selectUser } from '../store/selector';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
public users:Observable<User[]>;
faTrash = faTrash;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.users = this.store.pipe(select(selectUser));

  }

  userForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    age: new FormControl()
});

onFormSubmit(): void {
  console.log('Name:' + this.userForm.value);
  this.addUser(this.userForm.value.name,this.userForm.value.email,this.userForm.value.age)
  this.userForm.reset({
    name:"",
    email:"",
    age:""
  })
}

  addUser(name: string, email: string,age:string) {
    this.store.dispatch(new AddUser({name: name, email: email,age:age}))
  }
  deleteUser(name: string) {
    this.store.dispatch(new RemoveUser(name))
  }
  showAll(){
    this.store.dispatch(new showAll());
  }

}
