import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewObservableComponent } from './components/new-observable/new-observable.component';
import { CancellingObservableComponent } from './components/cancelling-observable/cancelling-observable.component';
import { OperatorsBasicsComponent } from './components/operators-basics/operators-basics.component';
import { BufferoperatorComponent } from './pages/bufferoperator/bufferoperator.component';

@NgModule({
  declarations: [
    AppComponent,
    NewObservableComponent,
    CancellingObservableComponent,
    OperatorsBasicsComponent,
    BufferoperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
