import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewObservableComponent } from './components/new-observable/new-observable.component';
import { CancellingObservableComponent } from './components/cancelling-observable/cancelling-observable.component';
import { OperatorsBasicsComponent } from './components/operators-basics/operators-basics.component';
import { BufferoperatorComponent } from './pages/bufferoperator/bufferoperator.component';
import { BufferCountOperatorComponent } from './pages/buffer-count-operator/buffer-count-operator.component';
import { BufferTimeOperatorComponent } from './pages/buffer-time-operator/buffer-time-operator.component';
import { BufferToogleOperatorComponent } from './pages/buffer-toogle-operator/buffer-toogle-operator.component';
import { BufferWhenOperatorComponent } from './pages/buffer-when-operator/buffer-when-operator.component';
import { TakeOperatorComponent } from './pages/take-operator/take-operator.component';
import { TakeLastOperatorComponent } from './pages/take-last-operator/take-last-operator.component';
import { TakeUntilOperatorComponent } from './pages/take-until-operator/take-until-operator.component';
import { TakeWhileOperatorComponent } from './pages/take-while-operator/take-while-operator.component';
import { SkipOperatorComponent } from './pages/skip-operator/skip-operator.component';
import { SkipLastOperatorComponent } from './pages/skip-last-operator/skip-last-operator.component';
import { SkipUntilOperatorComponent } from './pages/skip-until-operator/skip-until-operator.component';
import { SkipWhileOperatorComponent } from './pages/skip-while-operator/skip-while-operator.component';
import { DistinctoperatorComponent } from './pages/distinctoperator/distinctoperator.component';
import { DistinctUntilChangedOperatorComponent } from './pages/distinct-until-changed-operator/distinct-until-changed-operator.component';
import { DistinctUntilKeyChangedOperatorComponent } from './pages/distinct-until-key-changed-operator/distinct-until-key-changed-operator.component';
import { FilterOperatorComponent } from './pages/filter-operator/filter-operator.component';
import { SampleOperatorComponent } from './pages/sample-operator/sample-operator.component';
import { AuditOperatorComponent } from './pages/audit-operator/audit-operator.component';
import { DebounceOperatorComponent } from './pages/debounce-operator/debounce-operator.component';
import { MapOperatorComponent } from './pages/map-operator/map-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    NewObservableComponent,
    CancellingObservableComponent,
    OperatorsBasicsComponent,
    BufferoperatorComponent,
    BufferCountOperatorComponent,
    BufferTimeOperatorComponent,
    BufferToogleOperatorComponent,
    BufferWhenOperatorComponent,
    TakeOperatorComponent,
    TakeLastOperatorComponent,
    TakeUntilOperatorComponent,
    TakeWhileOperatorComponent,
    SkipOperatorComponent,
    SkipLastOperatorComponent,
    SkipUntilOperatorComponent,
    SkipWhileOperatorComponent,
    DistinctoperatorComponent,
    DistinctUntilChangedOperatorComponent,
    DistinctUntilKeyChangedOperatorComponent,
    FilterOperatorComponent,
    SampleOperatorComponent,
    AuditOperatorComponent,
    DebounceOperatorComponent,
    MapOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
