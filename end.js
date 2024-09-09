//pantalla final final
class End {
    constructor() {
    }
  
    draw() {
      background(0, 0, 0);
      textAlign(CENTER, CENTER);
      textSize(32);
      fill(255);
      textFont(courierNew);
      text('BIENVENIDO OTRA VEZ DIOS', width / 2, height / 2 - 35);
      textSize(15);
      text('clickea para reiniciar',  width / 2, height - 20)
    }
  }
  