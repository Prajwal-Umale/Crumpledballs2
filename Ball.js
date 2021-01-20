class Ball {

    constructor (x,y,radius){
    var options = {
        isStatic : false,
        restitution : 0.3,
        firction : 0.5,
        density : 1.2,
        
    }

    this.body=Bodies.circle(x,y,radius,options);
    
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.image=loadImage("paper.png");

    World.add(world,this.body);
    }

    display(){
     var pos=this.body.position;
     push();
     translate(pos.x,pos.y);
     image(this.image,0,0,this.radius,this.radius);  
     pop();     
    }
}