img = "";
estado = "";

function preload()
{
    img = loadImage('dog_cat.jpg');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Estado : Detección de objetos";
  }

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#a2d3c4")
    text("perro", 45, 75);
    noFill();
    stroke("#a2d3c4");
    rect(30, 60 , 450, 350);

    fill("#ffff78");
    text("gato", 320, 120);
    noFill();
    stroke("#e8ac9c");
    rect(300, 90, 270, 320);
}

function modelLoaded() {
    console.log("¡Modelo cargado!")
    estado = true;
    objectDetector.detect(img, gotResult);
  }
  
function gotResult(error, results) 
{
  if (error) {
    console.log(error);
  }
  console.log(results);
}