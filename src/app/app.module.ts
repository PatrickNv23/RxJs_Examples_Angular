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
    TakeLastOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
