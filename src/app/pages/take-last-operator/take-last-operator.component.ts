import { Component, OnInit } from '@angular/core';
import { interval, of, take, takeLast } from 'rxjs';

@Component({
  selector: 'app-take-last-operator',
  templateUrl: './take-last-operator.component.html',
  styleUrls: ['./take-last-operator.component.css']
})
export class TakeLastOperatorComponent implements OnInit {

  ngOnInit(): void {
    interval(1000)
      .pipe(
        take(10),
        takeLast(5)
      )
      .subscribe((data) => console.log(data))
  }

}
