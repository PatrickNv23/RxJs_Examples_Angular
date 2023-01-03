import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-cancelling-observable',
  templateUrl: './cancelling-observable.component.html',
  styleUrls: ['./cancelling-observable.component.css']
})
export class CancellingObservableComponent implements OnInit {

  timerSubscription!: Subscription;
  childSubscription!: Subscription;

  ngOnInit(): void {

    const newObservable = interval(1000);
    const newObservable2 = interval(1000);
    this.timerSubscription = newObservable.subscribe(data => {
      console.log(new Date().toLocaleDateString() + '' + data);
    })
    this.childSubscription = newObservable2.subscribe(data => console.log(data));
    this.timerSubscription.add(this.childSubscription);
  }

  cancelTimer() {
    console.log("Cancel the observable");
    this.timerSubscription.unsubscribe();
  }

}
