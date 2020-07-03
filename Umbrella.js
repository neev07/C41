class Umbrella{
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.image = loadImage("BMU.jpg");
        World.add(world, this.body);
    }
    display(){
        var ballpos=this.body.position;	
        push();
        translate(ballpos.x, ballpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        rect(this.x,this.x,this.width, this.height);
        pop()
    }
}