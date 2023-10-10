Parado_no_Bailao="";
Runaway="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Runaway = loadSound("Runaway.mp3");
    Parado_no_Bailao = loadSound("Parado_no_Bailao.mp3");
}

function draw(){
    image(video,0,0,600,530);
}