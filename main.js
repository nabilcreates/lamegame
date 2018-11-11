var rx, ry, rs;

function setup() {
    createCanvas(64 * 5, 64 * 5)

    rx = 0;
    ry = 0;
    rs = 64;
}

function draw() {
    background(0)
    rect(rx, ry, rs, rs)

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