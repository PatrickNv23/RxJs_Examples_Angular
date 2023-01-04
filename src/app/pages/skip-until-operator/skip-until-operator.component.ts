import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, skip, skipUntil, take } from 'rxjs';

@Component({
  selector: 'app-skip-until-operator',
  templateUrl: './skip-until-operator.component.html',
  styleUrls: ['./skip-until-operator.component.css']
})
export class SkipUntilOperatorComponent implements OnInit, AfterViewInit {
  buttonEvent!: Observable<Event>;
  numbers: number[] = [];
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.buttonEvent = fromEvent(document.getElementById("showunitlbutton")!, "click")

    interval(500).pipe(skipUntil(this.buttonEvent)).subscribe(data => {
      console.log(data)
      this.numbers.push(data);
    })
  }
}
