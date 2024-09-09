class Heaven extends Base{
  constructor() {
    super();
    this.setCharacterImage(loadImage('assets/images/sAInt.jpg'));
    this.addText('Felicidades');
    this.addText('Este es el Cielo');
    this.addText('O como muchos le dicen el paraiso');
    this.addText('Soy tu guia sAInt, la AI del misticismo\ny la iluminación');
    this.addText('Te ayudare en la comprensión final\ndel Paraíso');
    this.addText('Como ves esos orbes de luz son las\nalmas que has ayudado');
    this.addText('Gracias a ti se iluminaron');
    this.addText('Ahora pueden descansar en paz aqui');
    this.addText('Lastimosamente no te puedes quedar');
    this.addText('Te esperan en la siguiente escena');
    this.addText('Hasta Luego siempre es un placer\nverlo');
    this.addText(' ');
    this.cloudImage = loadImage('assets/images/nube.png');
    this.orbImage = loadImage('assets/images/angel1.png');
    this.background = color(135, 206, 235); 
    this.clouds = []; 
    this.numClouds = 15; 
    // creo nubes en posiciones aleatorias
    for (let i = 0; i < this.numClouds; i++) {
      let cloud = {
        x: random(width), 
        y: random(height / 2), 
        size: random(100, 300), 
        speed: random(0.5, 1.5) 
      };
      this.clouds.push(cloud);
    }
    this.orbs = []; 
    this.numOrbs = 15; 

    // creo orbes de luz en posiciones aleatorias
    for (let i = 0; i < this.numOrbs; i++) {
      let orb = {
        x: random(width), 
        y: random(height), 
        size: random(50, 300), 
        speedX: random(-2, 2), 
        speedY: random(-2, 2) 
      };
      this.orbs.push(orb);
    }
  }

  draw() {
    
    background(this.background);
    super.draw();
    // dibujo las nubes y hago que se muevan
    for (let cloud of this.clouds) {
      this.drawCloud(cloud.x, cloud.y, cloud.size);
      cloud.x += cloud.speed; 
      if (cloud.x > width + cloud.size) {
        cloud.x = -cloud.size;
      }
    }
    //lo mismo aca con los orbs
    for (let orb of this.orbs) {
      this.drawOrb(orb.x, orb.y, orb.size);
      orb.x += orb.speedX; 
      orb.y += orb.speedY; 

      // si el orb sale del canvas reiniciar su posicion
      if (orb.x > width + orb.size || orb.x < -orb.size) {
        orb.speedX *= -1; 
      }
      if (orb.y > height + orb.size || orb.y < -orb.size) {
        orb.speedY *= -1; 
      }
    }
    
  }
  
  drawOrb(x, y, size) {
    push();
    imageMode(CENTER);
    image(this.orbImage, x, y, size, size);
    pop();
  }
  drawCloud(x, y, size) {
    push();
    imageMode(CENTER);
    image(this.cloudImage, x, y, size, size);
    pop();
  }
}