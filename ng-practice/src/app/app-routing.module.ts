import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArchitectureWithCompComponent} from './components/architecture-with-comp.component';
import {JokeDemoComponent} from './components/joke-demo.component';
import {FormComponent} from './components/react-demo/form/form.component';
import {PipeDemoComponent} from './components/pipe-demo.component';
import {SignupComponent} from './components/forms/signup/signup.component';
import {ReactiveModelFormComponent} from './components/reactive-model-form/reactive-model-form.component';

const routes: Routes = [
  {
    path: 'architectureWithComp',
    component: ArchitectureWithCompComponent
  },
  {
    path: 'jokeDemo',
    component: JokeDemoComponent
  },
  {
    path: 'reactDemo',
    component: FormComponent
  },
  {
    path: 'pipeDemo',
    component: PipeDemoComponent
  },
  {
    path: 'forms',
    component: SignupComponent
  },
  {
    path: 'reactiveModelForm',
    component: ReactiveModelFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
