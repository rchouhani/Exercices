export const add = (a: number, b: number) => {
    return a + b;
};

export class Point {
    constructor(public x: number, public y: number){}

    add(a: number, b: number) {
    return new Point(this.x + a, this.y + b)
    }

    substract(g: number, h:number) {
        return new Point(this.x - g, this.y - h)
    }

    multiply(n: number, m: number) {
        return new Point(this.x * n, this.y * m)
    }

    addPoint(point: Point) {
        return new Point (this.x + point.x, this.y + point.y)
    }
}


//de la ligne "export class Point à la fin de addPoint , c'est l'équivalent dans la syntaxe que l'on connait

// export class Point {
//     public x: number;
//     public y: number;

// constructor(x: number, y: number){
//     this.x = x;
//     this.y = y
// }
// }