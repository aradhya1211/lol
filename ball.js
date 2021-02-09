class ball{
    constructor(x,y,r){
        var options = {
            "resolution":0.8,
            'friction':1,
            'density':0.9,
            'isStatic':false
           
        };
        this.r = r;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, (this.r-20),options)
        World.add(world , this.body);
    };
    display(){
        var circlepos = this.body.position;
        push();
        translate(circlepos.x, circlepos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("orange");
        fill('yellow');
        ellipse(0,0,this.r, this.r);
        pop();
        
    }
}