class Drop
{
 constructor()
 {
     var options= {
         restitution:0.6,
         density:0.05
     }
     this.yspeed=random(15,25);
     this.body=Bodies.circle(random(10,400),random(-200,-100),2,options);

     World.add(world,this.body);
 }

 fall()
 {
    this.y=this.y+this.yspeed;
    if(this.y>390)
    this.y=random(-200,-100);
    
 }

 display()
 {
     var pos=this.body.position;
     push();
     translate(pos.x,pos.y);
     rotate(this.body.angle);
     ellipseMode(RADIUS);
     ellipse(0,0,2);
     pop();
 }







}
