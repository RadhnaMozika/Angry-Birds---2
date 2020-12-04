class Log extends BaseClass{
    constructor(x,y,h, angle){
        super(x, y, 20, h);

        Body.setDensity(this.body, 1);
        Body.setAngle(this.body, angle);
        
        
        this.image=loadImage("sprites/wood2.png");
    }
    
}