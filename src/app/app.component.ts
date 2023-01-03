import { AfterViewInit, Component } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'rxjs-angular';

  postArray = [
    { title: 'Post1', description: 'Post1 description' },
    { title: 'Post2', description: 'Post2 description' },
    { title: 'Post3', description: 'Post3 description' },
  ]

  postArrayObservable$ = from(this.postArray);

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolve the promise")
    }, 3000)
  })

  promiseObservable$ = from(this.promise);

  constructor() {
    this.postArrayObservable$.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log("Complete done!")
    })

    this.promiseObservable$.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log("Complete done promise")
    })
  }
  ngAfterViewInit(): void {
    fromEvent(document.getElementById('a_click')!, 'click').subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log("Complete done click handlers")
    })
  }
}
