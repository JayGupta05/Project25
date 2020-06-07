class Dustbin{
    constructor(x,y,width,height){
      /*  this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.image = loadImage("sprites/dustbingreen.png");*/
       
        this.rect2=Bodies.rectangle(400,620,200,20,{isStatic:true});
	    World.add(world,this.rect2);
	    this.rect3=Bodies.rectangle(this.rect2.position.x*1.25,this.rect2.position.y/1,20,100,{isStatic:true});
        World.add(world,this.rect3);
        this.rect1=Bodies.rectangle(this.rect2.position.x/1.3,this.rect2.position.y*1,20,100,{isStatic:true});
        World.add(world,this.rect1);
        this.image = loadImage("sprites/dustbingreen.png");
    }
    display(){
        /*var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);
        pop();*/
        fill("red");
        //rect(this.rect1.position.x,this.rect1.position.y,20,100);
        //rect(this.rect2.position.x,this.rect2.position.y,200,20);
        //rect(this.rect3.position.x,this.rect3.position.y,20,100);
        imageMode(CENTER);
        image(this.image,this.rect2.position.x ,this.rect2.position.y , 200, 100);
    }
}