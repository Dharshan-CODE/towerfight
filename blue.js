class blue extends BaseClass{
    constructor(x,y){
      super(x,y,30,30);
     
    }
  
    display() {
      if(this.body.speed<3){
        fill('blue');
        stroke("white");
        super.display();
      }
     else{
       World.remove(world,this.body);
       push();
       this.Visibility = this.Visibility-5;
       tint(255,this.Visibility);
     
       pop();
     }
    }
    Score(){
      if(this.Visibility < 0 && this.Visibility > -500){
        score = score+5;
      }
    }
  }
  