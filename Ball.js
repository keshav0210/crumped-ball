class Ball{
 constructor(x,y){
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }  

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
