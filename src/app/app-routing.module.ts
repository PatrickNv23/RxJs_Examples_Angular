import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsBasicsComponent } from './components/operators-basics/operators-basics.component';
import { BufferCountOperatorComponent } from './pages/buffer-count-operator/buffer-count-operator.component';
import { BufferTimeOperatorComponent } from './pages/buffer-time-operator/buffer-time-operator.component';
import { BufferToogleOperatorComponent } from './pages/buffer-toogle-operator/buffer-toogle-operator.component';
import { BufferWhenOperatorComponent } from './pages/buffer-when-operator/buffer-when-operator.component';
import { BufferoperatorComponent } from './pages/bufferoperator/bufferoperator.component';
import { TakeLastOperatorComponent } from './pages/take-last-operator/take-last-operator.component';
import { TakeOperatorComponent } from './pages/take-operator/take-operator.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "operators",
    pathMatch: "full"
  },
  {
    path: "operators",
    component: OperatorsBasicsComponent,
    children: [
      {
        path: "buffer",
        component: BufferoperatorComponent
      },
      {
        path: "buffercount",
        component: BufferCountOperatorComponent
      },
      {
        path: "buffertime",
        component: BufferTimeOperatorComponent
      },
      {
        path: "buffertoogle",
        component: BufferToogleOperatorComponent
      },
      {
        path: "bufferwhen",
        component: BufferWhenOperatorComponent
      },
      {
        path: "take",
        component: TakeOperatorComponent
      },
      {
        path: "takelast",
        component: TakeLastOperatorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
