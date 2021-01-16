class Box{
    constructor(x,y,width,height){
        Option={restitution:0.8
        }
        this.body=Bodies.rectangle(x,y,width,height,Option)
        this.width=width;
        this.height=height;
    
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        
        push ();

        rectMode(CENTER) 
        rotate (RADIANS)
        translate (pos.x,pos.y)
        fill (225);
        rect(0,0,this.width,this.height);
        
        pop ();
        
    
    
    
    }
    
    };