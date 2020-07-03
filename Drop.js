class Drop
{
	constructor(x,y,r){
		var options={
			isStatic:false,
        }
      
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options);
		World.add(world, this.body);
    }	
    update(){
        if(this.body.position.y>height) {
            Matter.Body.setPosition(this.body,{x:random(0,400), y:random(0,400)})
        }
    }
	display(){
        var ballpos=this.body.position;	
        push();
        translate(ballpos.x, ballpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        ellipse(0,0,this.r, this.r);
        pop();
        
	}

}