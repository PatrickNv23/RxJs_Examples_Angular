import { Component, OnInit } from '@angular/core';
import { interval, skip, skipLast, take } from 'rxjs';

@Component({
  selector: 'app-skip-last-operator',
  templateUrl: './skip-last-operator.component.html',
  styleUrls: ['./skip-last-operator.component.css']
})
export class SkipLastOperatorComponent implements OnInit {
  ngOnInit(): void {
    interval(500)
      .pipe(
        skipLast(10)
      )
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error),
        () => console.log("complete done xd")
      )
  }
}
