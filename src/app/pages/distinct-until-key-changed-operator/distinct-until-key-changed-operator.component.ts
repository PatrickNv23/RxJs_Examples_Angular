import { Component, OnInit } from '@angular/core';
import { distinctUntilKeyChanged, of } from 'rxjs';

@Component({
  selector: 'app-distinct-until-key-changed-operator',
  templateUrl: './distinct-until-key-changed-operator.component.html',
  styleUrls: ['./distinct-until-key-changed-operator.component.css']
})
export class DistinctUntilKeyChangedOperatorComponent implements OnInit {

  ngOnInit(): void {
    of(
      { age: 4, name: 'Foo' },
      { age: 7, name: 'Bar' },
      { age: 5, name: 'Foo' },
      { age: 6, name: 'Foo' }
    )
      .pipe(
        distinctUntilKeyChanged('name')
      )
      .subscribe(data => console.log(data));


    of(
      { age: 4, name: 'Foo' },
      { age: 7, name: 'Bar' },
      { age: 5, name: 'Foo' },
      { age: 6, name: 'Foo' }
    )
      .pipe(
        distinctUntilKeyChanged('name', (prev, curr) => prev.substring(0, 3) === prev.substring(0, 3))
      )
      .subscribe(data => console.log(data));
  }
}
