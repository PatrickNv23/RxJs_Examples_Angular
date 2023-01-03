import { AfterViewInit, Component } from '@angular/core';
import { buffer, fromEvent, interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-bufferoperator',
  templateUrl: './bufferoperator.component.html',
  styleUrls: ['./bufferoperator.component.css']
})
export class BufferoperatorComponent implements AfterViewInit {

  intervalData: number[] = [];
  showData$!: Observable<Event>;

  ngAfterViewInit(): void {
    this.showData$ = fromEvent(document.getElementById("showButton")!, 'click');
  }
  startInterval() {
    interval(1000).pipe(
      tap(data => console.log(data)),
      buffer(this.showData$)
    )
      .subscribe((data: number[]) => {
        this.intervalData.push(...data);
      })
  }
}
