import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, from, of } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed-operator',
  templateUrl: './distinct-until-changed-operator.component.html',
  styleUrls: ['./distinct-until-changed-operator.component.css']
})
export class DistinctUntilChangedOperatorComponent implements OnInit {

  ngOnInit(): void {
    // forma 1
    of(1, 1, 1, 2, 2, 2, 1, 1, 1, 3, 3, 3)
      .pipe(
        distinctUntilChanged()
      )
      .subscribe(data => console.log(data));


    // forma 2
    const obj1 = { id: 1, precio: 50 };
    const obj2 = { id: 1, precio: 60 };
    const obj3 = { id: 2, precio: 50 };
    const obj4 = { id: 3, precio: 50 };
    const obj5 = { id: 4, precio: 70 };

    from([obj1, obj2, obj3, obj4, obj5])
      .pipe(
        distinctUntilChanged((previous, current) => {
          return (
            previous.id === current.id || previous.precio === current.precio
          )
        })
      )
      .subscribe(data => console.log(data));


    // forma 3
    const accountUpdates$ = of(
      { updatedBy: 'blesh', data: [] },
      { updatedBy: 'blesh', data: [] },
      { updatedBy: 'ncjamieson', data: [] },
      { updatedBy: 'ncjamieson', data: [] },
      { updatedBy: 'blesh', data: [] }
    );

    accountUpdates$.pipe(
      distinctUntilChanged(undefined!, (update) => update.updatedBy)
    ).subscribe(data => console.log(data));
  }
}
