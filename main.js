var rx, ry, rs;
var pickups = [];

function setup() {
    createCanvas(64 * 5, 64 * 5)

    pickups.push({
        x: 0,
        y: 0,
        s: 64,
    })

    rx = 0;
    ry = 0;
    rs = 64;
}

function draw() {

    ellipseMode(CORNER)
    
    background(0)
    rect(rx, ry, rs, rs)

    boundary()

    // PICKUP LENGTH ARE NOT FROM 0, SO THE LENGTH IS 1 BUT THE INDEX IS 0 SO LENGTH -1 IS INDEX
    ellipse(pickups[pickups.length - 1].x, pickups[pickups.length - 1].y, pickups[pickups.length - 1].s)

    console.log(dist(rx, ry, pickups[pickups.length - 1].x, pickups[pickups.length - 1].y, ))

    if (dist(rx, ry, pickups[pickups.length - 1].x, pickups[pickups.length - 1].y, ) <= pickups[pickups.length - 1].s) {
        // score++
        spawn(pickups.length-1)
    }

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