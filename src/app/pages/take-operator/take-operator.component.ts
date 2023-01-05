import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html',
  styleUrls: ['./take-operator.component.css']
})
export class TakeOperatorComponent implements OnInit {

  ngOnInit(): void {
    interval(500)
      .pipe(
        take(3)
      )
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error),
        () => console.log("complete done xd")
      )
  }
}
