// same file
// same namespace
// different classes

namespace Shapes {
    export namespace PolygonsSimple {
        export class Triangle {
            side: number = 3;
        }
        export class Square {
            side: number = 4;
        }
    }
}

import polygons = Shapes.PolygonsSimple;
//let sq1 = new polygons.Square();
let sq2 = new Shapes.PolygonsSimple.Square();
//console.log(sq1);
console.log(sq2);