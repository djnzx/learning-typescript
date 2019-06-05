import { Observable } from "rxjs";

const notifications3 = new Observable(observer => {
  const interval = setInterval(() => {
    observer.next('New notification');
  }, 2000);

  return () => clearInterval(interval);
});

const subscription = notifications3.subscribe({
  next: val => console.log(val)
});

setTimeout(
  () => subscription.unsubscribe(),
  8000
);

console.log('Before');
