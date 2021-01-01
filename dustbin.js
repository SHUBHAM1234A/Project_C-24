class Db{
    constructor(x,y,width,height) {
        this.width = width;
        this.height= height;
        this.body = Bodies.rectangle(x,y,width,height,{isStatic: true});
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x,pos.y,this.width,this.height);
    }
}