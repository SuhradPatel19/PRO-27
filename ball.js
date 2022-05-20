class Circle {
  constructor(x, y, r) {
    let options = {
      friction: 0.3,
      restitution: 0.6
    };
    this.r = r;
    this.x = x
    this.y=y
    this.body = Matter.Bodies.circle(this.x, this.y, this.r, options);
    // this.w = w;  
    // this.h = h;

    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(1);
    stroke(255);
    fill(r,g,b);
    ellipseMode(RADIUS)
    ellipse(0, 0, this.r, this.r);
    pop();
  }
}
