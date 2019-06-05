import { Observable } from "rxjs";

const greetingLady21 = new Observable(observer => {
  observer.next('=2');
  observer.complete();
});

console.log('=1');

greetingLady21.subscribe({
  next: val => console.log(val),
  complete: () => console.log('=3')
});

console.log('=4');
