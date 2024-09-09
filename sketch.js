let base ,hell, purgatory, heaven, start, end;
let currentScene;
let pixelFont;
let courierNew;

function preload() {
  pixelFont = loadFont('assets/font/8bitOperatorPlus8-Regular.ttf');
  courierNew = loadFont('assets/font/courierNew.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  base = new Base();
  start = new Start();
  hell = new Hell();
  purgatory = new Purgatory();
  heaven = new Heaven();
  end = new End();

  currentScene = start;
}

function draw() {
  currentScene.draw();

  if (currentScene.isEventCompleted && currentScene.isEventCompleted()) {
    if (currentScene === hell) {
      changeScene(purgatory);
    } else if (currentScene === purgatory) {
      changeScene(heaven);
    } else if (currentScene === heaven) {
      changeScene(end);
    }
  }
}

// interaccion de teclas de todo el juego, cambiar escenario o interactuar con cosas
function keyPressed() {
  if (currentScene.handleKeyPressed) {
    currentScene.handleKeyPressed();
  }

  if (currentScene === start && keyCode === ENTER) {
    changeScene(hell);
  }
  if (key === '1') {
    changeScene(hell);
  } else if (key === '2') {
    changeScene(purgatory);
  } else if (key === '3') {
    changeScene(heaven);
  }else if (key === '4') {
    changeScene(start);
  }
}

function changeScene(newScene) {
  currentScene = newScene;
  }

function mousePressed () {
  if(currentScene == purgatory){
    purgatory.mousePressed();
  }
  if(currentScene == end){
    changeScene(start);
  }
}
