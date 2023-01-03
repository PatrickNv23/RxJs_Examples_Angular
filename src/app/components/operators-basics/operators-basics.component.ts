import { Component, OnInit } from '@angular/core';
import { filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-operators-basics',
  templateUrl: './operators-basics.component.html',
  styleUrls: ['./operators-basics.component.css']
})
export class OperatorsBasicsComponent implements OnInit {

  ngOnInit(): void {

    const newObservable = interval(1000);
    newObservable.subscribe((number) => {
      if (number % 2 === 0) {
        console.log('Even number: ' + number);
      }
    })

    newObservable.pipe(
      filter((number) => {
        return number % 2 === 0
      }),
      map((number) => {
        return 'Even map number: ' + number
      })
    ).subscribe((number) => {
      console.log(number);
    })
  }
}
