import { Component, OnInit } from '@angular/core';
import { distinct, from, of } from 'rxjs';

@Component({
  selector: 'app-distinctoperator',
  templateUrl: './distinctoperator.component.html',
  styleUrls: ['./distinctoperator.component.css']
})
export class DistinctoperatorComponent implements OnInit {

  ngOnInit(): void {
    of(1, 2, 3, 4, 5, 1, 2, 3, 8, 9, 7, 5, 6, 1, 2, 3, 85, 8, 6, 4)
      .pipe(
        distinct()
      )
      .subscribe(data => console.log(data));

    const object1 = { id: 1, name: "object 1" };
    const object2 = { id: 2, name: "object 2" };
    const object3 = { id: 3, name: "object 3" };
    const object4 = { id: 1, name: "object 4" };

    from([object1, object2, object3, object4])
      .pipe(
        distinct((ob) => ob.id)
      )
      .subscribe(data => console.log(data));
  }
}
