import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsBasicsComponent } from './components/operators-basics/operators-basics.component';
import { AuditOperatorComponent } from './pages/audit-operator/audit-operator.component';
import { BufferCountOperatorComponent } from './pages/buffer-count-operator/buffer-count-operator.component';
import { BufferTimeOperatorComponent } from './pages/buffer-time-operator/buffer-time-operator.component';
import { BufferToogleOperatorComponent } from './pages/buffer-toogle-operator/buffer-toogle-operator.component';
import { BufferWhenOperatorComponent } from './pages/buffer-when-operator/buffer-when-operator.component';
import { BufferoperatorComponent } from './pages/bufferoperator/bufferoperator.component';
import { DebounceOperatorComponent } from './pages/debounce-operator/debounce-operator.component';
import { DistinctUntilChangedOperatorComponent } from './pages/distinct-until-changed-operator/distinct-until-changed-operator.component';
import { DistinctUntilKeyChangedOperatorComponent } from './pages/distinct-until-key-changed-operator/distinct-until-key-changed-operator.component';
import { DistinctoperatorComponent } from './pages/distinctoperator/distinctoperator.component';
import { FilterOperatorComponent } from './pages/filter-operator/filter-operator.component';
import { MapOperatorComponent } from './pages/map-operator/map-operator.component';
import { SampleOperatorComponent } from './pages/sample-operator/sample-operator.component';
import { SkipLastOperatorComponent } from './pages/skip-last-operator/skip-last-operator.component';
import { SkipOperatorComponent } from './pages/skip-operator/skip-operator.component';
import { SkipUntilOperatorComponent } from './pages/skip-until-operator/skip-until-operator.component';
import { SkipWhileOperatorComponent } from './pages/skip-while-operator/skip-while-operator.component';
import { TakeLastOperatorComponent } from './pages/take-last-operator/take-last-operator.component';
import { TakeOperatorComponent } from './pages/take-operator/take-operator.component';
import { TakeUntilOperatorComponent } from './pages/take-until-operator/take-until-operator.component';
import { TakeWhileOperatorComponent } from './pages/take-while-operator/take-while-operator.component';

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
      },
      {
        path: "takeuntil",
        component: TakeUntilOperatorComponent
      },
      {
        path: "takewhile",
        component: TakeWhileOperatorComponent
      },
      {
        path: "skip",
        component: SkipOperatorComponent
      },
      {
        path: "skiplast",
        component: SkipLastOperatorComponent
      },
      {
        path: "skipuntil",
        component: SkipUntilOperatorComponent
      },
      {
        path: "skipwhile",
        component: SkipWhileOperatorComponent
      },
      {
        path: "distinct",
        component: DistinctoperatorComponent
      },
      {
        path: "distinctuntilchanged",
        component: DistinctUntilChangedOperatorComponent
      },
      {
        path: "distinctuntilkeychanged",
        component: DistinctUntilKeyChangedOperatorComponent
      },
      {
        path: "filter",
        component: FilterOperatorComponent
      },
      {
        path: "sample",
        component: SampleOperatorComponent
      },
      {
        path: "audit",
        component: AuditOperatorComponent
      },
      {
        path: "debounce",
        component: DebounceOperatorComponent
      },
      {
        path: "map",
        component: MapOperatorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
