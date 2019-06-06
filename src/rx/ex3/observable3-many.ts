import { from, PartialObserver} from "rxjs";
import { filter } from "rxjs/operators";

const data = [1, 2, 3, 4];
console.log('-- creating an Observables');
const emitter0 = from(data);
const emitter1 = emitter0.pipe(filter(x => x <= 2));
const emitter2 = emitter0.pipe(filter(x => x > 2));

console.log('-- declaring a consumer');
const consumer0: PartialObserver<number> = {
  next: value => console.log(`0th: ${value}`),
  complete: () => {
    console.log('0th: Done received');
  }
};

console.log('-- subscribing');
emitter0.subscribe(consumer0);

console.log('-- done');
