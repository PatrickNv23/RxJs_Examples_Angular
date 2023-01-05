import { Component, OnInit } from '@angular/core';
import { debounce, elementAt, first, ignoreElements, interval, last, take } from 'rxjs';

@Component({
  selector: 'app-debounce-operator',
  templateUrl: './debounce-operator.component.html',
  styleUrls: ['./debounce-operator.component.css']
})
export class DebounceOperatorComponent implements OnInit {

  ngOnInit(): void {
    interval(1000)
      .pipe(
        debounce((value) => interval(value * 100)),
        elementAt(3),
        first(),
        last(),
        ignoreElements()
      )
      .subscribe(data => console.log(data),
        error => console.log(error),
        () => console.log("Complete"));
  }
}