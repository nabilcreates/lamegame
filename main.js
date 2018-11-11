var rx, ry, rs, score, highscore, timer, scoreplus, fillc;
var pickups = [];

function setup() {
    createCanvas(64 * 5, 64 * 5)

    pickups.push({
        x: random(width),
        y: random(height),
        s: 64,
    })

    spawn(pickups[0])

    score = 0;
    highscore = 0
    timer = 1 * 1000;
    scoreplus = 1
    fillc = {
        r: 255,
        g: 255,
        b: 255
    }

    rx = 0;
    ry = 0;
    rs = 64;
}

function draw() {
    background(0)

    fill(fillc.r, fillc.g, fillc.b)
    text(score, 10, 20);
    text(timer, 10, 40);

    // ELLIPSEMODE IS CORNER
    ellipseMode(CORNER)

    rect(rx, ry, rs, rs)

    boundary()
    countdown()

    // PICKUP LENGTH ARE NOT FROM 0, SO THE LENGTH IS 1 BUT THE INDEX IS 0 SO LENGTH -1 IS INDEX
    ellipse(pickups[pickups.length - 1].x, pickups[pickups.length - 1].y, pickups[pickups.length - 1].s)

    // LOG THE SCORE (DEBUG MODE)
    // console.log(score)

    if (dist(rx, ry, pickups[pickups.length - 1].x, pickups[pickups.length - 1].y, ) <= pickups[pickups.length - 1].s) {
        score += scoreplus
        spawn(pickups.length - 1)
    }

}

function countdown() {
    if (timer / 100 <= 0) {
        endGame()
    }

    if (timer / 100 > 0) {
        timer -= 1
    }
}

function endGame() {
    timer = 'GAME OVER!'
    highscore = score;
    scoreplus = 0
    score += scoreplus

    // FILL WHOLE CANVAS TO BLACK
    fillc = {
        r: 255,
        g: 0,
        b: 0
    }
}

function spawn(index) {

    var randomNumbers = [0, 64, 128, 192, 256, 320]
    var selectnum = Math.floor(random(randomNumbers.length - 1))

    console.log(selectnum)
    console.log(randomNumbers[selectnum])
    
    pickups[index] = {
        x: randomNumbers[selectnum],
        y: randomNumbers[selectnum],
        s: 64,
    }
}

function boundary() {

    if (rx > width) {
        rx = 0
    }

    if (rx < 0) {
        rx = width
    }

    if (ry > height) {
        ry = 0;
    }

    if (ry < 0) {
        ry = height;
    }

}

function keyPressed(event) {

    // CONSOLE LOG EVENT (DEBUG MODE)
    // console.log(event)

    switch (event.code.toLowerCase()) {
        case 'keyw':
            ry -= rs;
            break;

        case 'keya':
            rx -= rs
            break;

        case 'keys':
            ry += rs
            break;

        case 'keyd':
            rx += rs;
            break;

    }
}