let trans = 180;
class Bubble {
  constructor(x, y, r, onColor, offColor, onStroke, offStroke, Xspeed, Yspeed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.Xspeed = Xspeed;
    this.Yspeed = Yspeed;
    this.onColor = onColor;    
    this.offColor = offColor;
    this.onStroke = onStroke;
    this.offStroke = offStroke;
    this.currentStroke = this.offStroke;
    this.currentColor = this.offColor;
  }

  bouncing() {
    if (this.x > width || this.x < 0) {
      this.Xspeed = this.Xspeed * -1 +1;
      this.r = this.r +random(10,15)
      trans = random(180, 220)
    }
    if (this.y > height || this.y < 0) {
      this.Yspeed = this.Yspeed * -1 +1;
      this.r = this.r +random(10,15)
      trans = random(180, 220)
    }
  }
  
  coloring(){
    if (!click&& this.y >= windowHeight - 350){
      this.currentColor = this.offColor;
    } else{
      this.currentColor = this.onColor;
    }
    if (click){
      this.currentColor = color(255, random(50, 150), 0, trans);
      this.currentStroke = this.onStroke;
    } else{
      this.currentStroke = this.offStroke
      
    }
  }


  move() {
    this.x = this.x + this.Xspeed;
    this.y = this.y + this.Yspeed;
  }
  show() {

    stroke(this.currentStroke);
    strokeWeight(2);
    fill(this.currentColor);
    ellipse(this.x, this.y, this.r);
  }
}