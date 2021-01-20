class Gdustbin {
 
    constructor(x,y){
        this.body=this.body = Bodies.rectangle(x,y);
        this.x=x;
        this.y=y;
        this.image=loadImage("dustbingreen.png");

    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y);
       
    }

}