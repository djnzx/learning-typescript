class ZIO<T> {
    constructor(readonly run: () => T) {}

    static of<T>(val: T) {
        return new ZIO(() => val);
    }

    map<B>(fab: (a: T) => B) {
        return new ZIO(() => fab(this.run()));
    }

    apply<B>(fab: ZIO<(a: T) => B>): ZIO<B> {
        return new ZIO(() => fab.run()(this.run()));
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

console.log(`ZIO:apply`);
const zap = new ZIO(() => n => `_${n}_`);
const final2 =
    ZIO.of(5)
        .apply(zap);
        //.run()
console.log(final2.run());
