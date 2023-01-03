import { Component, OnInit } from '@angular/core';
import { bufferToggle, interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-toogle-operator',
  templateUrl: './buffer-toogle-operator.component.html',
  styleUrls: ['./buffer-toogle-operator.component.css']
})
export class BufferToogleOperatorComponent implements OnInit {

  ngOnInit(): void {
    let opening = interval(400).pipe(tap(() => console.log('open')))
    let closing = (data: number) => interval(300).pipe(tap(() => console.log('close')))
    interval(100).pipe(
      tap((data) => console.log(data)),
      bufferToggle(opening, closing),
      take(3)
    )
      .subscribe(data => console.log(data))
  }

}
