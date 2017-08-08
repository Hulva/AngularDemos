import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  AppComponent
} from './app.component';
import {
  HeaderComponent
} from './components/header/header.component';
import {
  SidebarComponent
} from './components/sidebar/sidebar.component';
import {
  ContentComponent
} from './components/content/content.component';
import {
  JokeComponent
} from './components/joke/joke/joke.component';
import {
  JokeListComponent
} from './components/joke/joke-list/joke-list.component';
import {
  JokeFormComponent
} from './components/joke/joke-form/joke-form.component';
import {
  CardHoverDirective
} from './directives/card-hover.directive';
import {
  FormComponent
} from './components/react-demo/form/form.component';
import { AsyncPipeComponent } from './components/pipes/async-pipe/async-pipe.component';
import { MyImagePipePipe } from './components/pipes/my-image-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    CardHoverDirective,
    FormComponent,
    AsyncPipeComponent,
    MyImagePipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
