class Purgatory extends Base {
  constructor() {
    super();
    this.eventCompleted = false;
    this.setCharacterImage(loadImage('assets/images/kernel.jpg'));
    
    this.addText('Hola');
    this.addText('Este es el Pugatorio');
    this.addText('Soy tu guia Kernel, la AI de la fe y la\nespiritualidad');
    this.addText('Te guiare en tu camino de purificación en\nel Purgatorio');
    this.addText('Esos circulos irregulares que se ven alli\nson almas en proceso de purificacion');
    this.addText('Estan arrepintiendose de sus pecados aqui');
    this.addText('Por favor ayudalas a liberarse\ny continuar su camino');
    this.addText('Si clickeas sobre ellas se rompera su estado\nde perturbacion');
    this.addText('Y podran subir al cielo');
    this.addText('Una vez que ayudes a estas almas en pena\ntu tambien subiras');
    this.addText(' ');
    this.addText(' ');

    this.circles = [];
    this.circlesClicked = 0; 
    this.totalCircles = 15;
    for (let i = 0; i < 15; i++) { 
      let x = random(50, width - 50); 
      let y = random(50, height - 130);
      let circle = {
        x: x,
        y: y,
        size: 50,
        brightness: 255,
        brightnessChange: 2,
        edgeVariability: 7
      };
      this.circles.push(circle);
    }
  }

  draw() {
    super.draw();
    noStroke();

    for (let circle of this.circles) {
     
      circle.brightness += circle.brightnessChange;
      if (circle.brightness > 255 || circle.brightness < 100) {
        circle.brightnessChange *= -1; 
      }
      if (circle.isElevating) {
        circle.y -= 5;
      }
      fill(circle.brightness); 
      this.drawIrregularCircle(circle.x, circle.y, circle.size, circle.edgeVariability);
    }

    if (this.circlesClicked === this.totalCircles) {
      this.eventCompleted = true;
    }
  }
  //hago circulitos que titilan y tienen forma irregular
  drawIrregularCircle(x, y, size, edgeVariability) {
    let numVertices = 50; 
    let angleStep = TWO_PI / numVertices;
    beginShape();
    for (let i = 0; i < TWO_PI; i += angleStep) {
      let angle = i;
      let radius = size / 2 + random(-edgeVariability, edgeVariability);
      let vx = x + cos(angle) * radius;
      let vy = y + sin(angle) * radius;
      vertex(vx, vy);
    }
    endShape(CLOSE);
  }
  //cuando los presionas se van flotando para arriba y dejar de ser irregulares
  mousePressed() {
    for (let circle of this.circles) {
      let d = dist(mouseX, mouseY, circle.x, circle.y);
      if (d < circle.size / 2) {
        
        circle.edgeVariability = 0; 
        circle.isElevating = true;
        circle.isClicked = true;
        this.circlesClicked++; 
      }
    }
  }
}