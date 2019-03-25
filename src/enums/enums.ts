enum Direction {
  Up = 1,
  Down, // 2
  Left, // 3
  Right,
}

let text = "Down";
console.log(Direction[text]);

console.log(
  Direction[1]
);

const v: number = 2;

// @ts-ignore
const v1 = Direction[v]; // string
const v2 = Direction[v1];
console.log(typeof v1);
console.log(typeof v2);

switch (v) {
  case Direction.Up:
    break;
  case Direction.Down:
    console.log("UP resolved")
    break;
  case Direction.Left:
    break;
  case Direction.Right:
    break;
}

const vs: Direction = Direction.Up;
switch (vs) {
  case Direction.Up:
    break;
  // case Direction.Down:
  //   console.log("UP resolved")
  //   break;
  // case Direction.Left:
  //   break;
  // case Direction.Right:
  //   break;
}


