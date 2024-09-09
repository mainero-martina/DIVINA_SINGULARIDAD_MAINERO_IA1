class Hell extends Base{
  constructor() {
    super();
    this.wellX = width / 2; 
    this.wellY = height / 2; 
    this.wellDiameter = 300;
    this.particles = [];
    this.setCharacterImage(loadImage('assets/images/linus.jpg'));
    this.addText('Bienvenido, presiona "Z" para\ninteractuar');
    this.addText('Este es el Infierno');
    this.addText('Soy tu guia Linus, la AI de la razón y la sabiduría');
    this.addText('Ves ese circulo negro en el medio?\ndonde caen los 0 y 1?');
    this.addText('Los 0 y 1 son las almas nuevas llegando\naqui despues de morir');
    this.addText('Ahora estas en las puertas del infierno');
    this.addText('Para llegar a el hay que bajar por ahi');
    this.addText('Atravesar sus circulos');
    this.addText('Pero tu no perteneces aqui');
    this.addText('Sigue tu camino, hasta luego viajero');
    this.addText(' ');
  }
  
  draw(){
    super.draw();
    this.drawWell(this.wellX, this.wellY, this.wellDiameter);
    this.updateAndDisplayParticles();
  }
   //circulo gradiente negro donde se meten las particulas
  drawWell(x, y, diameter) {
    let steps = 110;

    for (let i = 0; i < steps; i++) {
      let lerpFactor = map(i, 0, steps, 0, 1);
      let col = lerpColor(color(70), color(0), lerpFactor);
      fill(col);
      ellipse(x, y, diameter - (i * diameter / steps), diameter - (i * diameter / steps));
    }
  }
  updateAndDisplayParticles() {

    if (frameCount % 2 === 0) {
      this.particles.push(new Particle(random(width), random(height), this.wellX, this.wellY));
    }

    // va mostrando y agregando particulas
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].update();
      this.particles[i].display();
      if (this.particles[i].isAtCenter()) {
        this.particles.splice(i, 1); //elimina particulas del array cuando llegan al centro para hacer el efecto de q se meten al circulo
      }
    }
  }
}
class Particle {
  constructor(x, y, targetX, targetY) {
    this.x = x;
    this.y = y;
    this.targetX = targetX;
    this.targetY = targetY;
    this.speed = random(1, 5);
    this.binary = random([0, 1]);
    this.color = color(random(200, 255), 0, 0);
  }

  update() {
    let angle = atan2(this.targetY - this.y, this.targetX - this.x);
    this.x += this.speed * cos(angle);
    this.y += this.speed * sin(angle);
  }

  display() {
    fill(this.color);
    textSize(20);
    text(this.binary, this.x, this.y);
  }

  isAtCenter() {
    return dist(this.x, this.y, this.targetX, this.targetY) < 5;
  }
}