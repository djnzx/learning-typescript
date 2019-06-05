import { Observable } from "rxjs";

// lazy
console.log(`// 1. Observable. Lazy`);
const greetingLady1 = new Observable(observer => {
  console.log('Inside Observable (proof of being lazy)');
  observer.next('Hello! I am glad to get to know you.');
  observer.complete();
});

console.log('Before calling subscribe on Observable');

greetingLady1.subscribe({
  next: val => console.log(val),
  complete: () => console.log('End of conversation with preety lady')
});

