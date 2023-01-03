import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer4 } from 'src/app/services/Observer4';

@Component({
  selector: 'app-new-observable',
  templateUrl: './new-observable.component.html',
  styleUrls: ['./new-observable.component.css']
})
export class NewObservableComponent implements OnInit {

  ngOnInit(): void {
    const newObservable$ = new Observable<number>((observer) => {
      for (let i = 0; i <= 5; i++) {
        if (i === 4) {
          observer.error("unknown error: i value is 4");
        }
        observer.next(i);
      }
      observer.complete(); // notifica a los observadores que se ha culminado la tarea
    })

    let observer = {
      next: (data: number) => console.log(data),
      error: (error: string) => console.log(error),
      complete: () => console.log("complete all done")
    }

    // 1ra forma
    newObservable$.subscribe(observer);

    //2da forma
    newObservable$.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log("Complete done")
    })

    // 3ra forma
    newObservable$.subscribe(
      (data) => console.log(data),
      (error) => console.log(error),
      () => console.log('Complete done'))


    // 4ta forma
    newObservable$.subscribe(new Observer4());

  }

}
