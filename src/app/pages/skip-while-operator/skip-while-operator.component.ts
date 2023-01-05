import { Component, OnInit } from '@angular/core';
import { interval, skipWhile } from 'rxjs';

@Component({
  selector: 'app-skip-while-operator',
  templateUrl: './skip-while-operator.component.html',
  styleUrls: ['./skip-while-operator.component.css']
})
export class SkipWhileOperatorComponent implements OnInit {

  ngOnInit(): void {
    interval(1000)
      .pipe(
        skipWhile((number) => number < 5)
      )
      .subscribe(data => console.log(data));
  }
}
