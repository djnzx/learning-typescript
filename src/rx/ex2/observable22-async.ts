import { Observable } from "rxjs";

const tiredGreetingLady22 = new Observable(observer => {
  setTimeout(() => {
    observer.next('Hello! I am glad to get to know you.');
    observer.complete();
  }, 2000);
});

console.log('Before calling subscribe on Observable');

tiredGreetingLady22.subscribe({
  next: val => console.log(val),
  complete: () => console.log('End of conversation with tired preety lady')
});

console.log('After calling subscribe on Observable (proof of being able to execute async)');
