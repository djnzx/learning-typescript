import { Observable, PartialObserver, Subscriber } from "rxjs";

const emitter = new Observable(observer => {
  let counter = 0;
  const interval = setInterval(() => {
    if (counter<20) {
      observer.next(counter++);
    } else {
      observer.complete();
    }

  }, 1000);

  return () => clearInterval(interval);
});

const consumer1: PartialObserver<number> = {
  next: value => { if (value < 10) console.log(`1st: ${value}`); },
  // complete: () => { subscription1.unsubscribe(); }
};
const consumer2: PartialObserver<number> = {
  next: value => { if (value > 10) console.log(`2nd: ${value}`); },
  // complete: () => { subscription2.unsubscribe(); }
};

const subscription1 = emitter.subscribe(consumer1);
const subscription2 = emitter.subscribe(consumer2);

setTimeout(
  // () => { subscription1.unsubscribe(); subscription2.unsubscribe(); },
  () => {},
  200000
);

console.log('Before');
