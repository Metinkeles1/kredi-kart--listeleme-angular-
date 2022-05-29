import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  isDisplay = false;

  getName() {
    return this.model.user;
  }

  getItems() {
    return this.model.items;
  }

  addItem(Name: string, Number: string) {
    if (Name === "" || Number === "") {
      alert("Lütfen bilgileri eksiksiz giriniz.");
    } else {
      this.model.items.push(new TodoItem(Name, Number));
    }
  }

  deleteItem(i: number) {
    this.model.items.splice(i, 1);
  }

}
