import { Component, OnInit } from '@angular/core';
import { filter, from, interval } from 'rxjs';

@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrls: ['./filter-operator.component.css']
})
export class FilterOperatorComponent implements OnInit {

  ngOnInit(): void {
    interval(1000)
      .pipe(
        filter((n) => n % 3 === 0)
      )
      .subscribe(data => console.log(data));





    const people = from([
      { name: 'Joe', age: 31 },
      { name: 'Bob', age: 25 }
    ]);

    people.pipe(
      filter((person) => person.age > 25)
    )
      .subscribe(data => console.log(data))
  }
}