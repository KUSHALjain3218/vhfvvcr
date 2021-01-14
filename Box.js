class Box{
    constructor(x,y,width,height){
    var    groundOptions={
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,groundOptions);

        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.visibility=255;
        World.add(world,this.body);
 }
 score(){
  if(this.visibility===0){
    score = score + 200;
  }
  
  
  
  
  
  }
 display(){
 
        
         push()

         //console.log(this.body.speed);
         if(this.body.speed<3){
            rectMode(CENTER);
            fill("white");
             rect(this.body.position.x,this.body.position.y,this.width,this.height);
         }
         else{
           World.remove(world,this.body);

          
           pop();
         }
        }
       
};