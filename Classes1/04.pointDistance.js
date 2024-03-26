class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    static distane (pointA, pointB){
        let xDistance = Math.abs(pointB.x - pointA.x);
        let yDistance = Math.abs(pointB.y - pointA.y);
        let distance = Math.sqrt(xDistance ** 2 + yDistance ** 2);
        return distance
    }
}
let p1= new Point(5,5);
let p2 = new Point(9,8);
console.log(Point.distane(p1, p2));