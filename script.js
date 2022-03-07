/// <reference path="./Intellisense/p5.global-mode.d.ts" />

var windowWidth = window.innerWidth
var windowHeight = window.innerHeight
var introScreen = true 
var titleFontSize = windowHeight / 16
var bodyFontSize = titleFontSize - 22
var countData = 18
var dotRadius = 10
var newMouseX = 0
var newMouseY = 0
var temp = 1
var dotPosition = [
    {x: 0/1.7,y: 400/1.7, status: false},
    {x: 136.63/1.7,y: 375.40/1.7, status: false},
    {x: 256.79/1.7,y: 306.03/1.7, status: false},
    {x: 345.97/1.7,y: 199.75/1.7, status: false},
    {x: 393.43/1.7,y: 69.37/1.7, status: false},
    {x: 393.43/1.7,y: -69.37/1.7, status: false},
    {x: 345.97/1.7,y: -199.75/1.7, status: false},
    {x: 256.79/1.7,y: -306.03/1.7, status: false},
    {x: 136.63/1.7, y: -375.40/1.7, status: false},
    {x: 0/1.7, y: -400/1.7, status: false},
    {x: -136.63/1.7, y: -375.40/1.7, status: false},
    {x: -256.79/1.7, y: -306.03/1.7, status: false},
    {x: -345.97/1.7, y: -199.75/1.7, status: false},
    {x: -393.43/1.7, y: -69.37/1.7, status: false},
    {x: -393.43/1.7, y: 69.37/1.7, status: false},
    {x: -345.97/1.7, y: 199.75/1.7, status: false},
    {x: -256.79/1.7, y: 306.03/1.7, status: false},
    {x: -136.63/1.7, y: 375.40/1.7, status: false}, 
]

function preload() {
    titleFont = loadFont('./Font/Sketch_Block.ttf')
    bodyFont = loadFont('./Font/Avenir_Roman.otf')
    table = loadTable('./Data_V1.0.csv', 'csv', 'header')
    imagePlane = loadImage('./Plane-02-04.png')
    // bgm = loadSound('./Audio/BGM.mp3')
    aud1 = loadSound('./Audio/1977.mp3')
    aud2 = loadSound('./Audio/1978.mp3')
    // aud3 = loadSound('./Audio/1979.mp3')
    // aud4 = loadSound('./Audio/1979_1.mp3')
    // aud5 = loadSound('./Audio/1982.mp3')
    // aud6 = loadSound('./Audio/1985.mp3')
    // aud7 = loadSound('./Audio/1985_1.mp3')
    // aud8 = loadSound('./Audio/1986.mp3')
    // aud9 = loadSound('./Audio/1988.mp3')
    // aud10 = loadSound('./Audio/1988_1.mp3')
    // aud11 = loadSound('./Audio/1992.mp3')
    // aud12 = loadSound('./Audio/1976.mp3')
    // aud13 = loadSound('./Audio/1976_1.mp3')
    // aud14 = loadSound('./Audio/1976_2.mp3')
    // aud15 = loadSound('./Audio/1998.mp3')
    // aud16 = loadSound('./Audio/2000.mp3')
    // aud17 = loadSound('./Audio/2009.mp3')
    // aud18 = loadSound('./Audio/2010.mp3')   
}

function setup() {
    ellipseMode(CENTER)
    rectMode(CENTER)
    drawDot()
    writeIntro()
    aud2.play()
}

function draw() {
    if(mouseX < windowWidth/2 ){
        newMouseX = -1 * (windowWidth/2 - mouseX)
        // console.log(newMouseX)
        if(mouseY < windowHeight/2 ) {
            // console.log('Quadrant 1')
            newMouseY = -1 * (windowHeight/2 - mouseY)
            // console.log(newMouseY)
        }
        else if(mouseY > windowHeight/2 ) {
            // console.log('Quadrant 4')
            newMouseY = -1 * (windowHeight/2 - mouseY)
            // console.log(newMouseY)
        }
    }
    else if(mouseX > windowWidth/2 ){
        newMouseX = +1 * ((mouseX - windowWidth/2))
        // console.log(newMouseX)
        if(mouseY < windowHeight/2 ) {
            // console.log('Quadrant 2')
            newMouseY = 1 * ((mouseY - windowHeight/2))
            // console.log(newMouseY)
        }
        else if(mouseY > windowHeight/2 ) {
            // console.log('Quadrant 3')
            newMouseY = 1 * ((mouseY - windowHeight/2))
            // console.log(newMouseY)
        }
    }
    for(let i = 0; i < 18; i++) {
        if(dist(dotPosition[i].x, dotPosition[i].y, newMouseX, newMouseY) < dotRadius && introScreen == false) {
            displayInformation(i)
        }
    }
}   

