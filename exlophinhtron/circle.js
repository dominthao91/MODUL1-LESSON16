class Circle{
    radius;
    color;
    constructor(radius,color) {
        this.radius = radius;
        this.color =color;
    }
    getRadius(){
        return this.radius;
    }
    getArea(){
        return Math.PI * radius * radius;
    }
}
let circle =new Circle(2);
let radius = circle.getRadius();
let area =circle.getArea();
alert("radius: " + radius + "; area: " + area);