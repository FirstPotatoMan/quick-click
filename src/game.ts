import p5 from 'p5'
//create div
const game = document.createElement('div')
game.classList.add('quickClickGameDiv')

//get Scroll position
const scrollLeft = document.documentElement.scrollLeft
const scrollTop = document.documentElement.scrollTop
console.log(scrollLeft, scrollTop)

//style div
game.style.top = scrollTop.toString()
game.style.left = scrollLeft.toString()
game.style.position = 'absolute'
game.style.zIndex = '9000'

//append div to DOM
document.documentElement.appendChild(game)

new p5((sketch:p5) => {
    var colorValue = 100;
    var circleX = 200;
    var circleY = 200;
    var circleDiameter = 50;
    var score = 0;

    const updateCircle = ()=> {
        circleX = sketch.random(50, sketch.windowWidth-50);
        circleY = sketch.random(50, sketch.windowHeight-50);
    }
    const updateScore = () => {
        sketch.textSize(20);
        sketch.text("Score: " + score, 20, 20);
    }
    sketch.setup = ()=> {
        // const [x, y] = getCurrentWindow()
        // console.log(x, y)
        // game.style.left = x.toString()
        // game.style.top = y.toString()
        sketch.createCanvas(sketch.windowWidth, sketch.windowHeight)
        // startGame()
        updateCircle();
    }
    sketch.mousePressed = () => {
        var d = sketch.dist(sketch.mouseX, sketch.mouseY, circleX, circleY);
        if (d < circleDiameter / 2) {
            updateCircle();
            score += 1;
        }
    }
    sketch.draw = ()=> {
        sketch.clear()
        sketch.fill(colorValue);
        // sketch.background(circleDiameter,200,300);
        sketch.ellipse(circleX, circleY, circleDiameter, circleDiameter);
        updateScore();
    }
}, game)