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
import { CleanPipePipe } from './pipes/clean-pipe.pipe';
import { SignupComponent } from './components/forms/signup/signup.component';

import { AppRoutingModule } from './app-routing.module';
import { ArchitectureWithCompComponent } from './components/architecture-with-comp.component';
import { JokeDemoComponent } from './components/joke-demo.component';
import { PipeDemoComponent } from './components/pipe-demo.component';
import { ReactiveModelFormComponent } from './components/reactive-model-form/reactive-model-form.component';
import { DiProvidersComponent } from './components/di-providers/di-providers.component';

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
    MyImagePipePipe,
    CleanPipePipe,
    SignupComponent,
    ArchitectureWithCompComponent,
    JokeDemoComponent,
    PipeDemoComponent,
    ReactiveModelFormComponent,
    DiProvidersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
