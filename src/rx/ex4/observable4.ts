import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const notifications4 = new Observable(observer => {
  const interval = setInterval(() => {
    observer.next('New notification');
  }, 2000);

  return () => clearInterval(interval);
});

const enhancedNotifications4 = notifications4.pipe(
  map(message => `${message} ${new Date()}`)
);

const subscription = enhancedNotifications4.subscribe(console.log);

setTimeout(() => subscription.unsubscribe(), 8000);
