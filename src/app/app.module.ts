import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateTodosComponent } from './create-todos/create-todos.component';
import { ShowcaseTodosComponent } from './showcase-todos/showcase-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTodosComponent,
    ShowcaseTodosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
