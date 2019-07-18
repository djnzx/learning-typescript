interface Level2 {
    m2(): number;
}

class Level21 implements Level2 {
    m2(): number { return 21};
}

class Level22 implements Level2 {
    m2(): number { return 22};
}

let level21 = new Level21();
let level22 = new Level22();

console.log(level21.m2())
console.log(level22.m2())

class Hello {
    constructor(
        readonly x: number,
        readonly y: number,
    ) {}
}

let hello = new Hello(1,2);
console.log(hello);
