import { Component, OnInit } from '@angular/core';
import { interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while-operator',
  templateUrl: './take-while-operator.component.html',
  styleUrls: ['./take-while-operator.component.css']
})
export class TakeWhileOperatorComponent implements OnInit {
  ngOnInit(): void {
    interval(500)
      .pipe(
        takeWhile((x, i) => x < 5, true)
      )
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error),
        () => console.log("complete done xd")
      )
  }
}
