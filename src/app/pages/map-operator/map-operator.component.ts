import { Component, OnInit } from '@angular/core';
import { from, interval, map, of, single } from 'rxjs';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.css']
})
export class MapOperatorComponent implements OnInit {

  ngOnInit(): void {
    // single operator
    interval(1000)
      .pipe(
        single((val) => val === 5)
      )
      .subscribe(data => console.log(data));


    of(1, 2, 3, 4, 5, 5, 6, 8)
      .pipe(
        single((val) => val === 5)
      )
      .subscribe(data => console.log(data), error => console.log(error));

    // map operator
    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(
        map((val) => val * 5)
      )
      .subscribe(data => console.log(data))


    const people = from([
      { name: 'Joe', age: 30 },
      { name: 'Frank', age: 20 },
      { name: 'Ryan', age: 50 }
    ]);

    people
      .pipe(
        map((person) => ({ name: person.name, age: person.age * 2 }))
      )
      .subscribe(data => console.log(data))
  }
}
