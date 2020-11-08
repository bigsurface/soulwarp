let heart, img;
// let graphics;
let myShader;
let theta = 0;

function preload(){
    heart = loadModel('heart.obj');
    img = loadImage('heart.jpg');
    myShader = loadShader('basic.vert', 'basic.frag');
}

function setup(){
    createCanvas(540, 540, WEBGL);
    // noStroke();
    // graphics = createGraphics(128, 512);
    // graphics.img(img, 0, 0, 128, 512);
}

function draw(){

    // background(255, 192, 203);
    // ambientLight(200);
    // scale(10);
    // push();
    rotateX(theta);
    rotateY(theta/2);
    texture(img);
    model(heart);
    shader(myShader);
    rect(0,0,width,height);
    // pop();

    theta+=0.01;
}