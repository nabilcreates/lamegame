var rx, ry, rs, score, highscore, timer, scoreplus;
var pickups = [];

function setup() {
    createCanvas(64 * 5, 64 * 5)

    pickups.push({
        x: random(width),
        y: random(height),
        s: 64,
    })

    score = 0;
    highscore = 0
    timer = 1 * 1000;
    scoreplus = 1

    rx = 0;
    ry = 0;
    rs = 64;
}

function draw() {
    background(0)

    fill(255)
    text(score, 10, 20);
    text(timer, 10, 40);

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
}

function spawn(index) {
    pickups[index] = {
        x: random(width),
        y: random(height),
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
    switch (event.key) {
        case 'w':
            ry -= rs;
            break;

        case 'a':
            rx -= rs
            break;

        case 's':
            ry += rs
            break;

        case 'd':
            rx += rs;
            break;

    }
}