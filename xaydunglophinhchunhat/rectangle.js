class Rectangle {
    width;
    height;
    x;
    y

    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }


    getArea() {
        return this.height * this.width;
    }

    getPerimeter() {
        return this.height * this.width * 2;
    }draw(color){
        let draw = document.getElementById('myCanvas').getContext('2d');
        draw.fillStyle = color;
        draw.fillRect(150,100,this.width,this.height);
    }
}

