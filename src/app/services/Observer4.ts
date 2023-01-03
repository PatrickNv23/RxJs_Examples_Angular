import { Observer } from "rxjs";

export class Observer4 implements Observer<number> {
  next(data: number) {
    console.log(data)
  }

  error(error: string) {
    console.log(error)
  }

  complete() {
    console.log("Complete done Observer class")
  }
}