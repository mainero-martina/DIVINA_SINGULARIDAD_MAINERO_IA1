//clase base padre que uso para los usos basicos de todas las pantallas interactivas
class Base {
    constructor() {
      this.eventCompleted = false;
      this.texts = [];
      this.currentTextIndex = 0;
      this.characterImage = null;
      this.background2 = null;
      this.background = 0;
    }
    addText(texts) {
        this.texts.push(texts);
      }
      setCharacterImage(img) {
        this.characterImage = img;
      }
    draw() {
    background(this.background);
    push();
    fill(0);
    stroke(255);
    rect(width / 130, height - 120, width / 2, 110); 
    pop();
    fill(255);
    textSize(24);
    textFont(pixelFont);
    textAlign(LEFT, TOP);
    text(this.texts[this.currentTextIndex], width / 12, height - 90);
     //evento que hace que avances en el juego
    if (this.currentTextIndex === this.texts.length - 1) {
      this.eventCompleted = true;
    }
    if (this.characterImage) {
      image(this.characterImage, width / 120, height - 115, 100, 100); 
    }
}    
      nextText() {
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
      }
      
      handleKeyPressed() {
        if (key === 'z') {
          this.nextText();
        }  
      }
      isEventCompleted() {
        return this.eventCompleted;
      }
      mousePressed(){
      }
   
    }
     