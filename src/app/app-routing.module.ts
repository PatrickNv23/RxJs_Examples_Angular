import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsBasicsComponent } from './components/operators-basics/operators-basics.component';
import { BufferoperatorComponent } from './pages/bufferoperator/bufferoperator.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
