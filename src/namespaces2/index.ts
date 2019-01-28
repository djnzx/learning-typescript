// same file
// same namespace
// different classes

namespace Shapes {
    export namespace PolygonsExtra {
        export class Triangle3 {
            side: number = 3;
        }
        export class Square4 {
            side: number = 4;
        }
    }
}

let polygons = Shapes.PolygonsExtra;
let sq3 = new polygons.Square4();
let sq4 = new Shapes.PolygonsExtra.Square4();
//let sq5 = new Shapes.Polygons.Square();
console.log(sq3);
console.log(sq4);
//console.log(sq5);