function drawDot(selectedCircle) {
    clear()
    createCanvas(windowWidth, windowHeight)
    background(25)
    translate(windowWidth/2, windowHeight/2) 
    for(let i = 0; i < 18; i++) {
        noStroke()
        fill(255)
        ellipse(dotPosition[i].x, dotPosition[i].y, dotRadius, dotRadius)
        if(selectedCircle == i) {
            console.log(selectedCircle, i)
            noFill()
            stroke(255)
            ellipse(dotPosition[i].x, dotPosition[i].y, dotRadius+40, dotRadius+40)
        }
        //aud3.play()
    }
}

function writeIntro() {
    textAlign(CENTER)
    textFont(titleFont)
    textSize(titleFontSize)
    fill(255, 0 , 0)
    text('Last Words', 0, -windowHeight/6.4)
    textFont(bodyFont)
    textSize(bodyFontSize)
    fill(255)
    text('This interactive website contains the last words said by people before their plane crashed. Hover ', 0, -windowHeight/16, 350)
    text('Explore', 0, windowHeight/4.6)
    noFill()
    stroke(255)
    strokeWeight(1)
    rect(0, windowHeight/4.8, 120, 40, 20)
    imageMode(CENTER)
    image(imagePlane, 350, 175, windowWidth/3, windowHeight/3)
}

function mousePressed() {
    if(mouseX < windowWidth/2 ){
        newMouseX = -1 * (windowWidth/2 - mouseX)
        // console.log(newMouseX)
        if(mouseY < windowHeight/2 ) {
            // console.log('Quadrant 1')
            newMouseY = +1 * (windowHeight/2 - mouseY)
            // console.log(newMouseY)
        }
        else if(mouseY > windowHeight/2 ) {
            // console.log('Quadrant 4')
            newMouseY = 1 * (windowHeight/2 - mouseY)
            // console.log(newMouseY)
        }
    }
    else if(mouseX > windowWidth/2 ){
        newMouseX = +1 * ((mouseX - windowWidth/2))
        // console.log(newMouseX)
        if(mouseY < windowHeight/2 ) {
            // console.log('Quadrant 2')
            newMouseY = -1 * ((mouseY - windowHeight/2))
            // console.log(newMouseY)
        }
        else if(mouseY > windowHeight/2 ) {
            // console.log('Quadrant 3')
            newMouseY = -1 * ((mouseY - windowHeight/2))
            // console.log(newMouseY)
        }
    }
    if(dist(newMouseX, newMouseY, 0, -windowHeight/4.6) < 120 && newMouseX < -1 && introScreen == true) {
        introScreen = false
        drawDot()
    }
}

function displayInformation(dotNumber) {
    console.log(dotNumber)
    noStroke()
    drawDot(dotNumber)
    textAlign(CENTER)
    fill(255, 0 , 0)
    textFont(titleFont)
    textSize(titleFontSize)
    text(table.get(dotNumber, 4), 0, -windowHeight/4)
    textFont(bodyFont)
    textSize(bodyFontSize/1.2)
    text('Deaths', 0, -windowHeight/5) 
    fill(255)
    text(table.get(dotNumber, 1), 0, -windowHeight/7)
    text(table.get(dotNumber, 3), 0, -windowHeight/11, 300)
    textSize(bodyFontSize/1.3)
    text(table.get(dotNumber, 6), 0, 0, 320)
    if(temp == 1) {
        aud2.stop()
        aud1.play()
        temp = 2
    }
}

