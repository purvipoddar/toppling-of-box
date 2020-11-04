class Box{
    constructor(x,y,width,height){

        var options = {
            restitution : 0.8,
            friction : 0.3,
            density : 0.5

        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.w = width;
        this.h= height;
        World.add(myWorld,this.body);
        

    }
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red")
        stroke("black");
        strokeWeight(3);
        rect(0,0,this.w,this.h);
        pop();

    }
}