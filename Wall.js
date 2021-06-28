class Wall {
    constructor(posX) {
      this.rw = random(100, 500);// width of platform will be between 100 and 500
      this.rh = random([260,190,190,190,260,260,260,260,260,260,190,190]); // height of platform will be taken from array given to random function

      this.rx = posX; //setting the x posing where wall will be created  
      this.ry = height-random([550,350])//setting y position where wall will be created 
      this.spt=createSprite(this.rx, this.ry); //using rx,ry
      this.spt.shapeColor="green";
      this.spt.addAnimation("ground",wallAnimation);
      this.spt.scale=0.1;
    
    }
  
  
}
  


