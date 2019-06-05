import { Observable } from "rxjs";

const greetingLady21 = new Observable(observer => {
  observer.next('Hello! I am glad to get to know you.');
  observer.complete();
});

console.log('Before calling subscribe on Observable');

greetingLady21.subscribe({
  next: val => console.log(val),
  complete: () => console.log('End of conversation with preety lady')
});

console.log('After calling subscribe on Observable (proof of being able to execute sync)');
