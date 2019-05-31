class ZIO<T> {
    constructor(readonly run: () => T) {}

    static of<T>(val: T) {
        return new ZIO(() => val);
    }

    map<B>(fab: (a: T) => B) {
        return new ZIO(() => fab(this.run()));
    }

    chain<B>(next: (a: T) => ZIO<B>) {
        return new ZIO(() => next(this.run()).run());
    }
}

const zio1 = new ZIO(() => console.log('1st'));
const zio2 = new ZIO(() => console.log('2nd'));
const zio3 = new ZIO(() => console.log('3rd'));

console.log(`ZIO:chain`);
zio1.chain(() => zio2).chain(() => zio3).run();

console.log(`ZIO:map`);
const final =
    ZIO.of(5)
    .map(x => x + 1)
    .map(x => x * 2);
    //.run();
console.log(final.run());